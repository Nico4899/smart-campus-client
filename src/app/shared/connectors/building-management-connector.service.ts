import {Injectable} from '@angular/core';
import {BuildingsComponent} from "../../modules/buildings/buildings.component";
import {BuildingManagementClient} from "../../../proto/generated/building_management_pb_service";
import {environment} from "../../../environments/environment";
import {
  GetBuildingRequest,
  GetRoomRequest,
  GrpcBuilding,
  GrpcComponent,
  GrpcNotification,
  GrpcRoom,
  ListBuildingsRequest,
  ListComponentsRequest,
  ListNotificationsRequest,
  ListRoomsRequest
} from "../../../proto/generated/building_management_pb";
import {BuildingComponent} from "../../modules/building/building.component";
import {RoomComponent} from "../../modules/room/room.component";
import {ComponentComponent} from "../../modules/component/component.component";

@Injectable({
  providedIn: 'root'
})
export class BuildingManagementConnectorService {
  private readonly client: BuildingManagementClient;

  constructor() {
    this.client = new BuildingManagementClient(environment.clientUrls.building_management);
  }

  //TODO add filter values logic
  async listBuildings(callback: (buildings: GrpcBuilding[] | undefined, self: BuildingsComponent) => void, self: BuildingsComponent) {

    let request = new ListBuildingsRequest();

    this.client.listBuildings(request, (error, response) => {
      callback(response?.getBuildingsList(), self);
    })
  }

  //TODO add filter values logic
  async listRooms(parentIdentificationNumber: string, callback: (rooms: GrpcRoom[] | undefined, self: BuildingComponent) => void, self: BuildingComponent) {

    let request = new ListRoomsRequest();
    request.setIdentificationNumber(parentIdentificationNumber);

    this.client.listRooms(request, (error, response) => {
      callback(response?.getRoomsList(), self);
    })
  }

  async listComponents(parentIdentificationNumber: string, callback: (components: GrpcComponent[] | undefined, self: BuildingComponent | RoomComponent) => void, self: BuildingComponent | RoomComponent) {

    let request = new ListComponentsRequest();
    request.setIdentificationNumber(parentIdentificationNumber);

    this.client.listComponents(request, (error, response) => {
      callback(response?.getComponentsList(), self);
    })
  }

  async listNotifications(parentIdentificationNumber: string, callback: (notifications: GrpcNotification[] | undefined, self: BuildingComponent | RoomComponent | ComponentComponent) => void, self: BuildingComponent | RoomComponent | ComponentComponent) {

    let request = new ListNotificationsRequest();
    request.setIdentificationNumber(parentIdentificationNumber);

    this.client.listNotifications(request, (error, response) => {
      callback(response?.getNotificationsList(), self);
    })
  }

  // unsure if correct
  async getBuilding(identificationNumber: string, callback: (building: GrpcBuilding | undefined, self: BuildingComponent) => void, self: BuildingComponent) {

    let request = new GetBuildingRequest();
    request.setIdentificationNumber(identificationNumber);

    this.client.getBuilding(request, (error, response) => {
      callback(response?.getGrpcBuilding(), self);
    })
  }

  async getRoom(identificationNumber: string, callback: (room: GrpcRoom | undefined, self: RoomComponent) => void, self: RoomComponent) {

    let request = new GetRoomRequest();
    request.setIdentificationNumber(identificationNumber);

    this.client.getRoom(request, (error, response) => {
      callback(response?.getRoom(), self);
    })
  }

  async getComponent(identificationNumber: string, callback: (component: GrpcComponent | undefined, self: ComponentComponent) => void, self: ComponentComponent) {

    let request = new GetRoomRequest();
    request.setIdentificationNumber(identificationNumber);

    this.client.getComponent(request, (error, response) => {
      callback(response?.getComponent(), self);
    })
  }
}
