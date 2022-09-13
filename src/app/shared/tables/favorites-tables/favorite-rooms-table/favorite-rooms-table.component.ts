import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {
  GrpcRoom,
  ListFavoriteRoomsRequest,
  ListFavoriteRoomsResponse
} from "../../../../../proto/generated/building_management_pb";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {BuildingManagementConnectorService} from "../../../../core/connectors/building-management-connector.service";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-favorite-rooms-table',
  templateUrl: './favorite-rooms-table.component.html',
  styleUrls: ['./favorite-rooms-table.component.css']
})
export class FavoriteRoomsTableComponent implements OnInit, AfterViewInit {

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcRoom.AsObject> = new MatTableDataSource<GrpcRoom.AsObject>();

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // search values from search bars
  searchKey: string = "";

  // columns to be displayed
  displayedColumns: string[] = ['roomNumber', 'roomName', 'floor', 'roomType', 'remove_favorite_room'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {
    // run initial calls
    let listFavoriteRoomsRequest = new ListFavoriteRoomsRequest();
    this.buildingManagementConnector.listFavoriteRooms(listFavoriteRoomsRequest, FavoriteRoomsTableComponent.interpretListFavoriteRoomsResponse, this);
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
  private static interpretListFavoriteRoomsResponse(response: ListFavoriteRoomsResponse, self: FavoriteRoomsTableComponent): void {
    self.dataSource.data = response.toObject().roomsList;
  }
}
