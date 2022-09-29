import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {
  GrpcBuildingFilterValueSelection, GrpcComponentType,
  GrpcRoom, GrpcRoomType,
  ListFavoriteRoomsRequest,
  ListFavoriteRoomsResponse,
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
  FilterRoomsComponent
} from "../../../dialogs/filter-rooms/filter-rooms.component";
import {
  FavoriteBuildingsTableComponent
} from "../favorite-buildings-table/favorite-buildings-table.component";
import {
  FavoriteComponentsTableComponent
} from "../favorite-components-table/favorite-components-table.component";
import {BuildingComponent} from "../../../../modules/building/building.component";
import {ComponentComponent} from "../../../../modules/component/component.component";
import {RoomComponent} from "../../../../modules/room/room.component";

@Component({
  selector: 'app-favorite-rooms-table',
  templateUrl: './favorite-rooms-table.component.html',
  styleUrls: ['./favorite-rooms-table.component.css']
})
export class FavoriteRoomsTableComponent implements OnInit, AfterViewInit {

  // without N/A values
  roomTypes = Object.values(GrpcRoomType).filter(e => e != 0) as GrpcRoomType[];
  componentTypes = Object.values(GrpcComponentType).filter(e => e != 0) as GrpcComponentType[];

  // selected fields for comp
  selectedComponentTypes: { componentType: GrpcComponentType, selected: boolean }[] = [];
  selectedRoomTypes: { roomType: GrpcRoomType, selected: boolean }[] = [];

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcRoom.AsObject> = new MatTableDataSource<GrpcRoom.AsObject>();

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // search values from search bars
  searchKey: string = "";

  // data loading
  isLoading = true;

  // columns to be displayed
  columnsToDisplay: string[] = ['roomNumber', 'roomName', 'floor', 'roomType', 'remove_favorite_room'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private dialog: MatDialog,
              translateService: TranslateService, public authService: AuthServiceService) {
    // inject building management client and current rout to obtain path variables

    // add all constants mapped to false
    // in case it should be remembered, pass as @Inject Data
    this.roomTypes.forEach(e => this.selectedRoomTypes.push({roomType: e, selected: true}));
    this.componentTypes.forEach(e => this.selectedComponentTypes.push({componentType: e, selected: true}));
  }

  ngOnInit(): void {
    // run initial calls
    let listFavoriteRoomsRequest = new ListFavoriteRoomsRequest();
    listFavoriteRoomsRequest.setOwner(this.authService.eMail as string)
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

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // private callback methods for api calls
  private static interpretListFavoriteRoomsResponse(response: ListFavoriteRoomsResponse, self: FavoriteRoomsTableComponent): void {
    self.dataSource.data = response.toObject().roomsList;
    self.isLoading = false;
  }

  private static interpretRemoveFavoriteResponse(id: string, self: FavoriteBuildingsTableComponent | FavoriteComponentsTableComponent | FavoriteRoomsTableComponent | BuildingComponent | RoomComponent | ComponentComponent): void {
    let favoriteTableComponent = self as FavoriteRoomsTableComponent;
    favoriteTableComponent.dataSource.data = favoriteTableComponent.dataSource.data.filter(e => e.identificationNumber != id);
  }

  openRemoveFavoriteDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveFavoriteComponent, {data: identificationNumber, width: '445'});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.removeFavorite(
          FavoriteRoomsTableComponent.buildRemoveRequest(result, this.authService.eMail as string), FavoriteRoomsTableComponent.interpretRemoveFavoriteResponse, this);
      } else {
        return;
      }
    })
  }

  openFilterFavoriteRoomsDialog() {
    const dialogRef = this.dialog.open(FilterRoomsComponent, {
      data: {
        selectedComponentTypes: this.selectedComponentTypes,
        selectedRoomTypes: this.selectedRoomTypes
      }, width: '445px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.isLoading = true;
        this.selectedRoomTypes = result.data.roomTypes;
        this.selectedComponentTypes = result.data.componentTypes;
        this.buildingManagementConnector.listFavoriteRooms(FavoriteRoomsTableComponent.buildListFavoriteRoomsRequest(result, this.authService.eMail as string, this),
          FavoriteRoomsTableComponent.interpretListFavoriteRoomsResponse, this);
      } else {
        return;
      }
    })
  }

  // private utils
  public static buildListFavoriteRoomsRequest(result: any, email: string, self: FavoriteRoomsTableComponent): ListFavoriteRoomsRequest {
    let request = new ListFavoriteRoomsRequest();
    let selection = new GrpcBuildingFilterValueSelection();
    selection.setGrpcComponentTypesList(self.selectedComponentTypes.filter(e => e.selected).map(e => e.componentType
    ));
    selection.setGrpcRoomTypesList(self.selectedRoomTypes.filter(e => e.selected).map(e => e.roomType
    ));
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
