import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import {ProblemManagementConnectorService} from "../../../core/connectors/problem-management-connector.service";
import {RemoveComponent} from "../../dialogs/remove/remove.component";
import {
  ChangeStateRequest,
  ChangeStateResponse,
  GrpcFilterValueSelection,
  GrpcProblem,
  GrpcProblemState,
  GrpcStateOperation,
  ListProblemsForUserRequest,
  ListProblemsRequest,
  ListProblemsResponse,
  UpdateProblemRequest,
  UpdateProblemResponse
} from "../../../../proto/generated/problem_management_pb";
import {RemoveRequest} from "../../../../proto/generated/building_management_pb";
import {FilterProblemsComponent} from "../../dialogs/filter-problems/filter-problems.component";
import {EditProblemComponent} from "../../dialogs/edit-problem/edit-problem.component";
import {ExpandAnimation} from "../../animations";
import {TranslateService} from "@ngx-translate/core";
import {AuthServiceService} from "../../../core/authentication/auth-service.service";

@Component({
  selector: 'app-problems-table',
  templateUrl: './problems-table.component.html',
  styleUrls: ['./problems-table.component.css'],
  animations: [ExpandAnimation],
})
export class ProblemsTableComponent implements AfterViewInit, OnInit {

  problemState = Object.values(GrpcProblemState).filter(e => e != 0) as GrpcProblemState[];

  selectedStates: { state: GrpcProblemState, selected: boolean } [] = [];


  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcProblem.AsObject> = new MatTableDataSource<GrpcProblem.AsObject>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // search values from search bars
  searchKey: string = "";

  // data loading
  isLoading = true;

  columnsToDisplay: string[] = ['problemTitle', 'problemState', 'problemReporter', 'createdOn', 'lastModifiedOn', 'actions', 'edit_problem', 'delete_problem'];
  expandedProblem!: string;

  constructor(private problemManagementConnector: ProblemManagementConnectorService, private dialog: MatDialog,
              private translateService: TranslateService, public authService: AuthServiceService) {
    this.problemState.forEach(e => this.selectedStates.push({state: e, selected: false}));
  }

  ngOnInit() {
    if (this.authService.isAdmin()) {
      let listProblemsRequest = new ListProblemsRequest();
      this.problemManagementConnector.listProblems(listProblemsRequest, ProblemsTableComponent.interpretListProblemsResponse, this);
    } else if (this.authService.isUser()) {
      let listProblemsForUserRequest = new ListProblemsForUserRequest();
      listProblemsForUserRequest.setReporter(this.authService.eMail as string);
      this.problemManagementConnector.listProblemsForUser(listProblemsForUserRequest, ProblemsTableComponent.interpretListProblemsResponse, this);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getLink(problem: GrpcProblem.AsObject) {
    if (problem.referenceIdentificationNumber.match("c-\\d+")) {
      return "/components/" + problem.referenceIdentificationNumber;
    } else if (problem.referenceIdentificationNumber.match("r-\\d+")) {
      return "/rooms/" + problem.referenceIdentificationNumber;
    } else if (problem.referenceIdentificationNumber.match("b-\\d+")) {
      return "/buildings/" + problem.referenceIdentificationNumber;
    } else {
      return "";
    }
  }

  applySearch() {
    this.dataSource.filter = this.searchKey?.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changeState(operation: GrpcStateOperation, identificationNumber: string) {
    this.problemManagementConnector.changeProblemState(
      ProblemsTableComponent.buildChangeProblemStateRequest(operation, identificationNumber), ProblemsTableComponent.interpretChangeProblemStateResponse, this);
  }

  // private callback methods for api calls
  private static interpretListProblemsResponse(response: ListProblemsResponse, self: ProblemsTableComponent): void {
    self.dataSource.data = response.toObject().problemsList;
    self.isLoading = false;
  }

  private static interpretUpdateProblemResponse(response: UpdateProblemResponse, self: ProblemsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != response.getProblem()?.getIdentificationNumber());
    let data = self.dataSource.data;
    data.push(response.getProblem()!.toObject());
    self.dataSource.data = data;
  }

  private static interpretRemoveProblemResponse(id: string, self: ProblemsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != id);
  }

  private static interpretChangeProblemStateResponse(response: ChangeStateResponse, self: ProblemsTableComponent) {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != response.getGrpcProblem()?.getIdentificationNumber());
    let data = self.dataSource.data;
    data.push(response.getGrpcProblem()!.toObject());
    self.dataSource.data = data;
  }

  openUpdateProblemDialog(problem: GrpcProblem.AsObject) {
    const dialogRef = this.dialog.open(EditProblemComponent, {data: problem, width: '445px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnector.updateProblem(ProblemsTableComponent.buildUpdateProblemRequest(result, this.authService.eMail as string), ProblemsTableComponent.interpretUpdateProblemResponse, this);
      } else {
        return;
      }
    })
  }

  openRemoveProblemDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveComponent, {data: identificationNumber, width: '445px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnector.removeProblem(ProblemsTableComponent.buildRemoveRequest(result), ProblemsTableComponent.interpretRemoveProblemResponse, this);
      } else {
        return;
      }
    })
  }

  openFilterProblemsDialog() {
    const dialogRef = this.dialog.open(FilterProblemsComponent, {data: {selectedStates: this.selectedStates}, width: '320px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        if (this.authService.isAdmin()) {
          this.isLoading = true;
          this.selectedStates = result.data.problemStates;
          this.problemManagementConnector.listProblems(ProblemsTableComponent.buildListProblemsRequest(result, this), ProblemsTableComponent.interpretListProblemsResponse, this);
        } else if (this.authService.isUser()) {
          this.isLoading = true;
          this.selectedStates = result.data.problemStates;
          this.problemManagementConnector.listProblemsForUser(ProblemsTableComponent.buildListProblemsForUserRequest(result, this.authService.eMail as string, this), ProblemsTableComponent.interpretListProblemsResponse, this);
        }
      } else {
        return;
      }
    })
  }

  private static buildUpdateProblemRequest(result: any, email: string): UpdateProblemRequest {
    let request = new UpdateProblemRequest();
    request.setProblemTitle(result.data.problemTitle);
    request.setProblemDescription(result.data.problemDescription);
    request.setIdentificationNumber(result.data.identificationNumber);
    request.setReferenceIdentificationNumber(result.data.referenceIdentificationNumber);
    request.setProblemReporter(email);
    return request;
  }

  private static buildRemoveRequest(result: any): RemoveRequest {
    let request = new RemoveRequest();
    request.setIdentificationNumber(result.data.identificationNumber);
    return request;
  }

  private static buildListProblemsRequest(result: any, self: ProblemsTableComponent): ListProblemsRequest {
    let request = new ListProblemsRequest();
    let selection = new GrpcFilterValueSelection();
    selection.setStatesList(self.selectedStates.filter(e => e.selected).map(e => e.state));
    request.setGrpcFilterValueSelection(selection);
    return request;
  }

  private static buildListProblemsForUserRequest(result: any, email: string, self: ProblemsTableComponent): ListProblemsForUserRequest {
    let request = new ListProblemsForUserRequest();
    let selection = new GrpcFilterValueSelection();
    selection.setStatesList(self.selectedStates.filter(e => e.selected).map(e => e.state));
    request.setGrpcFilterValueSelection(selection);
    request.setReporter(email);
    return request;
  }

  private static buildChangeProblemStateRequest(operation: GrpcStateOperation, identificationNumber: string): ChangeStateRequest {
    let request = new ChangeStateRequest();
    request.setGrpcStateOperation(operation);
    request.setIdentificationNumber(identificationNumber);
    return request;
  }
}
