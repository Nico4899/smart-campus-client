import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {
  GrpcBuilding,
  ListBuildingsRequest,
  ListBuildingsResponse
} from "../../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../../core/connectors/building-management-connector.service";

@Component({
  selector: 'app-buildings-table',
  templateUrl: './buildings-table.component.html',
  styleUrls: ['./buildings-table.component.css']
})
export class BuildingsTableComponent implements OnInit {

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcBuilding.AsObject> = new MatTableDataSource<GrpcBuilding.AsObject>();

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // search values from search bars
  searchKey: string = "";

  // columns to be displayed
  displayedColumns: string[] = ['identificationNumber', 'buildingNumber', 'buildingName', 'address', 'campusLocation', 'edit_building', 'delete_building'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {

    // run initial calls
    let listBuildingsRequest = new ListBuildingsRequest();
    this.buildingManagementConnector.listBuildings(listBuildingsRequest, BuildingsTableComponent.interpretListBuildingsResponse, this);
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
  private static interpretListBuildingsResponse(response: ListBuildingsResponse, self: BuildingsTableComponent): void {
    self.dataSource.data = response.toObject().buildingsList;
  }


}
