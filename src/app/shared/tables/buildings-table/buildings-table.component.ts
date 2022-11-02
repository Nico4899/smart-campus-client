import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {
  CreateBuildingRequest,
  CreateBuildingResponse,
  GrpcBuilding,
  GrpcBuildingFilterValueSelection,
  GrpcCampusLocation,
  GrpcComponentType,
  GrpcFloors,
  GrpcGeographicalLocation,
  GrpcRoomType,
  ListBuildingsRequest,
  ListBuildingsResponse,
  RemoveRequest,
  UpdateBuildingRequest,
  UpdateBuildingResponse
} from "../../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../../core/connectors/building-management-connector.service";
import {ProblemManagementConnectorService} from "../../../core/connectors/problem-management-connector.service"

import {MatDialog} from "@angular/material/dialog";
import {AddBuildingComponent} from "../../dialogs/add-building/add-building.component";
import {EditBuildingComponent} from "../../dialogs/edit-building/edit-building.component";
import {FilterBuildingsComponent} from "../../dialogs/filter-buildings/filter-buildings.component";
import {RemoveComponent} from "../../dialogs/remove/remove.component";
import {TranslateService} from '@ngx-translate/core';
import {AuthServiceService} from "../../../core/authentication/auth-service.service";

@Component({
  selector: 'app-buildings-table',
  templateUrl: './buildings-table.component.html',
  styleUrls: ['./buildings-table.component.css']
})
export class BuildingsTableComponent implements OnInit {

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

  constructor(public changeDetectorRefs: ChangeDetectorRef, private buildingManagementConnector: BuildingManagementConnectorService, private problemManagementConnector: ProblemManagementConnectorService, private dialog: MatDialog,
              translateService: TranslateService, public authService: AuthServiceService) {
    // inject building management client and current rout to obtain path variables
    this.translateService = translateService;

    // add all constants mapped to false
    // in case it should be remembered, pass as @Inject Data
    this.campusLocations.forEach(e => this.selectedCampusLocations.push({campusLocation: e, selected: false}));
    this.roomTypes.forEach(e => this.selectedRoomTypes.push({roomType: e, selected: false}));
    this.componentTypes.forEach(e => this.selectedComponentTypes.push({componentType: e, selected: false}));

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

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  // private callback methods for api calls
  private static interpretListBuildingsResponse(response: ListBuildingsResponse, self: BuildingsTableComponent): void {
    self.dataSource.data = response.toObject().buildingsList;
    self.isLoading = false;
  }

  private static interpretCreateBuildingResponse(response: CreateBuildingResponse, self: BuildingsTableComponent): void {
    let data = self.dataSource.data;
    data.push(response.getBuilding()!.toObject());
    self.dataSource.data = data;
  }

  private static interpretUpdateBuildingResponse(response: UpdateBuildingResponse, self: BuildingsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != response.getBuilding()?.getIdentificationNumber());
    let data = self.dataSource.data;
    data.push(response.getBuilding()!.toObject());
    self.dataSource.data = data;
  }

  private static interpretRemoveBuildingResponse(id: string, self: BuildingsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != id);
  }

  // button methods
  openCreateBuildingDialog() {
    const dialogRef = this.dialog.open(AddBuildingComponent, {width: '890px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.createBuilding(BuildingsTableComponent.buildCreateBuildingRequest(result), BuildingsTableComponent.interpretCreateBuildingResponse, this);
      } else {
        return;
      }
    })
  }

  openUpdateBuildingDialog(building: GrpcBuilding.AsObject) {
    const dialogRef = this.dialog.open(EditBuildingComponent, {data: building, width: '890px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.updateBuilding(BuildingsTableComponent.buildUpdateBuildingRequest(result), BuildingsTableComponent.interpretUpdateBuildingResponse, this);
      } else {
        return;
      }
    })
  }

  openRemoveBuildingDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveComponent, {data: identificationNumber, width: '445px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.removeBuilding(BuildingsTableComponent.buildRemoveRequest(result), BuildingsTableComponent.interpretRemoveBuildingResponse, this);
      } else {
        return;
      }
    })
  }

  openFilterBuildingsDialog() {
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
        this.buildingManagementConnector.listBuildings(BuildingsTableComponent.buildListBuildingsRequest(result, this), BuildingsTableComponent.interpretListBuildingsResponse, this);
      } else {
        return;
      }
    })
  }

  // private utils
  public static buildListBuildingsRequest(result: any, self: BuildingsTableComponent): ListBuildingsRequest {
    let request = new ListBuildingsRequest();
    let selection = new GrpcBuildingFilterValueSelection();
    selection.setGrpcComponentTypesList(self.selectedComponentTypes.filter(e => e.selected).map(e => e.componentType));
    selection.setGrpcRoomTypesList(self.selectedRoomTypes.filter(e => e.selected).map(e => e.roomType));
    selection.setGrpcCampusLocationsList(self.selectedCampusLocations.filter(e => e.selected).map(e => e.campusLocation));
    request.setGrpcFilterValueSelection(selection);
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
    request.setBuildingAddress(result.data.address);
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
    request.setBuildingAddress(result.data.address);
    return request;
  }

  private static buildRemoveRequest(result: any): RemoveRequest {
    let request = new RemoveRequest();
    request.setIdentificationNumber(result.data.identificationNumber);
    return request;
  }
}
