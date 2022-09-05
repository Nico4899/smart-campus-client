import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  GrpcComponent,
  ListFavoriteComponentsRequest,
  ListFavoriteComponentsResponse
} from "../../../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../../../core/connectors/building-management-connector.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-favorite-components-table',
  templateUrl: './favorite-components-table.component.html',
  styleUrls: ['./favorite-components-table.component.css']
})
export class FavoriteComponentsTableComponent implements OnInit, AfterViewInit {

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcComponent.AsObject> = new MatTableDataSource<GrpcComponent.AsObject>();

  // search values from search bars
  searchKey: string = "";

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // columns to be displayed
  displayedColumns: string[] = ['identificationNumber', 'componentType', 'remove_favorite_component'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {
    // run initial calls
    let listFavoriteComponentsRequest = new ListFavoriteComponentsRequest();
    this.buildingManagementConnector.listFavoriteComponents(listFavoriteComponentsRequest, FavoriteComponentsTableComponent.interpretListFavoriteComponentsResponse, this);

  }

  ngAfterViewInit() {
    // add sorter and paginator to datasource
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // search function
  applySearch() {
    this.dataSource.filter = this.searchKey?.trim().toLowerCase();
  }

  // private callback methods for api calls
  private static interpretListFavoriteComponentsResponse(response: ListFavoriteComponentsResponse, self: FavoriteComponentsTableComponent): void {
    self.dataSource.data = response.toObject().componentsList;
  }
}
