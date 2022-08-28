import {Injectable} from '@angular/core';
import {BuildingComponent} from "../../modules/building/building.component";
import {RoomComponent} from "../../modules/room/room.component";
import {ComponentComponent} from "../../modules/component/component.component";
import {BuildingsComponent} from "../../modules/buildings/buildings.component";
import {environment} from "../../../environments/environment";
import {
  GetBuildingRequest,
  GetBuildingResponse,
  GetComponentResponse,
  GetRoomRequest,
  GetRoomResponse,
  GrpcBuilding,
  GrpcComponent, GrpcFilterValueSelection,
  GrpcNotification,
  GrpcRoom,
  ListBuildingsRequest,
  ListBuildingsResponse,
  ListComponentsRequest, ListComponentsResponse,
  ListNotificationsRequest,
  ListNotificationsResponse,
  ListRoomsRequest, ListRoomsResponse
} from 'src/proto/generated/building_management_pb';
import {RpcError} from "grpc-web";
import {BuildingManagementClient} from "../../../proto/generated/Building_managementServiceClientPb";
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})
export class BuildingManagementConnectorService {

  private readonly client: BuildingManagementClient;

  constructor() {
    this.client = new BuildingManagementClient(environment.clientUrls.building_management, null, null);
  }

  async listBuildings(callback: (response: ListBuildingsResponse, self: BuildingsComponent) => void, self: BuildingsComponent) {

    let request = new ListBuildingsRequest();

    this.client.listBuildings(request, {},(error: RpcError, response: ListBuildingsResponse) => {
        callback(response, self);
    })
  }

  async listRooms(parentIdentificationNumber: string, callback: (response: ListRoomsResponse, self: BuildingComponent) => void, self: BuildingComponent) {

    let request = new ListRoomsRequest();
    request.setIdentificationNumber(parentIdentificationNumber);

    this.client.listRooms(request, {}, (error: RpcError, response:ListRoomsResponse) => {
      callback(response, self);
    })
  }

  async listComponents(parentIdentificationNumber: string, callback: (response: ListComponentsResponse, self: BuildingComponent | RoomComponent) => void, self: BuildingComponent | RoomComponent) {

    let request = new ListComponentsRequest();
    request.setIdentificationNumber(parentIdentificationNumber);

    this.client.listComponents(request, {}, (error: RpcError, response: ListComponentsResponse) => {
      callback(response, self);
    })
  }

  async listNotifications(parentIdentificationNumber: string, callback: (response: ListNotificationsResponse, self: BuildingComponent | RoomComponent | ComponentComponent) => void, self: BuildingComponent | RoomComponent | ComponentComponent) {

    let request = new ListNotificationsRequest();
    request.setIdentificationNumber(parentIdentificationNumber);

    this.client.listNotifications(request, {}, (error: RpcError, response: ListNotificationsResponse) => {
      callback(response, self);
    })
  }

  async getBuilding(identificationNumber: string, callback: (response: GetBuildingResponse, self: BuildingComponent) => void, self: BuildingComponent) {

    let request = new GetBuildingRequest();
    request.setIdentificationNumber(identificationNumber);

    this.client.getBuilding(request, {}, (error: RpcError, response: GetBuildingResponse) => {
      callback(response, self);
    })
  }

  async getRoom(identificationNumber: string, callback: (response: GetRoomResponse, self: RoomComponent) => void, self: RoomComponent) {

    let request = new GetRoomRequest();
    request.setIdentificationNumber(identificationNumber);

    this.client.getRoom(request, {}, (error: RpcError, response: GetRoomResponse) => {
      callback(response, self);
    })
  }

  async getComponent(identificationNumber: string, callback: (response: GetComponentResponse, self: ComponentComponent) => void, self: ComponentComponent) {

    let request = new GetRoomRequest();
    request.setIdentificationNumber(identificationNumber);

    this.client.getComponent(request, {}, (error: RpcError, response: GetComponentResponse) => {
      callback(response, self);
    })
  }
}
