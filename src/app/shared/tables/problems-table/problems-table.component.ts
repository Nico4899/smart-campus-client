import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {
  GrpcProblem,
  ListProblemsRequest,
  ListProblemsResponse
} from "../../../../proto/generated/problem_management_pb";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {BuildingManagementConnectorService} from "../../../core/connectors/building-management-connector.service";
import {ProblemManagementConnectorService} from "../../../core/connectors/problem-management-connector.service";
import {
  ListBuildingsResponse,
  ListFavoriteBuildingsRequest,
  ListFavoriteBuildingsResponse
} from "../../../../proto/generated/building_management_pb";
import {ProblemsComponent} from "../../../modules/problems/problems.component";

@Component({
  selector: 'app-problems-table',
  templateUrl: './problems-table.component.html',
  styleUrls: ['./problems-table.component.css']
})
export class ProblemsTableComponent implements OnInit {

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcProblem.AsObject> = new MatTableDataSource<GrpcProblem.AsObject>();

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // search values from search bars
  searchKey: string = "";

  // columns to be displayed
  displayedColumns: string[] = ['identificationNumber', 'title', 'description', 'state', 'reporter',
    'referenceIdentificationNumber', 'notificationIdentificationNumber', 'creationTime', 'lastModifiedTime'];

  constructor(private problemManagementConnector: ProblemManagementConnectorService) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {
    // run initial calls
    let listProblemsRequest = new ListProblemsRequest();
    this.problemManagementConnector.listProblems(listProblemsRequest, ProblemsTableComponent.interpretListProblemsResponse, this);
  }

  ngAfterViewInit() {
    //add sorter and paginator to datasource
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // search function
  applySearch() {
    this.dataSource.filter = this.searchKey?.trim().toLowerCase();
  }

  // private callback methods for api calls
  private static interpretListProblemsResponse(response: ListProblemsResponse, self: ProblemsTableComponent): void {
    self.dataSource.data = response.toObject().problemsList;
  }

}
