import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {
  GrpcBuilding,
  GrpcComponent,
  GrpcRoom,
  ListFavoriteBuildingsResponse,
  ListFavoriteComponentsResponse,
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

  @ViewChild(MatSort) bSort!: MatSort;
  @ViewChild(MatSort) rSort!: MatSort;
  @ViewChild(MatSort) cSort!: MatSort;
  @ViewChild(MatPaginator) bPaginator!: MatPaginator;
  @ViewChild(MatPaginator) rPaginator!: MatPaginator;
  @ViewChild(MatPaginator) cPaginator!: MatPaginator;
  bSearchKey: string = "";
  rSearchKey: string = "";
  cSearchKey: string = "";

  displayedBuildingColumns: string[] = ['building-id', 'building-number', 'building-name', 'building-address', 'building-campus_location', 'remove_favorite_building'];
  displayedRoomColumns: string[] = ['room-id', 'room-number', 'room-name', 'room-floor', 'room-type', 'remove_favorite_room'];
  displayedComponentColumns: string[] = ['component-id', 'component-type', 'remove_favorite_component'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService) {
  }

  ngOnInit(): void {
    // find favorites all.
  }

  ngAfterViewInit() {
    this.bDataSource.sort = this.bSort;
    this.bDataSource.paginator = this.bPaginator;

    this.rDataSource.sort = this.rSort;
    this.rDataSource.paginator = this.rPaginator;

    this.cDataSource.sort = this.cSort;
    this.cDataSource.paginator = this.cPaginator;
  }

  applySearch() {
    this.bDataSource.filter = this.bSearchKey?.trim().toLowerCase();
    this.rDataSource.filter = this.rSearchKey?.trim().toLowerCase();
    this.cDataSource.filter = this.cSearchKey?.trim().toLowerCase();
  }

  private static interpretListFavoriteBuildingsResponse(response: ListFavoriteBuildingsResponse, self: FavoritesComponent): void {
    self.bDataSource.data = response?.getBuildingsList();
  }

  private static interpretListFavoriteRoomsResponse(response: ListFavoriteRoomsResponse, self: FavoritesComponent): void {
    self.rDataSource.data = response?.getRoomsList();
  }

  private static interpretListFavoriteComponentsResponse(response: ListFavoriteComponentsResponse, self: FavoritesComponent): void {
    self.cDataSource.data = response?.getComponentsList();
  }

}
