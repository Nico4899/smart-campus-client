import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {
  GrpcBuilding,
  GrpcBuildingFilterValueSelection, GrpcCampusLocation, GrpcComponentType, GrpcRoomType,
  ListFavoriteBuildingsRequest,
  ListFavoriteBuildingsResponse,
  RemoveFavoriteRequest
} from "../../../../../proto/generated/building_management_pb";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {
  BuildingManagementConnectorService
} from "../../../../core/connectors/building-management-connector.service";
import {TranslateService} from '@ngx-translate/core';
import {MatDialog} from "@angular/material/dialog";
import {
  AuthServiceService
} from "../../../../core/authentication/auth-service.service";
import {
  RemoveFavoriteComponent
} from "../../../dialogs/remove-favorite/remove-favorite.component";
import {
  FilterBuildingsComponent
} from "../../../dialogs/filter-buildings/filter-buildings.component";
import {
  FavoriteComponentsTableComponent
} from "../favorite-components-table/favorite-components-table.component";
import {
  FavoriteRoomsTableComponent
} from "../favorite-rooms-table/favorite-rooms-table.component";
import {BuildingComponent} from "../../../../modules/building/building.component";
import {ComponentComponent} from "../../../../modules/component/component.component";
import {RoomComponent} from "../../../../modules/room/room.component";

@Component({
  selector: 'app-favorite-buildings-table',
  templateUrl: './favorite-buildings-table.component.html',
  styleUrls: ['./favorite-buildings-table.component.css']
})
export class FavoriteBuildingsTableComponent implements OnInit, AfterViewInit {

  //filter values
  // without N/A values
  campusLocations = Object.values(GrpcCampusLocation).filter(e => e != 0) as GrpcCampusLocation[];
  roomTypes = Object.values(GrpcRoomType).filter(e => e != 0) as GrpcRoomType[];
  componentTypes = Object.values(GrpcComponentType).filter(e => e != 0) as GrpcComponentType[];

  // selected fields for comp
  selectedComponentTypes: { componentType: GrpcComponentType, selected: boolean }[] = [];
  selectedRoomTypes: { roomType: GrpcRoomType, selected: boolean }[] = [];
  selectedCampusLocations: { campusLocation: GrpcCampusLocation, selected: boolean }[] = [];

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcBuilding.AsObject> = new MatTableDataSource<GrpcBuilding.AsObject>();

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // search values from search bars
  searchKey: string = "";

  // data loading
  isLoading = true;

  // columns to be displayed
  columnsToDisplay: string[] = ['buildingNumber', 'buildingName', 'address', 'campusLocation', 'remove_favorite_building'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private dialog: MatDialog,
              translateService: TranslateService, public authService: AuthServiceService) {
    // inject building management client and current rout to obtain path variables

    // add all constants mapped to false
    // in case it should be remembered, pass as @Inject Data
    this.campusLocations.forEach(e => this.selectedCampusLocations.push({campusLocation: e, selected: true}));
    this.roomTypes.forEach(e => this.selectedRoomTypes.push({roomType: e, selected: true}));
    this.componentTypes.forEach(e => this.selectedComponentTypes.push({componentType: e, selected: true}));
  }

  ngOnInit(): void {
    // run initial calls
    let listFavoriteBuildingsRequest = new ListFavoriteBuildingsRequest();
    listFavoriteBuildingsRequest.setOwner(this.authService.eMail as string);
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

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // private callback methods for api calls
  private static interpretListFavoriteBuildingsResponse(response: ListFavoriteBuildingsResponse, self: FavoriteBuildingsTableComponent): void {
    self.dataSource.data = response.toObject().buildingsList;
    self.isLoading = false;
  }

  private static interpretRemoveFavoriteResponse(id: string, self: FavoriteBuildingsTableComponent | FavoriteComponentsTableComponent | FavoriteRoomsTableComponent | BuildingComponent | RoomComponent | ComponentComponent): void {
    let favoriteTableComponent = self as FavoriteBuildingsTableComponent;
    favoriteTableComponent.dataSource.data = favoriteTableComponent.dataSource.data.filter(e => e.identificationNumber != id);
  }

  openRemoveFavoriteDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveFavoriteComponent, {data: identificationNumber, width: '445px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.removeFavorite(
          FavoriteBuildingsTableComponent.buildRemoveRequest(result, this.authService.eMail as string), FavoriteBuildingsTableComponent.interpretRemoveFavoriteResponse, this);
      } else {
        return;
      }
    })
  }

  openFilterFavoriteBuildingsDialog() {
    const dialogRef = this.dialog.open(FilterBuildingsComponent, {
      data: {
        selectedComponentTypes: this.selectedComponentTypes,
        selectedRoomTypes: this.selectedRoomTypes,
        selectedCampusLocations: this.selectedCampusLocations
      }, width: '650px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.isLoading = true;
        this.selectedRoomTypes = result.data.roomTypes;
        this.selectedComponentTypes = result.data.componentTypes;
        this.selectedCampusLocations = result.data.campusLocations;
        this.buildingManagementConnector.listFavoriteBuildings(FavoriteBuildingsTableComponent.buildListFavoriteBuildingsRequest(result, this.authService.eMail as string, this),
          FavoriteBuildingsTableComponent.interpretListFavoriteBuildingsResponse, this);
      } else {
        return;
      }
    })
  }

  // private utils
  public static buildListFavoriteBuildingsRequest(result: any, email: string, self: FavoriteBuildingsTableComponent): ListFavoriteBuildingsRequest {
    let request = new ListFavoriteBuildingsRequest();
    let selection = new GrpcBuildingFilterValueSelection();
    selection.setGrpcComponentTypesList(self.selectedComponentTypes.filter(e => e.selected).map(e => e.componentType));
    selection.setGrpcRoomTypesList(self.selectedRoomTypes.filter(e => e.selected).map(e => e.roomType));
    selection.setGrpcCampusLocationsList(self.selectedCampusLocations.filter(e => e.selected).map(e => e.campusLocation));
    request.setGrpcFilterValueSelection(selection);
    request.setOwner(email);
    return request;
  }

  private static buildRemoveRequest(result: any, email: string): RemoveFavoriteRequest {
    let request = new RemoveFavoriteRequest();
    request.setIdentificationNumber(result.data.identificationNumber);
    request.setOwner(email);
    return request;
  }
}
