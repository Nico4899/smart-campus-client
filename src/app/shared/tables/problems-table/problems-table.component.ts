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
  CreateProblemResponse, UpdateProblemResponse
} from "../../../../proto/generated/problem_management_pb";

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

  // search values from search bars
  searchKey: string = "";

  displayedColumns: string[] = ['identificationNumber', 'reporter', 'title', 'state', 'creationTime'];

  constructor(private problemManagementConnectorService: ProblemManagementConnectorService, private dialog: MatDialog) {
  }

  ngOnInit() {

    // run initial calls
    let listProblemsRequest = new ListProblemsRequest();
    this.problemManagementConnectorService.listProblems(listProblemsRequest, ProblemsTableComponent.interpretListProblemsResponse, this);
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

  private static interpretCreateProblemResponse(response: CreateProblemResponse, self: ProblemsTableComponent): void {
    self.dataSource.data.push(response.getProblem()?.toObject()!);
  }

  private static interpretUpdateProblemResponse(response: UpdateProblemResponse, self: ProblemsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != response.getProblem()?.getIdentificationNumber());
    self.dataSource.data.push(response.getProblem()?.toObject()!);
  }

  private static interpretRemoveProblemResponse(id: string, self: ProblemsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != id);
  }

  // button methods
  openCreateProblemDialog() {
    const dialogRef = this.dialog.open(AddProblemComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnectorService.createProblem(ProblemsTableComponent.buildCreateProblemRequest(result), ProblemsTableComponent.interpretCreateProblemResponse, this);
      } else {
        return;
      }
    })
  }

  //TODO

  openUpdateBuildingDialog(building: GrpcBuilding.AsObject) {
    const dialogRef = this.dialog.open(EditBuildingComponent, {data: building});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.updateBuilding(BuildingsTableComponent.buildUpdateBuildingRequest(result), BuildingsTableComponent.interpretUpdateBuildingResponse, this);
      } else {
        return;
      }
    })
  }

  openRemoveBuildingDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveComponent, {data: identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.removeBuilding(BuildingsTableComponent.buildRemoveRequest(result), BuildingsTableComponent.interpretRemoveBuildingResponse, this);
      } else {
        return;
      }
    })
  }

  openFilterBuildingsDialog() {
    const dialogRef = this.dialog.open(FilterBuildingsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.listBuildings(BuildingsTableComponent.buildListBuildingsRequest(result), BuildingsTableComponent.interpretListBuildingsResponse, this);
      } else {
        return;
      }
    })
  }
}
