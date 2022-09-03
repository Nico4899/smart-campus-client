import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {
  GrpcBuilding,
  GrpcComponent,
  GrpcRoom, ListFavoriteBuildingsRequest,
  ListFavoriteBuildingsResponse, ListFavoriteComponentsRequest,
  ListFavoriteComponentsResponse, ListFavoriteRoomsRequest,
  ListFavoriteRoomsResponse
} from "../../../proto/generated/building_management_pb";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, AfterViewInit {

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  bDataSource: MatTableDataSource<GrpcBuilding.AsObject> = new MatTableDataSource<GrpcBuilding.AsObject>();
  cDataSource: MatTableDataSource<GrpcComponent.AsObject> = new MatTableDataSource<GrpcComponent.AsObject>();
  rDataSource: MatTableDataSource<GrpcRoom.AsObject> = new MatTableDataSource<GrpcRoom.AsObject>();

  // sorter and paginator for tables
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  // search values from search bars
  bSearchKey: string = "";
  rSearchKey: string = "";
  cSearchKey: string = "";

  // columns to be displayed
  displayedBuildingColumns: string[] = ['identificationNumber', 'buildingNumber', 'buildingName', 'address', 'campusLocation', 'edit_building', 'delete_building'];
  displayedRoomColumns: string[] = ['identificationNumber', 'roomNumber', 'roomName', 'floor', 'roomType', 'edit_room', 'delete_room'];
  displayedComponentColumns: string[] = ['identificationNumber', 'componentType', 'edit_component', 'delete_component'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {

    // run initial calls
    let listFavoriteBuildingsRequest = new ListFavoriteBuildingsRequest();
    this.buildingManagementConnector.listFavoriteBuildings(listFavoriteBuildingsRequest, FavoritesComponent.interpretListFavoriteBuildingsResponse, this);

    let listFavoriteComponentsRequest = new ListFavoriteComponentsRequest();
    this.buildingManagementConnector.listFavoriteComponents(listFavoriteComponentsRequest, FavoritesComponent.interpretListFavoriteComponentsResponse, this);

    let listFavoriteRoomsRequest = new ListFavoriteRoomsRequest();
    this.buildingManagementConnector.listFavoriteRooms(listFavoriteRoomsRequest, FavoritesComponent.interpretListFavoriteRoomsResponse, this);
  }

  ngAfterViewInit() {

    // add sorters and paginators to datasources
    this.bDataSource.sort = this.sort.toArray()[0];
    this.bDataSource.paginator = this.paginator.toArray()[0];

    this.rDataSource.sort = this.sort.toArray()[1];
    this.rDataSource.paginator = this.paginator.toArray()[1];

    this.cDataSource.sort = this.sort.toArray()[2];
    this.cDataSource.paginator = this.paginator.toArray()[2];
  }

  // search function
  applySearch() {
    this.bDataSource.filter = this.bSearchKey?.trim().toLowerCase();
    this.rDataSource.filter = this.rSearchKey?.trim().toLowerCase();
    this.cDataSource.filter = this.cSearchKey?.trim().toLowerCase();
  }

  // private callback methods for api calls
  private static interpretListFavoriteBuildingsResponse(response: ListFavoriteBuildingsResponse, self: FavoritesComponent): void {
    self.bDataSource.data = response.toObject().buildingsList;
  }

  private static interpretListFavoriteRoomsResponse(response: ListFavoriteRoomsResponse, self: FavoritesComponent): void {
    self.rDataSource.data = response.toObject().roomsList;
  }

  private static interpretListFavoriteComponentsResponse(response: ListFavoriteComponentsResponse, self: FavoritesComponent): void {
    self.cDataSource.data = response.toObject().componentsList;
  }
}
