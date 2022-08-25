// package: edu.kit.tm.cm.proto
// file: building_management.proto

import * as building_management_pb from "./building_management_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BuildingManagementGetBuilding = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.GetBuildingRequest;
  readonly responseType: typeof building_management_pb.GetBuildingResponse;
};

type BuildingManagementGetRoom = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.GetRoomRequest;
  readonly responseType: typeof building_management_pb.GetRoomResponse;
};

type BuildingManagementGetComponent = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.GetComponentRequest;
  readonly responseType: typeof building_management_pb.GetComponentResponse;
};

type BuildingManagementListBuildings = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.ListBuildingsRequest;
  readonly responseType: typeof building_management_pb.ListBuildingsResponse;
};

type BuildingManagementListRooms = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.ListRoomsRequest;
  readonly responseType: typeof building_management_pb.ListRoomsResponse;
};

type BuildingManagementListComponents = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.ListComponentsRequest;
  readonly responseType: typeof building_management_pb.ListComponentsResponse;
};

type BuildingManagementListNotifications = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.ListNotificationsRequest;
  readonly responseType: typeof building_management_pb.ListNotificationsResponse;
};

type BuildingManagementListFavoriteBuildings = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.ListFavoriteBuildingsRequest;
  readonly responseType: typeof building_management_pb.ListFavoriteBuildingsResponse;
};

type BuildingManagementListFavoriteRooms = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.ListFavoriteRoomsRequest;
  readonly responseType: typeof building_management_pb.ListFavoriteRoomsResponse;
};

type BuildingManagementListFavoriteComponents = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.ListFavoriteComponentsRequest;
  readonly responseType: typeof building_management_pb.ListFavoriteComponentsResponse;
};

type BuildingManagementCreateBuilding = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.CreateBuildingRequest;
  readonly responseType: typeof building_management_pb.CreateBuildingResponse;
};

type BuildingManagementCreateRoom = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.CreateRoomRequest;
  readonly responseType: typeof building_management_pb.CreateRoomResponse;
};

type BuildingManagementCreateComponent = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.CreateComponentRequest;
  readonly responseType: typeof building_management_pb.CreateComponentResponse;
};

type BuildingManagementCreateFavorite = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.CreateFavoriteRequest;
  readonly responseType: typeof building_management_pb.CreateFavoriteResponse;
};

type BuildingManagementUpdateBuilding = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.UpdateBuildingRequest;
  readonly responseType: typeof building_management_pb.UpdateBuildingResponse;
};

type BuildingManagementUpdateRoom = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.UpdateRoomRequest;
  readonly responseType: typeof building_management_pb.UpdateRoomResponse;
};

type BuildingManagementUpdateComponent = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.UpdateComponentRequest;
  readonly responseType: typeof building_management_pb.UpdateComponentResponse;
};

type BuildingManagementRemoveBuilding = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.RemoveRequest;
  readonly responseType: typeof building_management_pb.RemoveResponse;
};

type BuildingManagementRemoveRoom = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.RemoveRequest;
  readonly responseType: typeof building_management_pb.RemoveResponse;
};

type BuildingManagementRemoveComponent = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.RemoveRequest;
  readonly responseType: typeof building_management_pb.RemoveResponse;
};

type BuildingManagementRemoveFavorite = {
  readonly methodName: string;
  readonly service: typeof BuildingManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof building_management_pb.RemoveRequest;
  readonly responseType: typeof building_management_pb.RemoveResponse;
};

export class BuildingManagement {
  static readonly serviceName: string;
  static readonly GetBuilding: BuildingManagementGetBuilding;
  static readonly GetRoom: BuildingManagementGetRoom;
  static readonly GetComponent: BuildingManagementGetComponent;
  static readonly ListBuildings: BuildingManagementListBuildings;
  static readonly ListRooms: BuildingManagementListRooms;
  static readonly ListComponents: BuildingManagementListComponents;
  static readonly ListNotifications: BuildingManagementListNotifications;
  static readonly ListFavoriteBuildings: BuildingManagementListFavoriteBuildings;
  static readonly ListFavoriteRooms: BuildingManagementListFavoriteRooms;
  static readonly ListFavoriteComponents: BuildingManagementListFavoriteComponents;
  static readonly CreateBuilding: BuildingManagementCreateBuilding;
  static readonly CreateRoom: BuildingManagementCreateRoom;
  static readonly CreateComponent: BuildingManagementCreateComponent;
  static readonly CreateFavorite: BuildingManagementCreateFavorite;
  static readonly UpdateBuilding: BuildingManagementUpdateBuilding;
  static readonly UpdateRoom: BuildingManagementUpdateRoom;
  static readonly UpdateComponent: BuildingManagementUpdateComponent;
  static readonly RemoveBuilding: BuildingManagementRemoveBuilding;
  static readonly RemoveRoom: BuildingManagementRemoveRoom;
  static readonly RemoveComponent: BuildingManagementRemoveComponent;
  static readonly RemoveFavorite: BuildingManagementRemoveFavorite;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class BuildingManagementClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getBuilding(
    requestMessage: building_management_pb.GetBuildingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.GetBuildingResponse|null) => void
  ): UnaryResponse;
  getBuilding(
    requestMessage: building_management_pb.GetBuildingRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.GetBuildingResponse|null) => void
  ): UnaryResponse;
  getRoom(
    requestMessage: building_management_pb.GetRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.GetRoomResponse|null) => void
  ): UnaryResponse;
  getRoom(
    requestMessage: building_management_pb.GetRoomRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.GetRoomResponse|null) => void
  ): UnaryResponse;
  getComponent(
    requestMessage: building_management_pb.GetComponentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.GetComponentResponse|null) => void
  ): UnaryResponse;
  getComponent(
    requestMessage: building_management_pb.GetComponentRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.GetComponentResponse|null) => void
  ): UnaryResponse;
  listBuildings(
    requestMessage: building_management_pb.ListBuildingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListBuildingsResponse|null) => void
  ): UnaryResponse;
  listBuildings(
    requestMessage: building_management_pb.ListBuildingsRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListBuildingsResponse|null) => void
  ): UnaryResponse;
  listRooms(
    requestMessage: building_management_pb.ListRoomsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListRoomsResponse|null) => void
  ): UnaryResponse;
  listRooms(
    requestMessage: building_management_pb.ListRoomsRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListRoomsResponse|null) => void
  ): UnaryResponse;
  listComponents(
    requestMessage: building_management_pb.ListComponentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListComponentsResponse|null) => void
  ): UnaryResponse;
  listComponents(
    requestMessage: building_management_pb.ListComponentsRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListComponentsResponse|null) => void
  ): UnaryResponse;
  listNotifications(
    requestMessage: building_management_pb.ListNotificationsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListNotificationsResponse|null) => void
  ): UnaryResponse;
  listNotifications(
    requestMessage: building_management_pb.ListNotificationsRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListNotificationsResponse|null) => void
  ): UnaryResponse;
  listFavoriteBuildings(
    requestMessage: building_management_pb.ListFavoriteBuildingsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListFavoriteBuildingsResponse|null) => void
  ): UnaryResponse;
  listFavoriteBuildings(
    requestMessage: building_management_pb.ListFavoriteBuildingsRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListFavoriteBuildingsResponse|null) => void
  ): UnaryResponse;
  listFavoriteRooms(
    requestMessage: building_management_pb.ListFavoriteRoomsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListFavoriteRoomsResponse|null) => void
  ): UnaryResponse;
  listFavoriteRooms(
    requestMessage: building_management_pb.ListFavoriteRoomsRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListFavoriteRoomsResponse|null) => void
  ): UnaryResponse;
  listFavoriteComponents(
    requestMessage: building_management_pb.ListFavoriteComponentsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListFavoriteComponentsResponse|null) => void
  ): UnaryResponse;
  listFavoriteComponents(
    requestMessage: building_management_pb.ListFavoriteComponentsRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.ListFavoriteComponentsResponse|null) => void
  ): UnaryResponse;
  createBuilding(
    requestMessage: building_management_pb.CreateBuildingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.CreateBuildingResponse|null) => void
  ): UnaryResponse;
  createBuilding(
    requestMessage: building_management_pb.CreateBuildingRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.CreateBuildingResponse|null) => void
  ): UnaryResponse;
  createRoom(
    requestMessage: building_management_pb.CreateRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.CreateRoomResponse|null) => void
  ): UnaryResponse;
  createRoom(
    requestMessage: building_management_pb.CreateRoomRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.CreateRoomResponse|null) => void
  ): UnaryResponse;
  createComponent(
    requestMessage: building_management_pb.CreateComponentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.CreateComponentResponse|null) => void
  ): UnaryResponse;
  createComponent(
    requestMessage: building_management_pb.CreateComponentRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.CreateComponentResponse|null) => void
  ): UnaryResponse;
  createFavorite(
    requestMessage: building_management_pb.CreateFavoriteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.CreateFavoriteResponse|null) => void
  ): UnaryResponse;
  createFavorite(
    requestMessage: building_management_pb.CreateFavoriteRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.CreateFavoriteResponse|null) => void
  ): UnaryResponse;
  updateBuilding(
    requestMessage: building_management_pb.UpdateBuildingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.UpdateBuildingResponse|null) => void
  ): UnaryResponse;
  updateBuilding(
    requestMessage: building_management_pb.UpdateBuildingRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.UpdateBuildingResponse|null) => void
  ): UnaryResponse;
  updateRoom(
    requestMessage: building_management_pb.UpdateRoomRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.UpdateRoomResponse|null) => void
  ): UnaryResponse;
  updateRoom(
    requestMessage: building_management_pb.UpdateRoomRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.UpdateRoomResponse|null) => void
  ): UnaryResponse;
  updateComponent(
    requestMessage: building_management_pb.UpdateComponentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.UpdateComponentResponse|null) => void
  ): UnaryResponse;
  updateComponent(
    requestMessage: building_management_pb.UpdateComponentRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.UpdateComponentResponse|null) => void
  ): UnaryResponse;
  removeBuilding(
    requestMessage: building_management_pb.RemoveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.RemoveResponse|null) => void
  ): UnaryResponse;
  removeBuilding(
    requestMessage: building_management_pb.RemoveRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.RemoveResponse|null) => void
  ): UnaryResponse;
  removeRoom(
    requestMessage: building_management_pb.RemoveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.RemoveResponse|null) => void
  ): UnaryResponse;
  removeRoom(
    requestMessage: building_management_pb.RemoveRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.RemoveResponse|null) => void
  ): UnaryResponse;
  removeComponent(
    requestMessage: building_management_pb.RemoveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.RemoveResponse|null) => void
  ): UnaryResponse;
  removeComponent(
    requestMessage: building_management_pb.RemoveRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.RemoveResponse|null) => void
  ): UnaryResponse;
  removeFavorite(
    requestMessage: building_management_pb.RemoveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.RemoveResponse|null) => void
  ): UnaryResponse;
  removeFavorite(
    requestMessage: building_management_pb.RemoveRequest,
    callback: (error: ServiceError|null, responseMessage: building_management_pb.RemoveResponse|null) => void
  ): UnaryResponse;
}

