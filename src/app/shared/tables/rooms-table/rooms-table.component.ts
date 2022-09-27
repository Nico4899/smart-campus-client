import {Component, OnInit, ViewChild} from '@angular/core';
import {
  CreateRoomRequest,
  CreateRoomResponse,
  GrpcRoom,
  GrpcGeographicalLocation,
  ListRoomsRequest,
  ListRoomsResponse,
  RemoveRequest,
  UpdateRoomRequest,
  UpdateRoomResponse, ListFavoriteRoomsRequest, GrpcBuildingFilterValueSelection, CreateFavoriteResponse, CreateFavoriteRequest
} from "../../../../proto/generated/building_management_pb";
import {
  CreateProblemRequest,
  CreateProblemResponse
} from "../../../../proto/generated/problem_management_pb"
import {BuildingManagementConnectorService} from "../../../core/connectors/building-management-connector.service";
import {ProblemManagementConnectorService} from "../../../core/connectors/problem-management-connector.service"

import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from '@angular/material/dialog'
import {AddRoomComponent} from '../../dialogs/add-room/add-room.component'
import {EditRoomComponent} from '../../dialogs/edit-room/edit-room.component'
import {RemoveComponent} from "../../dialogs/remove/remove.component";
import {AuthServiceService} from "../../../core/authentication/auth-service.service";
import {FilterRoomsComponent} from "../../dialogs/filter-rooms/filter-rooms.component";
import { ProblemsTableComponent } from '../problems-table/problems-table.component';
import { BuildingsTableComponent } from '../buildings-table/buildings-table.component';
import { AddProblemComponent } from '../../dialogs/add-problem/add-problem.component';
import { ComponentsTableComponent } from '../components-table/components-table.component';

@Component({
  selector: 'app-rooms-table',
  templateUrl: './rooms-table.component.html',
  styleUrls: ['./rooms-table.component.css']
})
export class RoomsTableComponent implements OnInit {

  // path variable
  bin: string = "";

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcRoom.AsObject> = new MatTableDataSource<GrpcRoom.AsObject>();

  // search values from search bars
  searchKey: string = "";

  // data loading
  isLoading = true;

  // columns to be displayed
  displayedColumns: string[] = ['roomNumber', 'roomName', 'floor', 'roomType', 'edit_room', 'delete_room'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private problemManagementConnector: ProblemManagementConnectorService, private route: ActivatedRoute,
              private dialog: MatDialog, public authService: AuthServiceService) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {
    // obtain path variables
    this.bin = String(this.route.snapshot.paramMap.get("bin"));

    // run initial calls
    let listRoomsRequest = new ListRoomsRequest();
    listRoomsRequest.setIdentificationNumber(this.bin);
    this.buildingManagementConnector.listRooms(listRoomsRequest, RoomsTableComponent.interpretListRoomsResponse, this);
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

  // private callback methods for api calls

  private static interpretCreateProblemResponse(response: CreateProblemResponse, self: BuildingsTableComponent | ProblemsTableComponent | RoomsTableComponent | ComponentsTableComponent): void{
    return;
  }

  private static interpretListRoomsResponse(response: ListRoomsResponse, self: RoomsTableComponent): void {
    self.dataSource.data = response.toObject().roomsList;
    self.isLoading = false;
  }

  private static interpretCreateRoomResponse(response: CreateRoomResponse, self: RoomsTableComponent): void {
    self.dataSource.data.push(response.getRoom()?.toObject()!);
  }

  private static interpretUpdateRoomResponse(response: UpdateRoomResponse, self: RoomsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != response.getRoom()?.getIdentificationNumber());
    self.dataSource.data.push(response.getRoom()?.toObject()!);

  }

  private static interpretRemoveBuildingResponse(id: string, self: RoomsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != id);
  }


  private static interpretCreateFavoriteResponse(response: CreateFavoriteResponse, self: any): void {

  }


  //button methods start
  openCreateRoomDialog() {
    const dialogRef = this.dialog.open(AddRoomComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.createRoom(RoomsTableComponent.buildCreateRoomRequest(this.bin, result),
          RoomsTableComponent.interpretCreateRoomResponse, this);
      } else {
        return;
      }
    })
  }


  openCreateProblemDialog() {
    const dialogRef = this.dialog.open(AddProblemComponent);
    dialogRef.afterClosed().subscribe( result => {
      if(result.event == 'ok'){
        this.problemManagementConnector.createProblem(RoomsTableComponent.buildCreateProblemRequest(result), RoomsTableComponent.interpretCreateProblemResponse, this);
      } else {
        return;
      }
    })
  }



  openUpdateRoomDialog(room: GrpcRoom.AsObject) {
    const dialogRef = this.dialog.open(EditRoomComponent, {data: room})
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.updateRoom(RoomsTableComponent.buildUpdateRoomRequest(result), RoomsTableComponent.interpretUpdateRoomResponse, this);
      } else {
        return;
      }
    })
  }

  openRemoveRoomDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveComponent, {data: identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.removeRoom(RoomsTableComponent.buildRemoveRequest(result), RoomsTableComponent.interpretRemoveBuildingResponse, this);
      } else {
        return;
      }
    })
  }

  openFilterRoomsDialog() {
    const dialogRef = this.dialog.open(FilterRoomsComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.isLoading = true;
        this.buildingManagementConnector.listRooms(RoomsTableComponent.buildListRoomsRequest(result),
          RoomsTableComponent.interpretListRoomsResponse, this);
      } else {
        return;
      }
    })
  }

  addFavorite(room: GrpcRoom.AsObject) {
    const id = room.identificationNumber;
    const name: string = this.authService.name as string;
    const result = {
      data : {
        referenceIdentificationNumber: id,
        owner: name
      }
    }
    this.buildingManagementConnector.createFavorite( RoomsTableComponent.buildCreateFavoriteRequest(result),RoomsTableComponent.interpretCreateFavoriteResponse, this);
  }

  //private utils here
  public static buildListRoomsRequest(result: any): ListRoomsRequest {
    let request = new ListRoomsRequest();
    let selection = new GrpcBuildingFilterValueSelection();
    selection.setGrpcComponentTypesList(result.data.componentTypes);
    selection.setGrpcRoomTypesList(result.data.roomTypes);
    request.setGrpcFilterValueSelection(selection);
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


  private static buildCreateRoomRequest(bin: string, result: any): CreateRoomRequest {
    let request = new CreateRoomRequest();
    request.setRoomNumber(result.data.roomNumber);
    request.setRoomName(result.data.roomName);
    request.setFloor(result.data.floor);
    request.setParentIdentificationNumber(bin);
    request.setRoomType(result.data.roomType);
    let geoLocation = new GrpcGeographicalLocation();
    geoLocation.setLatitude(result.data.latitude);
    geoLocation.setLongitude(result.data.longitude);
    request.setGrpcGeographicalLocation(geoLocation);
    return request;
  }

  private static buildUpdateRoomRequest(result: any): UpdateRoomRequest {
    let request = new UpdateRoomRequest();
    request.setRoomName(result.data.roomName);
    request.setRoomNumber(result.data.roomNumber);
    request.setFloor(result.data.floor);
    request.setRoomType(result.data.roomType);
    request.setIdentificationNumber(result.data.identificationNumber);
    let geoLocation = new GrpcGeographicalLocation();
    geoLocation.setLatitude(result.data.latitude);
    geoLocation.setLongitude(result.data.longitude);
    request.setGrpcGeographicalLocation(geoLocation);
    request.setParentIdentificationNumber(result.data.parentIdentificationNumber)
    return request;
  }

  private static buildRemoveRequest(result: any): RemoveRequest {
    let request = new RemoveRequest();
    request.setIdentificationNumber(result.data.identificationNumber);
    return request;
  }


  private static buildCreateFavoriteRequest(result: any): CreateFavoriteRequest {
    let request = new CreateFavoriteRequest();
    request.setOwner(result.data.owner);
    request.setReferenceIdentificationNumber(result.data.referenceIdentificationNumber);
    return request;
  }


}
