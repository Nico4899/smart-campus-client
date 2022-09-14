import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {
  GrpcBuildingFilterValueSelection,
  GrpcRoom, ListFavoriteBuildingsRequest, ListFavoriteBuildingsResponse,
  ListFavoriteRoomsRequest,
  ListFavoriteRoomsResponse, RemoveFavoriteRequest
} from "../../../../../proto/generated/building_management_pb";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {BuildingManagementConnectorService} from "../../../../core/connectors/building-management-connector.service";
import { TranslateService } from '@ngx-translate/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthServiceService} from "../../../../core/authentication/auth-service.service";
import {RemoveFavoriteComponent} from "../../../dialogs/remove-favorite/remove-favorite.component";
import {FilterBuildingsComponent} from "../../../dialogs/filter-buildings/filter-buildings.component";
import {FilterRoomsComponent} from "../../../dialogs/filter-rooms/filter-rooms.component";

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
  columnsToDisplay: string[] = ['roomNumber', 'roomName', 'floor', 'roomType', 'remove_favorite_room'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private dialog: MatDialog,
              translateService: TranslateService, public authService: AuthServiceService) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {
    // run initial calls
    let listFavoriteRoomsRequest = new ListFavoriteRoomsRequest();
    this.buildingManagementConnector.listFavoriteRooms(listFavoriteRoomsRequest, FavoriteRoomsTableComponent.interpretListFavoriteRoomsResponse, this);
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
  private static interpretListFavoriteRoomsResponse(response: ListFavoriteRoomsResponse, self: FavoriteRoomsTableComponent): void {
    self.dataSource.data = response.toObject().roomsList;
  }

  private static interpretRemoveFavoriteResponse(id: string, self: FavoriteRoomsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != id);
  }

  openRemoveFavoriteDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveFavoriteComponent, {data: identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.removeRoomFavorite(
          FavoriteRoomsTableComponent.buildRemoveRequest(result), FavoriteRoomsTableComponent.interpretRemoveFavoriteResponse, this);
      } else {
        return;
      }
    })
  }

  openFilterFavoriteRoomsDialog() {
    const dialogRef = this.dialog.open(FilterRoomsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.listFavoriteRooms(FavoriteRoomsTableComponent.buildListFavoriteRoomsRequest(result),
          FavoriteRoomsTableComponent.interpretListFavoriteRoomsResponse, this);
      } else {
        return;
      }
    })
  }

  // private utils
  public static buildListFavoriteRoomsRequest(result: any): ListFavoriteRoomsRequest {
    let request = new ListFavoriteRoomsRequest();
    let selection = new GrpcBuildingFilterValueSelection();
    selection.setGrpcComponentTypesList(result.data.componentTypes);
    selection.setGrpcRoomTypesList(result.data.roomTypes);
    request.setGrpcFilterValueSelection(selection);
    request.setOwner(result.data.owner);
    return request;
  }

  private static buildRemoveRequest(result: any): RemoveFavoriteRequest {
    let request = new RemoveFavoriteRequest();
    request.setIdentificationNumber(result.data.identificationNumber);
    request.setOwner(result.data.owner);
    return request;
  }
}
