import {Injectable} from '@angular/core';
import {BuildingComponent} from "../../modules/building/building.component";
import {RoomComponent} from "../../modules/room/room.component";
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
  ListRoomsResponse,
  RemoveFavoriteRequest,
  RemoveRequest,
  RemoveResponse,
  UpdateBuildingRequest,
  UpdateBuildingResponse,
  UpdateComponentRequest,
  UpdateComponentResponse,
  UpdateRoomRequest,
  UpdateRoomResponse
} from 'src/proto/generated/building_management_pb';
import {RpcError} from "grpc-web";
import {BuildingManagementClient} from "../../../proto/generated/Building_managementServiceClientPb";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FavoritesComponent} from "../../modules/favorites/favorites.component";
import {ComponentComponent} from "../../modules/component/component.component";
import {NotificationsTableComponent} from "../../shared/tables/notifications-table/notifications-table.component";
import {ComponentsTableComponent} from "../../shared/tables/components-table/components-table.component";
import {RoomsTableComponent} from "../../shared/tables/rooms-table/rooms-table.component";
import {BuildingsTableComponent} from "../../shared/tables/buildings-table/buildings-table.component";
import {
  FavoriteBuildingsTableComponent
} from "../../shared/tables/favorites-tables/favorite-buildings-table/favorite-buildings-table.component";
import {
  FavoriteComponentsTableComponent
} from "../../shared/tables/favorites-tables/favorite-components-table/favorite-components-table.component";
import {
  FavoriteRoomsTableComponent
} from "../../shared/tables/favorites-tables/favorite-rooms-table/favorite-rooms-table.component";
import {AuthServiceService} from "../authentication/auth-service.service";

@Injectable({
  providedIn: 'root'
})
export class BuildingManagementConnectorService {

  private readonly client: BuildingManagementClient;

  constructor(private snackbar: MatSnackBar, private authService: AuthServiceService) {
    this.client = new BuildingManagementClient(environment.clientUrls.building_management, null, null);
  }

  async listBuildings(request: ListBuildingsRequest, callback: (response: ListBuildingsResponse, self: BuildingsTableComponent) => void, self: BuildingsTableComponent) {
    this.client.listBuildings(request, {}, (error: RpcError, response: ListBuildingsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listRooms(request: ListRoomsRequest, callback: (response: ListRoomsResponse, self: RoomsTableComponent) => void, self: RoomsTableComponent) {
    this.client.listRooms(request, {}, (error: RpcError, response: ListRoomsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listComponents(request: ListComponentsRequest, callback: (response: ListComponentsResponse, self: ComponentsTableComponent) => void, self: ComponentsTableComponent) {
    this.client.listComponents(request, {}, (error: RpcError, response: ListComponentsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listNotifications(request: ListNotificationsRequest, callback: (response: ListNotificationsResponse, self: NotificationsTableComponent) => void, self: NotificationsTableComponent) {
    this.client.listNotifications(request, {}, (error: RpcError, response: ListNotificationsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async getBuilding(request: GetBuildingRequest, callback: (response: GetBuildingResponse, self: BuildingComponent) => void, self: BuildingComponent) {
    this.client.getBuilding(request, {}, (error: RpcError, response: GetBuildingResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async getRoom(request: GetRoomRequest, callback: (response: GetRoomResponse, self: RoomComponent) => void, self: RoomComponent) {
    this.client.getRoom(request, {}, (error: RpcError, response: GetRoomResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listFavoriteBuildings(request: ListFavoriteBuildingsRequest, callback: (response: ListFavoriteBuildingsResponse, self:( FavoriteBuildingsTableComponent | BuildingsTableComponent )) => void, self: (FavoriteBuildingsTableComponent | BuildingsTableComponent)) {
    this.client.listFavoriteBuildings(request, {authentication: `Bearer ${this.authService.token}`}, (error: RpcError, response: ListFavoriteBuildingsResponse) => {
      if (error) {
        console.log(error.message);
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listFavoriteRooms(request: ListFavoriteRoomsRequest, callback: (response: ListFavoriteRoomsResponse, self: FavoriteRoomsTableComponent) => void, self: FavoriteRoomsTableComponent) {
    this.client.listFavoriteRooms(request, {}, (error: RpcError, response: ListFavoriteRoomsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async listFavoriteComponents(request: ListFavoriteComponentsRequest, callback: (response: ListFavoriteComponentsResponse, self: FavoriteComponentsTableComponent) => void, self: FavoriteComponentsTableComponent) {
    this.client.listFavoriteComponents(request, {}, (error: RpcError, response: ListFavoriteComponentsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async createBuilding(request: CreateBuildingRequest, callback: (response: CreateBuildingResponse, self: BuildingsTableComponent) => void, self: BuildingsTableComponent) {
    this.client.createBuilding(request, {}, (error: RpcError, response: CreateBuildingResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async createRoom(request: CreateRoomRequest, callback: (response: CreateRoomResponse, self: RoomsTableComponent) => void, self: RoomsTableComponent) {
    this.client.createRoom(request, {}, (error: RpcError, response: CreateRoomResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async createComponent(request: CreateComponentRequest, callback: (response: CreateComponentResponse, self: ComponentsTableComponent) => void, self: ComponentsTableComponent) {
    this.client.createComponent(request, {}, (error: RpcError, response: CreateComponentResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async createFavorite(request: CreateFavoriteRequest, callback: (response: CreateFavoriteResponse, self: BuildingComponent | RoomComponent) => void, self: BuildingComponent | RoomComponent) {
    this.client.createFavorite(request, {}, (error: RpcError, response: CreateFavoriteResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async updateBuilding(request: UpdateBuildingRequest, callback: (response: UpdateBuildingResponse, self: BuildingsTableComponent) => void, self: BuildingsTableComponent) {
    this.client.updateBuilding(request, {}, (error: RpcError, response: UpdateBuildingResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async updateRoom(request: UpdateRoomRequest, callback: (response: UpdateRoomResponse, self: RoomsTableComponent) => void, self: RoomsTableComponent) {
    this.client.updateRoom(request, {}, (error: RpcError, response: UpdateRoomResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async updateComponent(request: UpdateComponentRequest, callback: (response: UpdateComponentResponse, self: ComponentsTableComponent) => void, self: ComponentsTableComponent) {
    this.client.updateComponent(request, {}, (error: RpcError, response: UpdateComponentResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async removeBuilding(request: RemoveRequest, callback: (id: string, self: BuildingsTableComponent) => void, self: BuildingsTableComponent) {
    this.client.removeBuilding(request, {}, (error: RpcError, response: RemoveResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(request.getIdentificationNumber(), self);
      }
    })
  }

  async removeRoom(request: RemoveRequest, callback: (id: string, self: RoomsTableComponent) => void, self: RoomsTableComponent) {
    this.client.removeRoom(request, {}, (error: RpcError, response: RemoveResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(request.getIdentificationNumber(), self);
      }
    })
  }

  //TODO never invokes call for some unexpected reason
  async removeComponent(request: RemoveRequest, callback: (id: string, self: ComponentsTableComponent) => void, self: ComponentsTableComponent) {
    this.client.removeComponent(request, {}, (error: RpcError, response: RemoveResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again." + error.code.toString(), "", {duration: 1500});
      } else {
        callback(request.getIdentificationNumber(), self);
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

  /*
  async removeFavorite(request: RemoveFavoriteRequest, callback: (response: RemoveResponse, self: FavoritesComponent) => void, self: FavoritesComponent) {
    this.client.removeFavorite(request, {}, (error: RpcError, response: RemoveResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }
   */

  async removeFavorite(request: RemoveFavoriteRequest, callback: (id: string, self: FavoriteBuildingsTableComponent | FavoriteComponentsTableComponent | FavoriteRoomsTableComponent) =>
    void, self: FavoriteBuildingsTableComponent | FavoriteComponentsTableComponent | FavoriteRoomsTableComponent) {
    this.client.removeFavorite(request, {}, (error: RpcError, response: RemoveResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(request.getIdentificationNumber(), self);
      }
    })
  }
}
