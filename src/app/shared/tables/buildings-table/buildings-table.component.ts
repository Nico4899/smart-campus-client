import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {
  CreateBuildingRequest,
  CreateBuildingResponse,
  GrpcBuilding, GrpcBuildingFilterValueSelection,
  GrpcFloors,
  GrpcGeographicalLocation,
  ListBuildingsRequest,
  ListBuildingsResponse,
  RemoveRequest,
  UpdateBuildingRequest,
  UpdateBuildingResponse,
  CreateFavoriteRequest,
  CreateFavoriteResponse,
  ListFavoriteBuildingsRequest,
  ListFavoriteBuildingsResponse
} from "../../../../proto/generated/building_management_pb";

import {
  CreateProblemRequest,
  CreateProblemResponse
} from "../../../../proto/generated/problem_management_pb"
import {BuildingManagementConnectorService} from "../../../core/connectors/building-management-connector.service";
import {ProblemManagementConnectorService} from "../../../core/connectors/problem-management-connector.service"

import {MatDialog} from "@angular/material/dialog";

import {AddProblemComponent} from '../../dialogs/add-problem/add-problem.component'
import {AddBuildingComponent} from "../../dialogs/add-building/add-building.component";
import {EditBuildingComponent} from "../../dialogs/edit-building/edit-building.component";
import {FilterBuildingsComponent} from "../../dialogs/filter-buildings/filter-buildings.component";
import {RemoveComponent} from "../../dialogs/remove/remove.component";
import { TranslateService } from '@ngx-translate/core';
import {AuthServiceService} from "../../../core/authentication/auth-service.service";

import {ProblemsTableComponent} from "../problems-table/problems-table.component"
import { RoomsTableComponent } from '../rooms-table/rooms-table.component';
import { ComponentsTableComponent } from '../components-table/components-table.component';

@Component({
  selector: 'app-buildings-table',
  templateUrl: './buildings-table.component.html',
  styleUrls: ['./buildings-table.component.css']
})
export class BuildingsTableComponent implements OnInit {

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcBuilding.AsObject> = new MatTableDataSource<GrpcBuilding.AsObject>();
  translateService: TranslateService;

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // search values from search bars
  searchKey: string = "";

  // data loading
  isLoading = true;

  // columns to be displayed
  columnsToDisplay: string[] = ['buildingNumber', 'buildingName', 'address', 'campusLocation', 'edit_building', 'delete_building'];

  // favorite list to compare list to
  favoriteBuildingList!: GrpcBuilding.AsObject[];


  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private problemManagementConnector: ProblemManagementConnectorService, private dialog: MatDialog,
              translateService: TranslateService, public authService: AuthServiceService) {
    // inject building management client and current rout to obtain path variables
    this.translateService = translateService;
  }

  ngOnInit(): void {

    // run initial calls
    let listBuildingsRequest = new ListBuildingsRequest();
    this.buildingManagementConnector.listBuildings(listBuildingsRequest, BuildingsTableComponent.interpretListBuildingsResponse, this);
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
  // shorthand to refresh our favorite buildings
  refreshFavoriteList() {
    // fix bugs
    //this.buildingManagementConnector.listFavoriteBuildings(
      //BuildingsTableComponent.buildListFavoriteBuildingRequest(), BuildingsTableComponent.interpretListFavoriteBuildingsResponse, this);

  }

  private isInFavoriteList(building: GrpcBuilding.AsObject): boolean {
    var id = building.identificationNumber;
    for (var b of this.favoriteBuildingList) {
      if(b.identificationNumber == id){
        return true;
      }
    }
    return false;
  }

  // private callback methods for api calls
  private static interpretCreateProblemResponse(response: CreateProblemResponse, self: BuildingsTableComponent | ProblemsTableComponent | RoomsTableComponent | ComponentsTableComponent): void{
    return;
  }

  private static interpretListBuildingsResponse(response: ListBuildingsResponse, self: BuildingsTableComponent): void {
    self.dataSource.data = response.toObject().buildingsList;
    self.isLoading = false;
  }

  private static interpretCreateBuildingResponse(response: CreateBuildingResponse, self: BuildingsTableComponent): void {
    self.dataSource.data.push(response.getBuilding()?.toObject()!);
  }

  private static interpretUpdateBuildingResponse(response: UpdateBuildingResponse, self: BuildingsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != response.getBuilding()?.getIdentificationNumber());
    self.dataSource.data.push(response.getBuilding()?.toObject()!);
  }

  private static interpretRemoveBuildingResponse(id: string, self: BuildingsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != id);
  }

  private static interpretListFavoriteBuildingsResponse( response: ListFavoriteBuildingsResponse,  self: BuildingsTableComponent): void {

    self.favoriteBuildingList = response.toObject().buildingsList;

  }

  // button methods
  openCreateBuildingDialog() {
    const dialogRef = this.dialog.open(AddBuildingComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.createBuilding(BuildingsTableComponent.buildCreateBuildingRequest(result), BuildingsTableComponent.interpretCreateBuildingResponse, this);
      } else {
        return;
      }
    })
  }

  openCreateProblemDialog() {
    const dialogRef = this.dialog.open(AddProblemComponent);
    dialogRef.afterClosed().subscribe( result => {
      if(result.event == 'ok'){
        this.problemManagementConnector.createProblem(BuildingsTableComponent.buildCreateProblemRequest(result), BuildingsTableComponent.interpretCreateProblemResponse, this);
      } else {
        return;
      }
    })
  }

  openUpdateBuildingDialog(building: GrpcBuilding.AsObject) {
    const dialogRef = this.dialog.open(EditBuildingComponent, {data: building});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.updateBuilding(BuildingsTableComponent.buildUpdateBuildingRequest(result), BuildingsTableComponent.interpretUpdateBuildingResponse, this);
      } else {
        return;
      }
    })
  }

  openRemoveBuildingDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveComponent, {data: identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.removeBuilding(BuildingsTableComponent.buildRemoveRequest(result), BuildingsTableComponent.interpretRemoveBuildingResponse, this);
      } else {
        return;
      }
    })
  }

  openFilterBuildingsDialog() {
    const dialogRef = this.dialog.open(FilterBuildingsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.isLoading = true;
        this.buildingManagementConnector.listBuildings(BuildingsTableComponent.buildListBuildingsRequest(result), BuildingsTableComponent.interpretListBuildingsResponse, this);
      } else {
        return;
      }
    })
  }

  // private utils
  public static buildListBuildingsRequest(result: any): ListBuildingsRequest {
    let request = new ListBuildingsRequest();
    let selection = new GrpcBuildingFilterValueSelection();
    selection.setGrpcComponentTypesList(result.data.componentTypes);
    selection.setGrpcRoomTypesList(result.data.roomTypes);
    selection.setGrpcCampusLocationsList(result.data.campusLocations);
    request.setGrpcFilterValueSelection(selection);
    return request;
  }

  public static buildListFavoriteBuildingRequest(): ListFavoriteBuildingsRequest {
    let request = new ListFavoriteBuildingsRequest();
    return request;
  }

  private static buildCreateProblemRequest(result: any): CreateProblemRequest {
    let request = new CreateProblemRequest();
    request.setProblemTitle(result.data.problemTitle);
    request.setProblemDescription(result.data.problelDescription);
    request.setReferenceIdentificationNumber(result.data.referenceIdentificationNumber);
    request.setProblemReporter(result.data.problemReporter);
    return request;
  }

  private static buildCreateBuildingRequest(result: any): CreateBuildingRequest {
    let request = new CreateBuildingRequest();
    request.setBuildingNumber(result.data.buildingNumber);
    request.setBuildingName(result.data.buildingName);
    request.setCampusLocation(result.data.campusLocation);
    let floors = new GrpcFloors();
    floors.setHighestFloor(result.data.highestFloor);
    floors.setLowestFloor(result.data.lowestFloor);
    request.setGrpcFloors(floors);
    let geographicalLocation = new GrpcGeographicalLocation();
    geographicalLocation.setLongitude(result.data.longitude);
    geographicalLocation.setLatitude(result.data.latitude);
    request.setGrpcGeographicalLocation(geographicalLocation);
    return request;
  }



  private static buildUpdateBuildingRequest(result: any): UpdateBuildingRequest {
    let request = new UpdateBuildingRequest();
    request.setBuildingNumber(result.data.buildingNumber);
    request.setBuildingName(result.data.buildingName);
    request.setCampusLocation(result.data.campusLocation);
    let floors = new GrpcFloors();
    floors.setHighestFloor(result.data.highestFloor);
    floors.setLowestFloor(result.data.lowestFloor);
    request.setGrpcFloors(floors);
    let geographicalLocation = new GrpcGeographicalLocation();
    geographicalLocation.setLongitude(result.data.longitude);
    geographicalLocation.setLatitude(result.data.latitude);
    request.setGrpcGeographicalLocation(geographicalLocation);
    request.setIdentificationNumber(result.data.identificationNumber);
    return request;
  }



  private static buildRemoveRequest(result: any): RemoveRequest {
    let request = new RemoveRequest();
    request.setIdentificationNumber(result.data.identificationNumber);
    return request;
  }

  private static listFavoriteBuildingsRequest(result: any): ListFavoriteBuildingsRequest {
    let request = new ListFavoriteBuildingsRequest();
    request.setOwner(result.data.owner);
    return request;
  }

  toggleFavorite(building: GrpcBuilding.AsObject) {

    if(this.isInFavoriteList(building)){
      // TODO create favorite access
    } else {
      // TODO remove favorite access
    }
  }

  useLanguage(language: string): void {
    this.translateService.use(language);
  }
}
