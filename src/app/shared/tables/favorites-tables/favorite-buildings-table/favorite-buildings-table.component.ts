import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {
  GrpcBuilding,
  ListFavoriteBuildingsRequest,
  ListFavoriteBuildingsResponse
} from "../../../../../proto/generated/building_management_pb";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {BuildingManagementConnectorService} from "../../../../core/connectors/building-management-connector.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-favorite-buildings-table',
  templateUrl: './favorite-buildings-table.component.html',
  styleUrls: ['./favorite-buildings-table.component.css']
})
export class FavoriteBuildingsTableComponent implements OnInit, AfterViewInit {

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcBuilding.AsObject> = new MatTableDataSource<GrpcBuilding.AsObject>();

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // search values from search bars
  searchKey: string = "";

  // columns to be displayed
  columnsToDisplay: string[] = ['buildingNumber', 'buildingName', 'address', 'campusLocation', 'remove_favorite_building'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {
    // run initial calls
    let listFavoriteBuildingsRequest = new ListFavoriteBuildingsRequest();
    this.buildingManagementConnector.listFavoriteBuildings(listFavoriteBuildingsRequest, FavoriteBuildingsTableComponent.interpretListFavoriteBuildingsResponse, this);
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
  private static interpretListFavoriteBuildingsResponse(response: ListFavoriteBuildingsResponse, self: FavoriteBuildingsTableComponent): void {
    self.dataSource.data = response.toObject().buildingsList;
  }
}
