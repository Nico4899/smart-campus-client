import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {
  GrpcBuilding, GrpcBuildingFilterValueSelection, ListBuildingsRequest,
  ListFavoriteBuildingsRequest,
  ListFavoriteBuildingsResponse, RemoveFavoriteRequest, RemoveRequest, RemoveResponse
} from "../../../../../proto/generated/building_management_pb";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {BuildingManagementConnectorService} from "../../../../core/connectors/building-management-connector.service";
import { TranslateService } from '@ngx-translate/core';
import {RemoveComponent} from "../../../dialogs/remove/remove.component";
import {MatDialog} from "@angular/material/dialog";
import {AuthServiceService} from "../../../../core/authentication/auth-service.service";
import {RemoveFavoriteComponent} from "../../../dialogs/remove-favorite/remove-favorite.component";
import {FilterBuildingsComponent} from "../../../dialogs/filter-buildings/filter-buildings.component";

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

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private dialog: MatDialog,
              translateService: TranslateService, public authService: AuthServiceService) {
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

  private static interpretRemoveFavoriteResponse(id: string, self: FavoriteBuildingsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != id);
  }

  openRemoveFavoriteDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveFavoriteComponent, {data: identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.removeBuildingFavorite(
          FavoriteBuildingsTableComponent.buildRemoveRequest(result), FavoriteBuildingsTableComponent.interpretRemoveFavoriteResponse, this);
      } else {
        return;
      }
    })
  }

  openFilterFavoriteBuildingsDialog() {
    const dialogRef = this.dialog.open(FilterBuildingsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.listFavoriteBuildings(FavoriteBuildingsTableComponent.buildListFavoriteBuildingsRequest(result),
          FavoriteBuildingsTableComponent.interpretListFavoriteBuildingsResponse, this);
      } else {
        return;
      }
    })
  }

  // private utils
  public static buildListFavoriteBuildingsRequest(result: any): ListFavoriteBuildingsRequest {
    let request = new ListFavoriteBuildingsRequest();
    let selection = new GrpcBuildingFilterValueSelection();
    selection.setGrpcComponentTypesList(result.data.componentTypes);
    selection.setGrpcRoomTypesList(result.data.roomTypes);
    selection.setGrpcCampusLocationsList(result.data.campusLocations);
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
