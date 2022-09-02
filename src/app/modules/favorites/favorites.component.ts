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

  bDataSource: MatTableDataSource<GrpcBuilding> = new MatTableDataSource<GrpcBuilding>();
  cDataSource: MatTableDataSource<GrpcComponent> = new MatTableDataSource<GrpcComponent>();
  rDataSource: MatTableDataSource<GrpcRoom> = new MatTableDataSource<GrpcRoom>();

  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  bSearchKey: string = "";
  rSearchKey: string = "";
  cSearchKey: string = "";

  displayedBuildingColumns: string[] = ['building-id', 'building-number', 'building-name', 'building-address', 'building-campus_location', 'remove_favorite_building'];
  displayedRoomColumns: string[] = ['room-id', 'room-number', 'room-name', 'room-floor', 'room-type', 'remove_favorite_room'];
  displayedComponentColumns: string[] = ['component-id', 'component-type', 'remove_favorite_component'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService) {
  }

  ngOnInit(): void {
    let listFavoriteBuildingsRequest = new ListFavoriteBuildingsRequest();
    this.buildingManagementConnector.listFavoriteBuildings(listFavoriteBuildingsRequest, FavoritesComponent.interpretListFavoriteBuildingsResponse, this);

    let listFavoriteComponentsRequest = new ListFavoriteComponentsRequest();
    this.buildingManagementConnector.listFavoriteComponents(listFavoriteComponentsRequest, FavoritesComponent.interpretListFavoriteComponentsResponse, this);

    let listFavoriteRoomsRequest = new ListFavoriteRoomsRequest();
    this.buildingManagementConnector.listFavoriteRooms(listFavoriteRoomsRequest, FavoritesComponent.interpretListFavoriteRoomsResponse, this);
  }

  ngAfterViewInit() {
    this.bDataSource.sort = this.sort.toArray()[0];
    this.bDataSource.paginator = this.paginator.toArray()[0];

    this.rDataSource.sort = this.sort.toArray()[1];
    this.rDataSource.paginator = this.paginator.toArray()[1];

    this.cDataSource.sort = this.sort.toArray()[2];
    this.cDataSource.paginator = this.paginator.toArray()[2];
  }

  applySearch() {
    this.bDataSource.filter = this.bSearchKey?.trim().toLowerCase();
    this.rDataSource.filter = this.rSearchKey?.trim().toLowerCase();
    this.cDataSource.filter = this.cSearchKey?.trim().toLowerCase();
  }

  private static interpretListFavoriteBuildingsResponse(response: ListFavoriteBuildingsResponse, self: FavoritesComponent): void {
    self.bDataSource.data = response.getBuildingsList();
  }

  private static interpretListFavoriteRoomsResponse(response: ListFavoriteRoomsResponse, self: FavoritesComponent): void {
    self.rDataSource.data = response.getRoomsList();
  }

  private static interpretListFavoriteComponentsResponse(response: ListFavoriteComponentsResponse, self: FavoritesComponent): void {
    self.cDataSource.data = response.getComponentsList();
  }
}
