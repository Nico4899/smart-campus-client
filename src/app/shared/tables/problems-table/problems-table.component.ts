import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import {
  ProblemManagementConnectorService
} from "../../../core/connectors/problem-management-connector.service";
import {SelectionModel} from "@angular/cdk/collections";
import {
  AddProblemComponent
} from "../../dialogs/add-problem/add-problem.component";
import {EditBuildingComponent} from "../../dialogs/edit-building/edit-building.component";
import {RemoveComponent} from "../../dialogs/remove/remove.component";
import {FilterBuildingsComponent} from "../../dialogs/filter-buildings/filter-buildings.component";
import {
  ListProblemsRequest,
  ListProblemsResponse,
  GrpcProblem,
  CreateProblemResponse, UpdateProblemResponse, UpdateProblemRequest, CreateProblemRequest, GrpcFilterValueSelection
} from "../../../../proto/generated/problem_management_pb";
import {
  CreateBuildingRequest, GrpcBuildingFilterValueSelection,
  GrpcFloors,
  GrpcGeographicalLocation, ListBuildingsRequest, RemoveRequest, UpdateBuildingRequest
} from "../../../../proto/generated/building_management_pb";
import {FilterProblemsComponent} from "../../dialogs/filter-problems/filter-problems.component";
import {EditProblemComponent} from "../../dialogs/edit-problem/edit-problem.component";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-problems-table',
  templateUrl: './problems-table.component.html',
  styleUrls: ['./problems-table.component.css']
})
export class ProblemsTableComponent implements AfterViewInit, OnInit {
  /*
  private State state;
  private String title;
  private String description;
  private Timestamp creationTime;
  private Timestamp lastModified;
  private String reporter;
  private String identificationNumber;
  private String referenceIdentificationNumber;
  private String notificationIdentificationNumber;
   */


  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcProblem.AsObject> = new MatTableDataSource<GrpcProblem.AsObject>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  // search values from search bars
  searchKey: string = "";

  displayedColumns: string[] = ['identificationNumber', 'reporter', 'title', 'state', 'creationTime', 'edit_problem', 'delete_problem'];

  constructor(private problemManagementConnector: ProblemManagementConnectorService, private dialog: MatDialog) {
  }

  ngOnInit() {

    // run initial calls
    let listProblemsRequest = new ListProblemsRequest();
    this.problemManagementConnector.listProblems(listProblemsRequest, ProblemsTableComponent.interpretListProblemsResponse, this);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applySearch() {
    this.dataSource.filter = this.searchKey?.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // private callback methods for api calls
  private static interpretListProblemsResponse(response: ListProblemsResponse, self: ProblemsTableComponent): void {
    self.dataSource.data = response.toObject().problemsList;
  }

  private static interpretUpdateProblemResponse(response: UpdateProblemResponse, self: ProblemsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != response.getProblem()?.getIdentificationNumber());
    self.dataSource.data.push(response.getProblem()?.toObject()!);
  }

  private static interpretRemoveProblemResponse(id: string, self: ProblemsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != id);
  }

  openUpdateProblemDialog(problem: GrpcProblem.AsObject) {
    const dialogRef = this.dialog.open(EditProblemComponent, {data: problem});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnector.updateProblem(ProblemsTableComponent.buildUpdateProblemRequest(result), ProblemsTableComponent.interpretUpdateProblemResponse, this);
      } else {
        return;
      }
    })
  }

  openRemoveProblemDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveComponent, {data: identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnector.removeProblem(ProblemsTableComponent.buildRemoveRequest(result), ProblemsTableComponent.interpretRemoveProblemResponse, this);
      } else {
        return;
      }
    })
  }

  openFilterProblemsDialog() {
    const dialogRef = this.dialog.open(FilterProblemsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnector.listProblems(ProblemsTableComponent.buildListProblemsRequest(result), ProblemsTableComponent.interpretListProblemsResponse, this);
      } else {
        return;
      }
    })
  }

  private static buildUpdateProblemRequest(result: any): UpdateProblemRequest {
    let request = new UpdateProblemRequest();
    request.setProblemTitle(result.data.problemTitle);
    request.setProblemDescription(result.data.problemDescription);
    return request;
  }

  private static buildRemoveRequest(result: any): RemoveRequest {
    let request = new RemoveRequest();
    request.setIdentificationNumber(result.data.identificationNumber);
    return request;
  }

  public static buildListProblemsRequest(result: any): ListProblemsRequest {
    let request = new ListProblemsRequest();
    let selection = new GrpcFilterValueSelection();
    selection.setStatesList(result.data.states);
    request.setGrpcFilterValueSelection(selection);
    return request;
  }
}
