import {Injectable} from '@angular/core';
import {BuildingComponent} from "../../modules/building/building.component";
import {RoomComponent} from "../../modules/room/room.component";
import {ComponentComponent} from "../../modules/component/component.component";
import {BuildingsComponent} from "../../modules/buildings/buildings.component";
import {environment} from "../../../environments/environment";
import {
  CreateBuildingRequest,
  CreateBuildingResponse,
  CreateComponentRequest,
  CreateComponentResponse,
  CreateFavoriteRequest,
  CreateFavoriteResponse,
  CreateRoomRequest,
  CreateRoomResponse,
  GetBuildingRequest,
  GetBuildingResponse,
  GetComponentRequest,
  GetComponentResponse,
  GetRoomRequest,
  GetRoomResponse,
  ListBuildingsRequest,
  ListBuildingsResponse,
  ListComponentsRequest,
  ListComponentsResponse,
  ListFavoriteBuildingsRequest,
  ListFavoriteBuildingsResponse,
  ListFavoriteComponentsRequest,
  ListFavoriteComponentsResponse,
  ListFavoriteRoomsRequest,
  ListFavoriteRoomsResponse,
  ListNotificationsRequest,
  ListNotificationsResponse,
  ListRoomsRequest,
  ListRoomsResponse, RemoveRequest, RemoveResponse,
  UpdateBuildingRequest,
  UpdateBuildingResponse, UpdateComponentRequest, UpdateComponentResponse, UpdateRoomRequest, UpdateRoomResponse
} from 'src/proto/generated/building_management_pb';
import {RpcError} from "grpc-web";
import {BuildingManagementClient} from "../../../proto/generated/Building_managementServiceClientPb";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FavoritesComponent} from "../../modules/favorites/favorites.component";

@Injectable({
  providedIn: 'root'
})
export class BuildingManagementConnectorService {

  private readonly client: BuildingManagementClient;

  constructor(private snackbar: MatSnackBar) {
    this.client = new BuildingManagementClient(environment.clientUrls.building_management, null, null);
  }

  async listBuildings(request: ListBuildingsRequest, callback: (response: ListBuildingsResponse, self: BuildingsComponent) => void, self: BuildingsComponent) {
    this.client.listBuildings(request, {}, (error: RpcError, response: ListBuildingsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listRooms(request: ListRoomsRequest, callback: (response: ListRoomsResponse, self: BuildingComponent) => void, self: BuildingComponent) {
    this.client.listRooms(request, {}, (error: RpcError, response: ListRoomsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listComponents(request: ListComponentsRequest, callback: (response: ListComponentsResponse, self: BuildingComponent | RoomComponent) => void, self: BuildingComponent | RoomComponent) {
    this.client.listComponents(request, {}, (error: RpcError, response: ListComponentsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listNotifications(request: ListNotificationsRequest, callback: (response: ListNotificationsResponse, self: BuildingComponent | RoomComponent | ComponentComponent) => void, self: BuildingComponent | RoomComponent | ComponentComponent) {
    this.client.listNotifications(request, {}, (error: RpcError, response: ListNotificationsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async getBuilding(request: GetBuildingRequest, identificationNumber: string, callback: (response: GetBuildingResponse, self: BuildingComponent) => void, self: BuildingComponent) {
    this.client.getBuilding(request, {}, (error: RpcError, response: GetBuildingResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async getRoom(request: GetRoomRequest , callback: (response: GetRoomResponse, self: RoomComponent) => void, self: RoomComponent) {
    this.client.getRoom(request, {}, (error: RpcError, response: GetRoomResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async getComponent(request: GetComponentRequest, callback: (response: GetComponentResponse, self: ComponentComponent) => void, self: ComponentComponent) {
    this.client.getComponent(request, {}, (error: RpcError, response: GetComponentResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listFavoriteBuildings(request: ListFavoriteBuildingsRequest, callback: (response: ListFavoriteBuildingsResponse, self: FavoritesComponent) => void, self: FavoritesComponent) {
    this.client.listFavoriteBuildings(request, {}, (error: RpcError, response: ListFavoriteBuildingsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listFavoriteRooms(request: ListFavoriteRoomsRequest, callback: (response: ListFavoriteRoomsResponse, self: FavoritesComponent) => void, self: FavoritesComponent) {
    this.client.listFavoriteRooms(request, {}, (error: RpcError, response: ListFavoriteRoomsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listFavoriteComponents(request: ListFavoriteComponentsRequest, callback: (response: ListFavoriteComponentsResponse, self: FavoritesComponent) => void, self: FavoritesComponent) {
    this.client.listFavoriteComponents(request, {}, (error: RpcError, response: ListFavoriteComponentsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async createBuilding(request: CreateBuildingRequest, callback: (response: CreateBuildingResponse, self: BuildingsComponent) => void, self: BuildingsComponent) {
    this.client.createBuilding(request, {}, (error: RpcError, response: CreateBuildingResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async createRoom(request: CreateRoomRequest, callback: (response: CreateRoomResponse, self: BuildingComponent) => void, self: BuildingComponent) {
    this.client.createRoom(request, {}, (error: RpcError, response: CreateRoomResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async createComponent(request: CreateComponentRequest, callback: (response: CreateComponentResponse, self: BuildingComponent | RoomComponent) => void, self: BuildingComponent | RoomComponent) {
    this.client.createComponent(request, {}, (error: RpcError, response: CreateComponentResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async createFavorite(request: CreateFavoriteRequest, callback: (response: CreateFavoriteResponse, self: BuildingComponent | RoomComponent | ComponentComponent) => void, self: BuildingComponent | RoomComponent | ComponentComponent) {
    this.client.createFavorite(request, {}, (error: RpcError, response: CreateFavoriteResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async updateBuilding(request: UpdateBuildingRequest, callback: (response: UpdateBuildingResponse, self: BuildingsComponent) => void, self: BuildingsComponent) {
    this.client.updateBuilding(request, {}, (error: RpcError, response: UpdateBuildingResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async updateRoom(request: UpdateRoomRequest, callback: (response: UpdateRoomResponse, self: BuildingComponent) => void, self: BuildingComponent) {
    this.client.updateRoom(request, {}, (error: RpcError, response: UpdateRoomResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async updateComponent(request: UpdateComponentRequest, callback: (response: UpdateComponentResponse, self: BuildingComponent | RoomComponent) => void, self: BuildingComponent | RoomComponent) {
    this.client.updateComponent(request, {}, (error: RpcError, response: UpdateComponentResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async removeBuilding(request: RemoveRequest, callback: (response: RemoveResponse, self: BuildingsComponent) => void, self: BuildingsComponent) {
    this.client.removeBuilding(request, {}, (error: RpcError, response: RemoveResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async removeRoom(request: RemoveRequest, callback: (response: RemoveResponse, self: BuildingComponent) => void, self: BuildingComponent) {
    this.client.removeRoom(request, {}, (error: RpcError, response: RemoveResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async removeComponent(request: RemoveRequest, callback: (response: RemoveResponse, self: RoomComponent) => void, self: RoomComponent) {
    this.client.removeComponent(request, {}, (error: RpcError, response: RemoveResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async removeFavorite(request: RemoveRequest, callback: (response: RemoveResponse, self: FavoritesComponent) => void, self: FavoritesComponent) {
    this.client.removeFavorite(request, {}, (error: RpcError, response: RemoveResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }
}
