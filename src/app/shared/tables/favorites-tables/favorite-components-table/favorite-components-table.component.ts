import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  GrpcComponent, ListFavoriteBuildingsRequest, ListFavoriteBuildingsResponse,
  ListFavoriteComponentsRequest,
  ListFavoriteComponentsResponse, ListFavoriteRoomsRequest, RemoveFavoriteRequest
} from "../../../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../../../core/connectors/building-management-connector.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ExpandAnimation} from "../../../animations";
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";
import {AuthServiceService} from "../../../../core/authentication/auth-service.service";
import {RemoveFavoriteComponent} from "../../../dialogs/remove-favorite/remove-favorite.component";
import {FavoriteBuildingsTableComponent} from "../favorite-buildings-table/favorite-buildings-table.component";
import {FavoriteRoomsTableComponent} from "../favorite-rooms-table/favorite-rooms-table.component";
import {BuildingComponent} from "../../../../modules/building/building.component";
import {ComponentComponent} from "../../../../modules/component/component.component";
import {RoomComponent} from "../../../../modules/room/room.component";

@Component({
  selector: 'app-favorite-components-table',
  templateUrl: './favorite-components-table.component.html',
  styleUrls: ['./favorite-components-table.component.css'],
  animations: [ExpandAnimation]
})
export class FavoriteComponentsTableComponent implements OnInit, AfterViewInit {

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcComponent.AsObject> = new MatTableDataSource<GrpcComponent.AsObject>();

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // columns to be displayed
  columnsToDisplay: string[] = ['componentType', 'remove_favorite_component'];

  // data loading
  isLoading = true;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private dialog: MatDialog,
              translateService: TranslateService, public authService: AuthServiceService) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {
    // run initial calls
    let listFavoriteComponentsRequest = new ListFavoriteComponentsRequest();
    listFavoriteComponentsRequest.setOwner(this.authService.eMail as string);
    this.buildingManagementConnector.listFavoriteComponents(listFavoriteComponentsRequest, FavoriteComponentsTableComponent.interpretListFavoriteComponentsResponse, this);
  }

  ngAfterViewInit() {
    //add sorter and paginator to datasource
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // private callback methods for api calls
  private static interpretListFavoriteComponentsResponse(response: ListFavoriteComponentsResponse, self: FavoriteComponentsTableComponent): void {
    self.dataSource.data = response.toObject().componentsList;
    self.isLoading = false;
  }

  private static interpretRemoveFavoriteResponse(id: string, self: FavoriteBuildingsTableComponent | FavoriteComponentsTableComponent | FavoriteRoomsTableComponent | BuildingComponent | RoomComponent | ComponentComponent): void {
    let favoriteTableComponent = self as FavoriteComponentsTableComponent;
    favoriteTableComponent.dataSource.data = favoriteTableComponent.dataSource.data.filter(e => e.identificationNumber != id);
  }

  openRemoveFavoriteDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveFavoriteComponent, {data: identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.removeFavorite(
          FavoriteComponentsTableComponent.buildRemoveRequest(result, this.authService.eMail as string), FavoriteComponentsTableComponent.interpretRemoveFavoriteResponse, this);
      } else {
        return;
      }
    })
  }

  // private utils
  private static buildRemoveRequest(result: any, email: string): RemoveFavoriteRequest {
    let request = new RemoveFavoriteRequest();
    request.setIdentificationNumber(result.data.identificationNumber);
    request.setOwner(email);
    return request;
  }
}
