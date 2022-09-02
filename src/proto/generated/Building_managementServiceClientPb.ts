/**
 * @fileoverview gRPC-Web generated client stub for edu.kit.tm.cm.proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as building_management_pb from './building_management_pb';


export class BuildingManagementClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGetBuilding = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/GetBuilding',
    grpcWeb.MethodType.UNARY,
    building_management_pb.GetBuildingRequest,
    building_management_pb.GetBuildingResponse,
    (request: building_management_pb.GetBuildingRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.GetBuildingResponse.deserializeBinary
  );

  getBuilding(
    request: building_management_pb.GetBuildingRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.GetBuildingResponse>;

  getBuilding(
    request: building_management_pb.GetBuildingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.GetBuildingResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.GetBuildingResponse>;

  getBuilding(
    request: building_management_pb.GetBuildingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.GetBuildingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/GetBuilding',
        request,
        metadata || {},
        this.methodDescriptorGetBuilding,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/GetBuilding',
    request,
    metadata || {},
    this.methodDescriptorGetBuilding);
  }

  methodDescriptorGetRoom = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/GetRoom',
    grpcWeb.MethodType.UNARY,
    building_management_pb.GetRoomRequest,
    building_management_pb.GetRoomResponse,
    (request: building_management_pb.GetRoomRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.GetRoomResponse.deserializeBinary
  );

  getRoom(
    request: building_management_pb.GetRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.GetRoomResponse>;

  getRoom(
    request: building_management_pb.GetRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.GetRoomResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.GetRoomResponse>;

  getRoom(
    request: building_management_pb.GetRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.GetRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/GetRoom',
        request,
        metadata || {},
        this.methodDescriptorGetRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/GetRoom',
    request,
    metadata || {},
    this.methodDescriptorGetRoom);
  }

  methodDescriptorGetComponent = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/GetComponent',
    grpcWeb.MethodType.UNARY,
    building_management_pb.GetComponentRequest,
    building_management_pb.GetComponentResponse,
    (request: building_management_pb.GetComponentRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.GetComponentResponse.deserializeBinary
  );

  getComponent(
    request: building_management_pb.GetComponentRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.GetComponentResponse>;

  getComponent(
    request: building_management_pb.GetComponentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.GetComponentResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.GetComponentResponse>;

  getComponent(
    request: building_management_pb.GetComponentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.GetComponentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/GetComponent',
        request,
        metadata || {},
        this.methodDescriptorGetComponent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/GetComponent',
    request,
    metadata || {},
    this.methodDescriptorGetComponent);
  }

  methodDescriptorListBuildings = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/ListBuildings',
    grpcWeb.MethodType.UNARY,
    building_management_pb.ListBuildingsRequest,
    building_management_pb.ListBuildingsResponse,
    (request: building_management_pb.ListBuildingsRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.ListBuildingsResponse.deserializeBinary
  );

  listBuildings(
    request: building_management_pb.ListBuildingsRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.ListBuildingsResponse>;

  listBuildings(
    request: building_management_pb.ListBuildingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.ListBuildingsResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.ListBuildingsResponse>;

  listBuildings(
    request: building_management_pb.ListBuildingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.ListBuildingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/ListBuildings',
        request,
        metadata || {},
        this.methodDescriptorListBuildings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/ListBuildings',
    request,
    metadata || {},
    this.methodDescriptorListBuildings);
  }

  methodDescriptorListRooms = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/ListRooms',
    grpcWeb.MethodType.UNARY,
    building_management_pb.ListRoomsRequest,
    building_management_pb.ListRoomsResponse,
    (request: building_management_pb.ListRoomsRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.ListRoomsResponse.deserializeBinary
  );

  listRooms(
    request: building_management_pb.ListRoomsRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.ListRoomsResponse>;

  listRooms(
    request: building_management_pb.ListRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.ListRoomsResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.ListRoomsResponse>;

  listRooms(
    request: building_management_pb.ListRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.ListRoomsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/ListRooms',
        request,
        metadata || {},
        this.methodDescriptorListRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/ListRooms',
    request,
    metadata || {},
    this.methodDescriptorListRooms);
  }

  methodDescriptorListComponents = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/ListComponents',
    grpcWeb.MethodType.UNARY,
    building_management_pb.ListComponentsRequest,
    building_management_pb.ListComponentsResponse,
    (request: building_management_pb.ListComponentsRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.ListComponentsResponse.deserializeBinary
  );

  listComponents(
    request: building_management_pb.ListComponentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.ListComponentsResponse>;

  listComponents(
    request: building_management_pb.ListComponentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.ListComponentsResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.ListComponentsResponse>;

  listComponents(
    request: building_management_pb.ListComponentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.ListComponentsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/ListComponents',
        request,
        metadata || {},
        this.methodDescriptorListComponents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/ListComponents',
    request,
    metadata || {},
    this.methodDescriptorListComponents);
  }

  methodDescriptorListNotifications = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/ListNotifications',
    grpcWeb.MethodType.UNARY,
    building_management_pb.ListNotificationsRequest,
    building_management_pb.ListNotificationsResponse,
    (request: building_management_pb.ListNotificationsRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.ListNotificationsResponse.deserializeBinary
  );

  listNotifications(
    request: building_management_pb.ListNotificationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.ListNotificationsResponse>;

  listNotifications(
    request: building_management_pb.ListNotificationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.ListNotificationsResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.ListNotificationsResponse>;

  listNotifications(
    request: building_management_pb.ListNotificationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.ListNotificationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/ListNotifications',
        request,
        metadata || {},
        this.methodDescriptorListNotifications,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/ListNotifications',
    request,
    metadata || {},
    this.methodDescriptorListNotifications);
  }

  methodDescriptorListFavoriteBuildings = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/ListFavoriteBuildings',
    grpcWeb.MethodType.UNARY,
    building_management_pb.ListFavoriteBuildingsRequest,
    building_management_pb.ListFavoriteBuildingsResponse,
    (request: building_management_pb.ListFavoriteBuildingsRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.ListFavoriteBuildingsResponse.deserializeBinary
  );

  listFavoriteBuildings(
    request: building_management_pb.ListFavoriteBuildingsRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.ListFavoriteBuildingsResponse>;

  listFavoriteBuildings(
    request: building_management_pb.ListFavoriteBuildingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.ListFavoriteBuildingsResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.ListFavoriteBuildingsResponse>;

  listFavoriteBuildings(
    request: building_management_pb.ListFavoriteBuildingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.ListFavoriteBuildingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/ListFavoriteBuildings',
        request,
        metadata || {},
        this.methodDescriptorListFavoriteBuildings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/ListFavoriteBuildings',
    request,
    metadata || {},
    this.methodDescriptorListFavoriteBuildings);
  }

  methodDescriptorListFavoriteRooms = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/ListFavoriteRooms',
    grpcWeb.MethodType.UNARY,
    building_management_pb.ListFavoriteRoomsRequest,
    building_management_pb.ListFavoriteRoomsResponse,
    (request: building_management_pb.ListFavoriteRoomsRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.ListFavoriteRoomsResponse.deserializeBinary
  );

  listFavoriteRooms(
    request: building_management_pb.ListFavoriteRoomsRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.ListFavoriteRoomsResponse>;

  listFavoriteRooms(
    request: building_management_pb.ListFavoriteRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.ListFavoriteRoomsResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.ListFavoriteRoomsResponse>;

  listFavoriteRooms(
    request: building_management_pb.ListFavoriteRoomsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.ListFavoriteRoomsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/ListFavoriteRooms',
        request,
        metadata || {},
        this.methodDescriptorListFavoriteRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/ListFavoriteRooms',
    request,
    metadata || {},
    this.methodDescriptorListFavoriteRooms);
  }

  methodDescriptorListFavoriteComponents = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/ListFavoriteComponents',
    grpcWeb.MethodType.UNARY,
    building_management_pb.ListFavoriteComponentsRequest,
    building_management_pb.ListFavoriteComponentsResponse,
    (request: building_management_pb.ListFavoriteComponentsRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.ListFavoriteComponentsResponse.deserializeBinary
  );

  listFavoriteComponents(
    request: building_management_pb.ListFavoriteComponentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.ListFavoriteComponentsResponse>;

  listFavoriteComponents(
    request: building_management_pb.ListFavoriteComponentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.ListFavoriteComponentsResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.ListFavoriteComponentsResponse>;

  listFavoriteComponents(
    request: building_management_pb.ListFavoriteComponentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.ListFavoriteComponentsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/ListFavoriteComponents',
        request,
        metadata || {},
        this.methodDescriptorListFavoriteComponents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/ListFavoriteComponents',
    request,
    metadata || {},
    this.methodDescriptorListFavoriteComponents);
  }

  methodDescriptorCreateBuilding = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/CreateBuilding',
    grpcWeb.MethodType.UNARY,
    building_management_pb.CreateBuildingRequest,
    building_management_pb.CreateBuildingResponse,
    (request: building_management_pb.CreateBuildingRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.CreateBuildingResponse.deserializeBinary
  );

  createBuilding(
    request: building_management_pb.CreateBuildingRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.CreateBuildingResponse>;

  createBuilding(
    request: building_management_pb.CreateBuildingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.CreateBuildingResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.CreateBuildingResponse>;

  createBuilding(
    request: building_management_pb.CreateBuildingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.CreateBuildingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/CreateBuilding',
        request,
        metadata || {},
        this.methodDescriptorCreateBuilding,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/CreateBuilding',
    request,
    metadata || {},
    this.methodDescriptorCreateBuilding);
  }

  methodDescriptorCreateRoom = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/CreateRoom',
    grpcWeb.MethodType.UNARY,
    building_management_pb.CreateRoomRequest,
    building_management_pb.CreateRoomResponse,
    (request: building_management_pb.CreateRoomRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.CreateRoomResponse.deserializeBinary
  );

  createRoom(
    request: building_management_pb.CreateRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.CreateRoomResponse>;

  createRoom(
    request: building_management_pb.CreateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.CreateRoomResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.CreateRoomResponse>;

  createRoom(
    request: building_management_pb.CreateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.CreateRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/CreateRoom',
        request,
        metadata || {},
        this.methodDescriptorCreateRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/CreateRoom',
    request,
    metadata || {},
    this.methodDescriptorCreateRoom);
  }

  methodDescriptorCreateComponent = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/CreateComponent',
    grpcWeb.MethodType.UNARY,
    building_management_pb.CreateComponentRequest,
    building_management_pb.CreateComponentResponse,
    (request: building_management_pb.CreateComponentRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.CreateComponentResponse.deserializeBinary
  );

  createComponent(
    request: building_management_pb.CreateComponentRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.CreateComponentResponse>;

  createComponent(
    request: building_management_pb.CreateComponentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.CreateComponentResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.CreateComponentResponse>;

  createComponent(
    request: building_management_pb.CreateComponentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.CreateComponentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/CreateComponent',
        request,
        metadata || {},
        this.methodDescriptorCreateComponent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/CreateComponent',
    request,
    metadata || {},
    this.methodDescriptorCreateComponent);
  }

  methodDescriptorCreateFavorite = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/CreateFavorite',
    grpcWeb.MethodType.UNARY,
    building_management_pb.CreateFavoriteRequest,
    building_management_pb.CreateFavoriteResponse,
    (request: building_management_pb.CreateFavoriteRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.CreateFavoriteResponse.deserializeBinary
  );

  createFavorite(
    request: building_management_pb.CreateFavoriteRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.CreateFavoriteResponse>;

  createFavorite(
    request: building_management_pb.CreateFavoriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.CreateFavoriteResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.CreateFavoriteResponse>;

  createFavorite(
    request: building_management_pb.CreateFavoriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.CreateFavoriteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/CreateFavorite',
        request,
        metadata || {},
        this.methodDescriptorCreateFavorite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/CreateFavorite',
    request,
    metadata || {},
    this.methodDescriptorCreateFavorite);
  }

  methodDescriptorUpdateBuilding = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/UpdateBuilding',
    grpcWeb.MethodType.UNARY,
    building_management_pb.UpdateBuildingRequest,
    building_management_pb.UpdateBuildingResponse,
    (request: building_management_pb.UpdateBuildingRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.UpdateBuildingResponse.deserializeBinary
  );

  updateBuilding(
    request: building_management_pb.UpdateBuildingRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.UpdateBuildingResponse>;

  updateBuilding(
    request: building_management_pb.UpdateBuildingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.UpdateBuildingResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.UpdateBuildingResponse>;

  updateBuilding(
    request: building_management_pb.UpdateBuildingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.UpdateBuildingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/UpdateBuilding',
        request,
        metadata || {},
        this.methodDescriptorUpdateBuilding,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/UpdateBuilding',
    request,
    metadata || {},
    this.methodDescriptorUpdateBuilding);
  }

  methodDescriptorUpdateRoom = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/UpdateRoom',
    grpcWeb.MethodType.UNARY,
    building_management_pb.UpdateRoomRequest,
    building_management_pb.UpdateRoomResponse,
    (request: building_management_pb.UpdateRoomRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.UpdateRoomResponse.deserializeBinary
  );

  updateRoom(
    request: building_management_pb.UpdateRoomRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.UpdateRoomResponse>;

  updateRoom(
    request: building_management_pb.UpdateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.UpdateRoomResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.UpdateRoomResponse>;

  updateRoom(
    request: building_management_pb.UpdateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.UpdateRoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/UpdateRoom',
        request,
        metadata || {},
        this.methodDescriptorUpdateRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/UpdateRoom',
    request,
    metadata || {},
    this.methodDescriptorUpdateRoom);
  }

  methodDescriptorUpdateComponent = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/UpdateComponent',
    grpcWeb.MethodType.UNARY,
    building_management_pb.UpdateComponentRequest,
    building_management_pb.UpdateComponentResponse,
    (request: building_management_pb.UpdateComponentRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.UpdateComponentResponse.deserializeBinary
  );

  updateComponent(
    request: building_management_pb.UpdateComponentRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.UpdateComponentResponse>;

  updateComponent(
    request: building_management_pb.UpdateComponentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.UpdateComponentResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.UpdateComponentResponse>;

  updateComponent(
    request: building_management_pb.UpdateComponentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.UpdateComponentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/UpdateComponent',
        request,
        metadata || {},
        this.methodDescriptorUpdateComponent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/UpdateComponent',
    request,
    metadata || {},
    this.methodDescriptorUpdateComponent);
  }

  methodDescriptorRemoveBuilding = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/RemoveBuilding',
    grpcWeb.MethodType.UNARY,
    building_management_pb.RemoveRequest,
    building_management_pb.RemoveResponse,
    (request: building_management_pb.RemoveRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.RemoveResponse.deserializeBinary
  );

  removeBuilding(
    request: building_management_pb.RemoveRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.RemoveResponse>;

  removeBuilding(
    request: building_management_pb.RemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.RemoveResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.RemoveResponse>;

  removeBuilding(
    request: building_management_pb.RemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.RemoveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/RemoveBuilding',
        request,
        metadata || {},
        this.methodDescriptorRemoveBuilding,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/RemoveBuilding',
    request,
    metadata || {},
    this.methodDescriptorRemoveBuilding);
  }

  methodDescriptorRemoveRoom = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/RemoveRoom',
    grpcWeb.MethodType.UNARY,
    building_management_pb.RemoveRequest,
    building_management_pb.RemoveResponse,
    (request: building_management_pb.RemoveRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.RemoveResponse.deserializeBinary
  );

  removeRoom(
    request: building_management_pb.RemoveRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.RemoveResponse>;

  removeRoom(
    request: building_management_pb.RemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.RemoveResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.RemoveResponse>;

  removeRoom(
    request: building_management_pb.RemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.RemoveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/RemoveRoom',
        request,
        metadata || {},
        this.methodDescriptorRemoveRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/RemoveRoom',
    request,
    metadata || {},
    this.methodDescriptorRemoveRoom);
  }

  methodDescriptorRemoveComponent = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/RemoveComponent',
    grpcWeb.MethodType.UNARY,
    building_management_pb.RemoveRequest,
    building_management_pb.RemoveResponse,
    (request: building_management_pb.RemoveRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.RemoveResponse.deserializeBinary
  );

  removeComponent(
    request: building_management_pb.RemoveRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.RemoveResponse>;

  removeComponent(
    request: building_management_pb.RemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.RemoveResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.RemoveResponse>;

  removeComponent(
    request: building_management_pb.RemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.RemoveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/RemoveComponent',
        request,
        metadata || {},
        this.methodDescriptorRemoveComponent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/RemoveComponent',
    request,
    metadata || {},
    this.methodDescriptorRemoveComponent);
  }

  methodDescriptorRemoveFavorite = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.BuildingManagement/RemoveFavorite',
    grpcWeb.MethodType.UNARY,
    building_management_pb.RemoveFavoriteRequest,
    building_management_pb.RemoveResponse,
    (request: building_management_pb.RemoveFavoriteRequest) => {
      return request.serializeBinary();
    },
    building_management_pb.RemoveResponse.deserializeBinary
  );

  removeFavorite(
    request: building_management_pb.RemoveFavoriteRequest,
    metadata: grpcWeb.Metadata | null): Promise<building_management_pb.RemoveResponse>;

  removeFavorite(
    request: building_management_pb.RemoveFavoriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: building_management_pb.RemoveResponse) => void): grpcWeb.ClientReadableStream<building_management_pb.RemoveResponse>;

  removeFavorite(
    request: building_management_pb.RemoveFavoriteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: building_management_pb.RemoveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.BuildingManagement/RemoveFavorite',
        request,
        metadata || {},
        this.methodDescriptorRemoveFavorite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.BuildingManagement/RemoveFavorite',
    request,
    metadata || {},
    this.methodDescriptorRemoveFavorite);
  }

}

