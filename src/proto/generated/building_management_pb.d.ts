// package: edu.kit.tm.cm.proto
// file: building_management.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class GetBuildingRequest extends jspb.Message {
  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuildingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuildingRequest): GetBuildingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBuildingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuildingRequest;
  static deserializeBinaryFromReader(message: GetBuildingRequest, reader: jspb.BinaryReader): GetBuildingRequest;
}

export namespace GetBuildingRequest {
  export type AsObject = {
    identificationNumber: string,
  }
}

export class GetBuildingResponse extends jspb.Message {
  hasGrpcBuilding(): boolean;
  clearGrpcBuilding(): void;
  getGrpcBuilding(): GrpcBuilding | undefined;
  setGrpcBuilding(value?: GrpcBuilding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBuildingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBuildingResponse): GetBuildingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBuildingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBuildingResponse;
  static deserializeBinaryFromReader(message: GetBuildingResponse, reader: jspb.BinaryReader): GetBuildingResponse;
}

export namespace GetBuildingResponse {
  export type AsObject = {
    grpcBuilding?: GrpcBuilding.AsObject,
  }
}

export class ListBuildingsRequest extends jspb.Message {
  hasGrpcFilterValueSelection(): boolean;
  clearGrpcFilterValueSelection(): void;
  getGrpcFilterValueSelection(): GrpcFilterValueSelection | undefined;
  setGrpcFilterValueSelection(value?: GrpcFilterValueSelection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildingsRequest): ListBuildingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBuildingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildingsRequest;
  static deserializeBinaryFromReader(message: ListBuildingsRequest, reader: jspb.BinaryReader): ListBuildingsRequest;
}

export namespace ListBuildingsRequest {
  export type AsObject = {
    grpcFilterValueSelection?: GrpcFilterValueSelection.AsObject,
  }
}

export class ListBuildingsResponse extends jspb.Message {
  clearBuildingsList(): void;
  getBuildingsList(): Array<GrpcBuilding>;
  setBuildingsList(value: Array<GrpcBuilding>): void;
  addBuildings(value?: GrpcBuilding, index?: number): GrpcBuilding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuildingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuildingsResponse): ListBuildingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBuildingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuildingsResponse;
  static deserializeBinaryFromReader(message: ListBuildingsResponse, reader: jspb.BinaryReader): ListBuildingsResponse;
}

export namespace ListBuildingsResponse {
  export type AsObject = {
    buildingsList: Array<GrpcBuilding.AsObject>,
  }
}

export class GetRoomRequest extends jspb.Message {
  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomRequest): GetRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomRequest;
  static deserializeBinaryFromReader(message: GetRoomRequest, reader: jspb.BinaryReader): GetRoomRequest;
}

export namespace GetRoomRequest {
  export type AsObject = {
    identificationNumber: string,
  }
}

export class GetRoomResponse extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): GrpcRoom | undefined;
  setRoom(value?: GrpcRoom): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomResponse): GetRoomResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomResponse;
  static deserializeBinaryFromReader(message: GetRoomResponse, reader: jspb.BinaryReader): GetRoomResponse;
}

export namespace GetRoomResponse {
  export type AsObject = {
    room?: GrpcRoom.AsObject,
  }
}

export class GetComponentRequest extends jspb.Message {
  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetComponentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetComponentRequest): GetComponentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetComponentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetComponentRequest;
  static deserializeBinaryFromReader(message: GetComponentRequest, reader: jspb.BinaryReader): GetComponentRequest;
}

export namespace GetComponentRequest {
  export type AsObject = {
    identificationNumber: string,
  }
}

export class GetComponentResponse extends jspb.Message {
  hasComponent(): boolean;
  clearComponent(): void;
  getComponent(): GrpcComponent | undefined;
  setComponent(value?: GrpcComponent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetComponentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetComponentResponse): GetComponentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetComponentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetComponentResponse;
  static deserializeBinaryFromReader(message: GetComponentResponse, reader: jspb.BinaryReader): GetComponentResponse;
}

export namespace GetComponentResponse {
  export type AsObject = {
    component?: GrpcComponent.AsObject,
  }
}

export class ListRoomsRequest extends jspb.Message {
  hasGrpcFilterValueSelection(): boolean;
  clearGrpcFilterValueSelection(): void;
  getGrpcFilterValueSelection(): GrpcFilterValueSelection | undefined;
  setGrpcFilterValueSelection(value?: GrpcFilterValueSelection): void;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsRequest): ListRoomsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsRequest;
  static deserializeBinaryFromReader(message: ListRoomsRequest, reader: jspb.BinaryReader): ListRoomsRequest;
}

export namespace ListRoomsRequest {
  export type AsObject = {
    grpcFilterValueSelection?: GrpcFilterValueSelection.AsObject,
    identificationNumber: string,
  }
}

export class ListRoomsResponse extends jspb.Message {
  clearRoomsList(): void;
  getRoomsList(): Array<GrpcRoom>;
  setRoomsList(value: Array<GrpcRoom>): void;
  addRooms(value?: GrpcRoom, index?: number): GrpcRoom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRoomsResponse): ListRoomsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRoomsResponse;
  static deserializeBinaryFromReader(message: ListRoomsResponse, reader: jspb.BinaryReader): ListRoomsResponse;
}

export namespace ListRoomsResponse {
  export type AsObject = {
    roomsList: Array<GrpcRoom.AsObject>,
  }
}

export class ListComponentsRequest extends jspb.Message {
  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListComponentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListComponentsRequest): ListComponentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListComponentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListComponentsRequest;
  static deserializeBinaryFromReader(message: ListComponentsRequest, reader: jspb.BinaryReader): ListComponentsRequest;
}

export namespace ListComponentsRequest {
  export type AsObject = {
    identificationNumber: string,
  }
}

export class ListComponentsResponse extends jspb.Message {
  clearComponentsList(): void;
  getComponentsList(): Array<GrpcComponent>;
  setComponentsList(value: Array<GrpcComponent>): void;
  addComponents(value?: GrpcComponent, index?: number): GrpcComponent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListComponentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListComponentsResponse): ListComponentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListComponentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListComponentsResponse;
  static deserializeBinaryFromReader(message: ListComponentsResponse, reader: jspb.BinaryReader): ListComponentsResponse;
}

export namespace ListComponentsResponse {
  export type AsObject = {
    componentsList: Array<GrpcComponent.AsObject>,
  }
}

export class ListFavoriteBuildingsRequest extends jspb.Message {
  hasGrpcFilterValueSelection(): boolean;
  clearGrpcFilterValueSelection(): void;
  getGrpcFilterValueSelection(): GrpcFilterValueSelection | undefined;
  setGrpcFilterValueSelection(value?: GrpcFilterValueSelection): void;

  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFavoriteBuildingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFavoriteBuildingsRequest): ListFavoriteBuildingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFavoriteBuildingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFavoriteBuildingsRequest;
  static deserializeBinaryFromReader(message: ListFavoriteBuildingsRequest, reader: jspb.BinaryReader): ListFavoriteBuildingsRequest;
}

export namespace ListFavoriteBuildingsRequest {
  export type AsObject = {
    grpcFilterValueSelection?: GrpcFilterValueSelection.AsObject,
    owner: string,
  }
}

export class ListFavoriteRoomsRequest extends jspb.Message {
  hasGrpcFilterValueSelection(): boolean;
  clearGrpcFilterValueSelection(): void;
  getGrpcFilterValueSelection(): GrpcFilterValueSelection | undefined;
  setGrpcFilterValueSelection(value?: GrpcFilterValueSelection): void;

  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFavoriteRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFavoriteRoomsRequest): ListFavoriteRoomsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFavoriteRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFavoriteRoomsRequest;
  static deserializeBinaryFromReader(message: ListFavoriteRoomsRequest, reader: jspb.BinaryReader): ListFavoriteRoomsRequest;
}

export namespace ListFavoriteRoomsRequest {
  export type AsObject = {
    grpcFilterValueSelection?: GrpcFilterValueSelection.AsObject,
    owner: string,
  }
}

export class ListFavoriteComponentsRequest extends jspb.Message {
  hasGrpcFilterValueSelection(): boolean;
  clearGrpcFilterValueSelection(): void;
  getGrpcFilterValueSelection(): GrpcFilterValueSelection | undefined;
  setGrpcFilterValueSelection(value?: GrpcFilterValueSelection): void;

  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFavoriteComponentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFavoriteComponentsRequest): ListFavoriteComponentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFavoriteComponentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFavoriteComponentsRequest;
  static deserializeBinaryFromReader(message: ListFavoriteComponentsRequest, reader: jspb.BinaryReader): ListFavoriteComponentsRequest;
}

export namespace ListFavoriteComponentsRequest {
  export type AsObject = {
    grpcFilterValueSelection?: GrpcFilterValueSelection.AsObject,
    owner: string,
  }
}

export class ListFavoriteBuildingsResponse extends jspb.Message {
  clearBuildingsList(): void;
  getBuildingsList(): Array<GrpcBuilding>;
  setBuildingsList(value: Array<GrpcBuilding>): void;
  addBuildings(value?: GrpcBuilding, index?: number): GrpcBuilding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFavoriteBuildingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFavoriteBuildingsResponse): ListFavoriteBuildingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFavoriteBuildingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFavoriteBuildingsResponse;
  static deserializeBinaryFromReader(message: ListFavoriteBuildingsResponse, reader: jspb.BinaryReader): ListFavoriteBuildingsResponse;
}

export namespace ListFavoriteBuildingsResponse {
  export type AsObject = {
    buildingsList: Array<GrpcBuilding.AsObject>,
  }
}

export class ListFavoriteRoomsResponse extends jspb.Message {
  clearRoomsList(): void;
  getRoomsList(): Array<GrpcRoom>;
  setRoomsList(value: Array<GrpcRoom>): void;
  addRooms(value?: GrpcRoom, index?: number): GrpcRoom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFavoriteRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFavoriteRoomsResponse): ListFavoriteRoomsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFavoriteRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFavoriteRoomsResponse;
  static deserializeBinaryFromReader(message: ListFavoriteRoomsResponse, reader: jspb.BinaryReader): ListFavoriteRoomsResponse;
}

export namespace ListFavoriteRoomsResponse {
  export type AsObject = {
    roomsList: Array<GrpcRoom.AsObject>,
  }
}

export class ListFavoriteComponentsResponse extends jspb.Message {
  clearComponentsList(): void;
  getComponentsList(): Array<GrpcComponent>;
  setComponentsList(value: Array<GrpcComponent>): void;
  addComponents(value?: GrpcComponent, index?: number): GrpcComponent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFavoriteComponentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFavoriteComponentsResponse): ListFavoriteComponentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFavoriteComponentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFavoriteComponentsResponse;
  static deserializeBinaryFromReader(message: ListFavoriteComponentsResponse, reader: jspb.BinaryReader): ListFavoriteComponentsResponse;
}

export namespace ListFavoriteComponentsResponse {
  export type AsObject = {
    componentsList: Array<GrpcComponent.AsObject>,
  }
}

export class ListNotificationsRequest extends jspb.Message {
  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationsRequest): ListNotificationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationsRequest;
  static deserializeBinaryFromReader(message: ListNotificationsRequest, reader: jspb.BinaryReader): ListNotificationsRequest;
}

export namespace ListNotificationsRequest {
  export type AsObject = {
    identificationNumber: string,
  }
}

export class ListNotificationsResponse extends jspb.Message {
  clearNotificationsList(): void;
  getNotificationsList(): Array<GrpcNotification>;
  setNotificationsList(value: Array<GrpcNotification>): void;
  addNotifications(value?: GrpcNotification, index?: number): GrpcNotification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationsResponse): ListNotificationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNotificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationsResponse;
  static deserializeBinaryFromReader(message: ListNotificationsResponse, reader: jspb.BinaryReader): ListNotificationsResponse;
}

export namespace ListNotificationsResponse {
  export type AsObject = {
    notificationsList: Array<GrpcNotification.AsObject>,
  }
}

export class CreateBuildingRequest extends jspb.Message {
  getBuildingName(): string;
  setBuildingName(value: string): void;

  getBuildingNumber(): string;
  setBuildingNumber(value: string): void;

  getCampusLocation(): GrpcCampusLocationMap[keyof GrpcCampusLocationMap];
  setCampusLocation(value: GrpcCampusLocationMap[keyof GrpcCampusLocationMap]): void;

  hasGrpcGeographicalLocation(): boolean;
  clearGrpcGeographicalLocation(): void;
  getGrpcGeographicalLocation(): GrpcGeographicalLocation | undefined;
  setGrpcGeographicalLocation(value?: GrpcGeographicalLocation): void;

  hasGrpcFloors(): boolean;
  clearGrpcFloors(): void;
  getGrpcFloors(): GrpcFloors | undefined;
  setGrpcFloors(value?: GrpcFloors): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBuildingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBuildingRequest): CreateBuildingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBuildingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBuildingRequest;
  static deserializeBinaryFromReader(message: CreateBuildingRequest, reader: jspb.BinaryReader): CreateBuildingRequest;
}

export namespace CreateBuildingRequest {
  export type AsObject = {
    buildingName: string,
    buildingNumber: string,
    campusLocation: GrpcCampusLocationMap[keyof GrpcCampusLocationMap],
    grpcGeographicalLocation?: GrpcGeographicalLocation.AsObject,
    grpcFloors?: GrpcFloors.AsObject,
  }
}

export class CreateBuildingResponse extends jspb.Message {
  hasBuilding(): boolean;
  clearBuilding(): void;
  getBuilding(): GrpcBuilding | undefined;
  setBuilding(value?: GrpcBuilding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBuildingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBuildingResponse): CreateBuildingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateBuildingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBuildingResponse;
  static deserializeBinaryFromReader(message: CreateBuildingResponse, reader: jspb.BinaryReader): CreateBuildingResponse;
}

export namespace CreateBuildingResponse {
  export type AsObject = {
    building?: GrpcBuilding.AsObject,
  }
}

export class CreateRoomRequest extends jspb.Message {
  getRoomName(): string;
  setRoomName(value: string): void;

  getRoomNumber(): string;
  setRoomNumber(value: string): void;

  getFloor(): number;
  setFloor(value: number): void;

  getParentIdentificationNumber(): string;
  setParentIdentificationNumber(value: string): void;

  getRoomType(): GrpcRoomTypeMap[keyof GrpcRoomTypeMap];
  setRoomType(value: GrpcRoomTypeMap[keyof GrpcRoomTypeMap]): void;

  hasGrpcGeographicalLocation(): boolean;
  clearGrpcGeographicalLocation(): void;
  getGrpcGeographicalLocation(): GrpcGeographicalLocation | undefined;
  setGrpcGeographicalLocation(value?: GrpcGeographicalLocation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomRequest): CreateRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomRequest;
  static deserializeBinaryFromReader(message: CreateRoomRequest, reader: jspb.BinaryReader): CreateRoomRequest;
}

export namespace CreateRoomRequest {
  export type AsObject = {
    roomName: string,
    roomNumber: string,
    floor: number,
    parentIdentificationNumber: string,
    roomType: GrpcRoomTypeMap[keyof GrpcRoomTypeMap],
    grpcGeographicalLocation?: GrpcGeographicalLocation.AsObject,
  }
}

export class CreateRoomResponse extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): GrpcRoom | undefined;
  setRoom(value?: GrpcRoom): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoomResponse): CreateRoomResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoomResponse;
  static deserializeBinaryFromReader(message: CreateRoomResponse, reader: jspb.BinaryReader): CreateRoomResponse;
}

export namespace CreateRoomResponse {
  export type AsObject = {
    room?: GrpcRoom.AsObject,
  }
}

export class CreateComponentRequest extends jspb.Message {
  getComponentDescription(): string;
  setComponentDescription(value: string): void;

  getComponentType(): GrpcComponentTypeMap[keyof GrpcComponentTypeMap];
  setComponentType(value: GrpcComponentTypeMap[keyof GrpcComponentTypeMap]): void;

  hasGrpcGeographicalLocation(): boolean;
  clearGrpcGeographicalLocation(): void;
  getGrpcGeographicalLocation(): GrpcGeographicalLocation | undefined;
  setGrpcGeographicalLocation(value?: GrpcGeographicalLocation): void;

  getParentIdentificationNumber(): string;
  setParentIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateComponentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateComponentRequest): CreateComponentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateComponentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateComponentRequest;
  static deserializeBinaryFromReader(message: CreateComponentRequest, reader: jspb.BinaryReader): CreateComponentRequest;
}

export namespace CreateComponentRequest {
  export type AsObject = {
    componentDescription: string,
    componentType: GrpcComponentTypeMap[keyof GrpcComponentTypeMap],
    grpcGeographicalLocation?: GrpcGeographicalLocation.AsObject,
    parentIdentificationNumber: string,
  }
}

export class CreateComponentResponse extends jspb.Message {
  hasComponent(): boolean;
  clearComponent(): void;
  getComponent(): GrpcComponent | undefined;
  setComponent(value?: GrpcComponent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateComponentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateComponentResponse): CreateComponentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateComponentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateComponentResponse;
  static deserializeBinaryFromReader(message: CreateComponentResponse, reader: jspb.BinaryReader): CreateComponentResponse;
}

export namespace CreateComponentResponse {
  export type AsObject = {
    component?: GrpcComponent.AsObject,
  }
}

export class CreateFavoriteRequest extends jspb.Message {
  getReferenceIdentificationNumber(): string;
  setReferenceIdentificationNumber(value: string): void;

  getOwner(): string;
  setOwner(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFavoriteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFavoriteRequest): CreateFavoriteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFavoriteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFavoriteRequest;
  static deserializeBinaryFromReader(message: CreateFavoriteRequest, reader: jspb.BinaryReader): CreateFavoriteRequest;
}

export namespace CreateFavoriteRequest {
  export type AsObject = {
    referenceIdentificationNumber: string,
    owner: string,
  }
}

export class CreateFavoriteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFavoriteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFavoriteResponse): CreateFavoriteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFavoriteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFavoriteResponse;
  static deserializeBinaryFromReader(message: CreateFavoriteResponse, reader: jspb.BinaryReader): CreateFavoriteResponse;
}

export namespace CreateFavoriteResponse {
  export type AsObject = {
  }
}

export class UpdateBuildingRequest extends jspb.Message {
  getBuildingName(): string;
  setBuildingName(value: string): void;

  getBuildingNumber(): string;
  setBuildingNumber(value: string): void;

  getCampusLocation(): GrpcCampusLocationMap[keyof GrpcCampusLocationMap];
  setCampusLocation(value: GrpcCampusLocationMap[keyof GrpcCampusLocationMap]): void;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  hasGrpcGeographicalLocation(): boolean;
  clearGrpcGeographicalLocation(): void;
  getGrpcGeographicalLocation(): GrpcGeographicalLocation | undefined;
  setGrpcGeographicalLocation(value?: GrpcGeographicalLocation): void;

  hasGrpcFloors(): boolean;
  clearGrpcFloors(): void;
  getGrpcFloors(): GrpcFloors | undefined;
  setGrpcFloors(value?: GrpcFloors): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBuildingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBuildingRequest): UpdateBuildingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBuildingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBuildingRequest;
  static deserializeBinaryFromReader(message: UpdateBuildingRequest, reader: jspb.BinaryReader): UpdateBuildingRequest;
}

export namespace UpdateBuildingRequest {
  export type AsObject = {
    buildingName: string,
    buildingNumber: string,
    campusLocation: GrpcCampusLocationMap[keyof GrpcCampusLocationMap],
    identificationNumber: string,
    grpcGeographicalLocation?: GrpcGeographicalLocation.AsObject,
    grpcFloors?: GrpcFloors.AsObject,
  }
}

export class UpdateBuildingResponse extends jspb.Message {
  hasBuilding(): boolean;
  clearBuilding(): void;
  getBuilding(): GrpcBuilding | undefined;
  setBuilding(value?: GrpcBuilding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBuildingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBuildingResponse): UpdateBuildingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateBuildingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBuildingResponse;
  static deserializeBinaryFromReader(message: UpdateBuildingResponse, reader: jspb.BinaryReader): UpdateBuildingResponse;
}

export namespace UpdateBuildingResponse {
  export type AsObject = {
    building?: GrpcBuilding.AsObject,
  }
}

export class UpdateRoomRequest extends jspb.Message {
  getRoomName(): string;
  setRoomName(value: string): void;

  getRoomNumber(): string;
  setRoomNumber(value: string): void;

  getFloor(): number;
  setFloor(value: number): void;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  getParentIdentificationNumber(): string;
  setParentIdentificationNumber(value: string): void;

  getRoomType(): GrpcRoomTypeMap[keyof GrpcRoomTypeMap];
  setRoomType(value: GrpcRoomTypeMap[keyof GrpcRoomTypeMap]): void;

  hasGrpcGeographicalLocation(): boolean;
  clearGrpcGeographicalLocation(): void;
  getGrpcGeographicalLocation(): GrpcGeographicalLocation | undefined;
  setGrpcGeographicalLocation(value?: GrpcGeographicalLocation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomRequest): UpdateRoomRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomRequest;
  static deserializeBinaryFromReader(message: UpdateRoomRequest, reader: jspb.BinaryReader): UpdateRoomRequest;
}

export namespace UpdateRoomRequest {
  export type AsObject = {
    roomName: string,
    roomNumber: string,
    floor: number,
    identificationNumber: string,
    parentIdentificationNumber: string,
    roomType: GrpcRoomTypeMap[keyof GrpcRoomTypeMap],
    grpcGeographicalLocation?: GrpcGeographicalLocation.AsObject,
  }
}

export class UpdateRoomResponse extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): GrpcRoom | undefined;
  setRoom(value?: GrpcRoom): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoomResponse): UpdateRoomResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoomResponse;
  static deserializeBinaryFromReader(message: UpdateRoomResponse, reader: jspb.BinaryReader): UpdateRoomResponse;
}

export namespace UpdateRoomResponse {
  export type AsObject = {
    room?: GrpcRoom.AsObject,
  }
}

export class UpdateComponentRequest extends jspb.Message {
  getComponentDescription(): string;
  setComponentDescription(value: string): void;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  getParentIdentificationNumber(): string;
  setParentIdentificationNumber(value: string): void;

  getComponentType(): GrpcComponentTypeMap[keyof GrpcComponentTypeMap];
  setComponentType(value: GrpcComponentTypeMap[keyof GrpcComponentTypeMap]): void;

  hasGrpcGeographicalLocation(): boolean;
  clearGrpcGeographicalLocation(): void;
  getGrpcGeographicalLocation(): GrpcGeographicalLocation | undefined;
  setGrpcGeographicalLocation(value?: GrpcGeographicalLocation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateComponentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateComponentRequest): UpdateComponentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateComponentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateComponentRequest;
  static deserializeBinaryFromReader(message: UpdateComponentRequest, reader: jspb.BinaryReader): UpdateComponentRequest;
}

export namespace UpdateComponentRequest {
  export type AsObject = {
    componentDescription: string,
    identificationNumber: string,
    parentIdentificationNumber: string,
    componentType: GrpcComponentTypeMap[keyof GrpcComponentTypeMap],
    grpcGeographicalLocation?: GrpcGeographicalLocation.AsObject,
  }
}

export class UpdateComponentResponse extends jspb.Message {
  hasComponent(): boolean;
  clearComponent(): void;
  getComponent(): GrpcComponent | undefined;
  setComponent(value?: GrpcComponent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateComponentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateComponentResponse): UpdateComponentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateComponentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateComponentResponse;
  static deserializeBinaryFromReader(message: UpdateComponentResponse, reader: jspb.BinaryReader): UpdateComponentResponse;
}

export namespace UpdateComponentResponse {
  export type AsObject = {
    component?: GrpcComponent.AsObject,
  }
}

export class RemoveRequest extends jspb.Message {
  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRequest): RemoveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRequest;
  static deserializeBinaryFromReader(message: RemoveRequest, reader: jspb.BinaryReader): RemoveRequest;
}

export namespace RemoveRequest {
  export type AsObject = {
    identificationNumber: string,
  }
}

export class RemoveResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveResponse): RemoveResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveResponse;
  static deserializeBinaryFromReader(message: RemoveResponse, reader: jspb.BinaryReader): RemoveResponse;
}

export namespace RemoveResponse {
  export type AsObject = {
  }
}

export class GrpcNotification extends jspb.Message {
  hasCreationTime(): boolean;
  clearCreationTime(): void;
  getCreationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  getParentIdentificationNumber(): string;
  setParentIdentificationNumber(value: string): void;

  getNotificationTitle(): string;
  setNotificationTitle(value: string): void;

  getNotificationDescription(): string;
  setNotificationDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcNotification.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcNotification): GrpcNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrpcNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcNotification;
  static deserializeBinaryFromReader(message: GrpcNotification, reader: jspb.BinaryReader): GrpcNotification;
}

export namespace GrpcNotification {
  export type AsObject = {
    creationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    identificationNumber: string,
    parentIdentificationNumber: string,
    notificationTitle: string,
    notificationDescription: string,
  }
}

export class GrpcRoom extends jspb.Message {
  getRoomName(): string;
  setRoomName(value: string): void;

  getRoomNumber(): string;
  setRoomNumber(value: string): void;

  getFloor(): number;
  setFloor(value: number): void;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  getParentIdentificationNumber(): string;
  setParentIdentificationNumber(value: string): void;

  getRoomType(): GrpcRoomTypeMap[keyof GrpcRoomTypeMap];
  setRoomType(value: GrpcRoomTypeMap[keyof GrpcRoomTypeMap]): void;

  hasGrpcGeographicalLocation(): boolean;
  clearGrpcGeographicalLocation(): void;
  getGrpcGeographicalLocation(): GrpcGeographicalLocation | undefined;
  setGrpcGeographicalLocation(value?: GrpcGeographicalLocation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcRoom.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcRoom): GrpcRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrpcRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcRoom;
  static deserializeBinaryFromReader(message: GrpcRoom, reader: jspb.BinaryReader): GrpcRoom;
}

export namespace GrpcRoom {
  export type AsObject = {
    roomName: string,
    roomNumber: string,
    floor: number,
    identificationNumber: string,
    parentIdentificationNumber: string,
    roomType: GrpcRoomTypeMap[keyof GrpcRoomTypeMap],
    grpcGeographicalLocation?: GrpcGeographicalLocation.AsObject,
  }
}

export class GrpcBuilding extends jspb.Message {
  getBuildingName(): string;
  setBuildingName(value: string): void;

  getBuildingNumber(): string;
  setBuildingNumber(value: string): void;

  getCampusLocation(): GrpcCampusLocationMap[keyof GrpcCampusLocationMap];
  setCampusLocation(value: GrpcCampusLocationMap[keyof GrpcCampusLocationMap]): void;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  hasGrpcGeographicalLocation(): boolean;
  clearGrpcGeographicalLocation(): void;
  getGrpcGeographicalLocation(): GrpcGeographicalLocation | undefined;
  setGrpcGeographicalLocation(value?: GrpcGeographicalLocation): void;

  hasGrpcFloors(): boolean;
  clearGrpcFloors(): void;
  getGrpcFloors(): GrpcFloors | undefined;
  setGrpcFloors(value?: GrpcFloors): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcBuilding.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcBuilding): GrpcBuilding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrpcBuilding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcBuilding;
  static deserializeBinaryFromReader(message: GrpcBuilding, reader: jspb.BinaryReader): GrpcBuilding;
}

export namespace GrpcBuilding {
  export type AsObject = {
    buildingName: string,
    buildingNumber: string,
    campusLocation: GrpcCampusLocationMap[keyof GrpcCampusLocationMap],
    identificationNumber: string,
    grpcGeographicalLocation?: GrpcGeographicalLocation.AsObject,
    grpcFloors?: GrpcFloors.AsObject,
  }
}

export class GrpcGeographicalLocation extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcGeographicalLocation.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcGeographicalLocation): GrpcGeographicalLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrpcGeographicalLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcGeographicalLocation;
  static deserializeBinaryFromReader(message: GrpcGeographicalLocation, reader: jspb.BinaryReader): GrpcGeographicalLocation;
}

export namespace GrpcGeographicalLocation {
  export type AsObject = {
    latitude: number,
    longitude: number,
  }
}

export class GrpcFloors extends jspb.Message {
  getLowestFloor(): number;
  setLowestFloor(value: number): void;

  getHighestFloor(): number;
  setHighestFloor(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcFloors.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcFloors): GrpcFloors.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrpcFloors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcFloors;
  static deserializeBinaryFromReader(message: GrpcFloors, reader: jspb.BinaryReader): GrpcFloors;
}

export namespace GrpcFloors {
  export type AsObject = {
    lowestFloor: number,
    highestFloor: number,
  }
}

export class GrpcComponent extends jspb.Message {
  getComponentDescription(): string;
  setComponentDescription(value: string): void;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  getParentIdentificationNumber(): string;
  setParentIdentificationNumber(value: string): void;

  getComponentType(): GrpcComponentTypeMap[keyof GrpcComponentTypeMap];
  setComponentType(value: GrpcComponentTypeMap[keyof GrpcComponentTypeMap]): void;

  hasGrpcGeographicalLocation(): boolean;
  clearGrpcGeographicalLocation(): void;
  getGrpcGeographicalLocation(): GrpcGeographicalLocation | undefined;
  setGrpcGeographicalLocation(value?: GrpcGeographicalLocation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcComponent.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcComponent): GrpcComponent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrpcComponent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcComponent;
  static deserializeBinaryFromReader(message: GrpcComponent, reader: jspb.BinaryReader): GrpcComponent;
}

export namespace GrpcComponent {
  export type AsObject = {
    componentDescription: string,
    identificationNumber: string,
    parentIdentificationNumber: string,
    componentType: GrpcComponentTypeMap[keyof GrpcComponentTypeMap],
    grpcGeographicalLocation?: GrpcGeographicalLocation.AsObject,
  }
}

export class GrpcFilterValueSelection extends jspb.Message {
  clearGrpcComponentTypesList(): void;
  getGrpcComponentTypesList(): Array<GrpcComponentTypeMap[keyof GrpcComponentTypeMap]>;
  setGrpcComponentTypesList(value: Array<GrpcComponentTypeMap[keyof GrpcComponentTypeMap]>): void;
  addGrpcComponentTypes(value: GrpcComponentTypeMap[keyof GrpcComponentTypeMap], index?: number): GrpcComponentTypeMap[keyof GrpcComponentTypeMap];

  clearGrpcRoomTypesList(): void;
  getGrpcRoomTypesList(): Array<GrpcRoomTypeMap[keyof GrpcRoomTypeMap]>;
  setGrpcRoomTypesList(value: Array<GrpcRoomTypeMap[keyof GrpcRoomTypeMap]>): void;
  addGrpcRoomTypes(value: GrpcRoomTypeMap[keyof GrpcRoomTypeMap], index?: number): GrpcRoomTypeMap[keyof GrpcRoomTypeMap];

  clearGrpcCampusLocationsList(): void;
  getGrpcCampusLocationsList(): Array<GrpcCampusLocationMap[keyof GrpcCampusLocationMap]>;
  setGrpcCampusLocationsList(value: Array<GrpcCampusLocationMap[keyof GrpcCampusLocationMap]>): void;
  addGrpcCampusLocations(value: GrpcCampusLocationMap[keyof GrpcCampusLocationMap], index?: number): GrpcCampusLocationMap[keyof GrpcCampusLocationMap];

  clearFloorsList(): void;
  getFloorsList(): Array<number>;
  setFloorsList(value: Array<number>): void;
  addFloors(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcFilterValueSelection.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcFilterValueSelection): GrpcFilterValueSelection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrpcFilterValueSelection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcFilterValueSelection;
  static deserializeBinaryFromReader(message: GrpcFilterValueSelection, reader: jspb.BinaryReader): GrpcFilterValueSelection;
}

export namespace GrpcFilterValueSelection {
  export type AsObject = {
    grpcComponentTypesList: Array<GrpcComponentTypeMap[keyof GrpcComponentTypeMap]>,
    grpcRoomTypesList: Array<GrpcRoomTypeMap[keyof GrpcRoomTypeMap]>,
    grpcCampusLocationsList: Array<GrpcCampusLocationMap[keyof GrpcCampusLocationMap]>,
    floorsList: Array<number>,
  }
}

export interface GrpcCampusLocationMap {
  UNKNOWN_CAMPUS_LOCATION: 0;
  NORTH_CAMPUS: 1;
  EAST_CAMPUS: 2;
  WEST_CAMPUS: 3;
  SOUTH_CAMPUS: 4;
}

export const GrpcCampusLocation: GrpcCampusLocationMap;

export interface GrpcRoomTypeMap {
  UNKNOWN_ROOM_TYPE: 0;
  RESTROOM: 1;
  RESTROOM_HANDICAPPED: 2;
  OFFICE: 3;
  LIBRARY: 4;
  SEMINAR_ROOM: 5;
  LECTURE_ROOM: 6;
  SPORTS: 7;
  CAFETERIA: 8;
}

export const GrpcRoomType: GrpcRoomTypeMap;

export interface GrpcComponentTypeMap {
  UNKNOWN_COMPONENT_TYPE: 0;
  ELEVATOR: 1;
  STAIRS: 2;
}

export const GrpcComponentType: GrpcComponentTypeMap;

