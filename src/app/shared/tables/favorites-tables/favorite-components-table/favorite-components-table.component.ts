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

@Component({
  selector: 'app-favorite-components-table',
  templateUrl: './favorite-components-table.component.html',
  styleUrls: ['./favorite-components-table.component.css'],
  animations: [ExpandAnimation]
})
export class FavoriteComponentsTableComponent implements OnInit, AfterViewInit {

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcComponent.AsObject> = new MatTableDataSource<GrpcComponent.AsObject>();

  // search values from search bars
  searchKey: string = "";

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // columns to be displayed
  columnsToDisplay: string[] = ['componentType', 'remove_favorite_component'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedComponent!: string;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private dialog: MatDialog,
              translateService: TranslateService, public authService: AuthServiceService) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {
    // run initial calls
    let listFavoriteComponentsRequest = new ListFavoriteComponentsRequest();
    this.buildingManagementConnector.listFavoriteComponents(listFavoriteComponentsRequest, FavoriteComponentsTableComponent.interpretListFavoriteComponentsResponse, this);
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
  private static interpretListFavoriteComponentsResponse(response: ListFavoriteComponentsResponse, self: FavoriteComponentsTableComponent): void {
    self.dataSource.data = response.toObject().componentsList;
  }

  private static interpretRemoveFavoriteResponse(id: string, self: FavoriteComponentsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != id);
  }

  openRemoveFavoriteDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveFavoriteComponent, {data: identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.removeComponentFavorite(
          FavoriteComponentsTableComponent.buildRemoveRequest(result), FavoriteComponentsTableComponent.interpretRemoveFavoriteResponse, this);
      } else {
        return;
      }
    })
  }

  // private utils
  private static buildRemoveRequest(result: any): RemoveFavoriteRequest {
    let request = new RemoveFavoriteRequest();
    request.setIdentificationNumber(result.data.identificationNumber);
    request.setOwner(result.data.owner);
    return request;
  }
}
