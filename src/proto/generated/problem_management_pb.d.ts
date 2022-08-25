// package: edu.kit.tm.cm.proto
// file: problem_management.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ListProblemsRequest extends jspb.Message {
  hasGrpcFilterValueSelection(): boolean;
  clearGrpcFilterValueSelection(): void;
  getGrpcFilterValueSelection(): GrpcFilterValueSelection | undefined;
  setGrpcFilterValueSelection(value?: GrpcFilterValueSelection): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProblemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProblemsRequest): ListProblemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProblemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProblemsRequest;
  static deserializeBinaryFromReader(message: ListProblemsRequest, reader: jspb.BinaryReader): ListProblemsRequest;
}

export namespace ListProblemsRequest {
  export type AsObject = {
    grpcFilterValueSelection?: GrpcFilterValueSelection.AsObject,
  }
}

export class ListProblemsResponse extends jspb.Message {
  clearProblemsList(): void;
  getProblemsList(): Array<GrpcProblem>;
  setProblemsList(value: Array<GrpcProblem>): void;
  addProblems(value?: GrpcProblem, index?: number): GrpcProblem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProblemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProblemsResponse): ListProblemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListProblemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProblemsResponse;
  static deserializeBinaryFromReader(message: ListProblemsResponse, reader: jspb.BinaryReader): ListProblemsResponse;
}

export namespace ListProblemsResponse {
  export type AsObject = {
    problemsList: Array<GrpcProblem.AsObject>,
  }
}

export class GetProblemRequest extends jspb.Message {
  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProblemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProblemRequest): GetProblemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProblemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProblemRequest;
  static deserializeBinaryFromReader(message: GetProblemRequest, reader: jspb.BinaryReader): GetProblemRequest;
}

export namespace GetProblemRequest {
  export type AsObject = {
    identificationNumber: string,
  }
}

export class GetProblemResponse extends jspb.Message {
  hasProblem(): boolean;
  clearProblem(): void;
  getProblem(): GrpcProblem | undefined;
  setProblem(value?: GrpcProblem): void;

  clearPossibleStateOperationsList(): void;
  getPossibleStateOperationsList(): Array<GrpcStateOperationMap[keyof GrpcStateOperationMap]>;
  setPossibleStateOperationsList(value: Array<GrpcStateOperationMap[keyof GrpcStateOperationMap]>): void;
  addPossibleStateOperations(value: GrpcStateOperationMap[keyof GrpcStateOperationMap], index?: number): GrpcStateOperationMap[keyof GrpcStateOperationMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProblemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProblemResponse): GetProblemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetProblemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProblemResponse;
  static deserializeBinaryFromReader(message: GetProblemResponse, reader: jspb.BinaryReader): GetProblemResponse;
}

export namespace GetProblemResponse {
  export type AsObject = {
    problem?: GrpcProblem.AsObject,
    possibleStateOperationsList: Array<GrpcStateOperationMap[keyof GrpcStateOperationMap]>,
  }
}

export class CreateProblemRequest extends jspb.Message {
  getProblemTitle(): string;
  setProblemTitle(value: string): void;

  getProblemDescription(): string;
  setProblemDescription(value: string): void;

  getProblemReporter(): string;
  setProblemReporter(value: string): void;

  getReferenceIdentificationNumber(): string;
  setReferenceIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProblemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProblemRequest): CreateProblemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProblemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProblemRequest;
  static deserializeBinaryFromReader(message: CreateProblemRequest, reader: jspb.BinaryReader): CreateProblemRequest;
}

export namespace CreateProblemRequest {
  export type AsObject = {
    problemTitle: string,
    problemDescription: string,
    problemReporter: string,
    referenceIdentificationNumber: string,
  }
}

export class CreateProblemResponse extends jspb.Message {
  hasProblem(): boolean;
  clearProblem(): void;
  getProblem(): GrpcProblem | undefined;
  setProblem(value?: GrpcProblem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProblemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProblemResponse): CreateProblemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateProblemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProblemResponse;
  static deserializeBinaryFromReader(message: CreateProblemResponse, reader: jspb.BinaryReader): CreateProblemResponse;
}

export namespace CreateProblemResponse {
  export type AsObject = {
    problem?: GrpcProblem.AsObject,
  }
}

export class UpdateProblemRequest extends jspb.Message {
  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  getProblemTitle(): string;
  setProblemTitle(value: string): void;

  getProblemDescription(): string;
  setProblemDescription(value: string): void;

  getProblemReporter(): string;
  setProblemReporter(value: string): void;

  getReferenceIdentificationNumber(): string;
  setReferenceIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProblemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProblemRequest): UpdateProblemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProblemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProblemRequest;
  static deserializeBinaryFromReader(message: UpdateProblemRequest, reader: jspb.BinaryReader): UpdateProblemRequest;
}

export namespace UpdateProblemRequest {
  export type AsObject = {
    identificationNumber: string,
    problemTitle: string,
    problemDescription: string,
    problemReporter: string,
    referenceIdentificationNumber: string,
  }
}

export class UpdateProblemResponse extends jspb.Message {
  hasProblem(): boolean;
  clearProblem(): void;
  getProblem(): GrpcProblem | undefined;
  setProblem(value?: GrpcProblem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProblemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProblemResponse): UpdateProblemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProblemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProblemResponse;
  static deserializeBinaryFromReader(message: UpdateProblemResponse, reader: jspb.BinaryReader): UpdateProblemResponse;
}

export namespace UpdateProblemResponse {
  export type AsObject = {
    problem?: GrpcProblem.AsObject,
  }
}

export class RemoveProblemRequest extends jspb.Message {
  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveProblemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveProblemRequest): RemoveProblemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveProblemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveProblemRequest;
  static deserializeBinaryFromReader(message: RemoveProblemRequest, reader: jspb.BinaryReader): RemoveProblemRequest;
}

export namespace RemoveProblemRequest {
  export type AsObject = {
    identificationNumber: string,
  }
}

export class RemoveProblemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveProblemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveProblemResponse): RemoveProblemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveProblemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveProblemResponse;
  static deserializeBinaryFromReader(message: RemoveProblemResponse, reader: jspb.BinaryReader): RemoveProblemResponse;
}

export namespace RemoveProblemResponse {
  export type AsObject = {
  }
}

export class ChangeStateRequest extends jspb.Message {
  getGrpcStateOperation(): GrpcStateOperationMap[keyof GrpcStateOperationMap];
  setGrpcStateOperation(value: GrpcStateOperationMap[keyof GrpcStateOperationMap]): void;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeStateRequest): ChangeStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeStateRequest;
  static deserializeBinaryFromReader(message: ChangeStateRequest, reader: jspb.BinaryReader): ChangeStateRequest;
}

export namespace ChangeStateRequest {
  export type AsObject = {
    grpcStateOperation: GrpcStateOperationMap[keyof GrpcStateOperationMap],
    identificationNumber: string,
  }
}

export class ChangeStateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeStateResponse): ChangeStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeStateResponse;
  static deserializeBinaryFromReader(message: ChangeStateResponse, reader: jspb.BinaryReader): ChangeStateResponse;
}

export namespace ChangeStateResponse {
  export type AsObject = {
  }
}

export class GrpcProblem extends jspb.Message {
  getProblemState(): GrpcProblemStateMap[keyof GrpcProblemStateMap];
  setProblemState(value: GrpcProblemStateMap[keyof GrpcProblemStateMap]): void;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): void;

  getProblemTitle(): string;
  setProblemTitle(value: string): void;

  getProblemDescription(): string;
  setProblemDescription(value: string): void;

  getProblemReporter(): string;
  setProblemReporter(value: string): void;

  hasCreationTime(): boolean;
  clearCreationTime(): void;
  getCreationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getReferenceIdentificationNumber(): string;
  setReferenceIdentificationNumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcProblem.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcProblem): GrpcProblem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrpcProblem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcProblem;
  static deserializeBinaryFromReader(message: GrpcProblem, reader: jspb.BinaryReader): GrpcProblem;
}

export namespace GrpcProblem {
  export type AsObject = {
    problemState: GrpcProblemStateMap[keyof GrpcProblemStateMap],
    identificationNumber: string,
    problemTitle: string,
    problemDescription: string,
    problemReporter: string,
    creationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    referenceIdentificationNumber: string,
  }
}

export class GrpcFilterValueSelection extends jspb.Message {
  clearReportersList(): void;
  getReportersList(): Array<string>;
  setReportersList(value: Array<string>): void;
  addReporters(value: string, index?: number): string;

  clearStatesList(): void;
  getStatesList(): Array<GrpcProblemStateMap[keyof GrpcProblemStateMap]>;
  setStatesList(value: Array<GrpcProblemStateMap[keyof GrpcProblemStateMap]>): void;
  addStates(value: GrpcProblemStateMap[keyof GrpcProblemStateMap], index?: number): GrpcProblemStateMap[keyof GrpcProblemStateMap];

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
    reportersList: Array<string>,
    statesList: Array<GrpcProblemStateMap[keyof GrpcProblemStateMap]>,
  }
}

export interface GrpcProblemStateMap {
  UNKNOWN_PROBLEM_STATE: 0;
  ACCEPTED: 1;
  DECLINED: 2;
  IN_PROGRESS: 3;
  OPEN: 4;
  CLOSED: 5;
}

export const GrpcProblemState: GrpcProblemStateMap;

export interface GrpcStateOperationMap {
  UNKNOWN_STATE_OPERATION: 0;
  ACCEPT: 1;
  CLOSE: 2;
  DECLINE: 3;
  APPROACH: 4;
  HOLD: 5;
}

export const GrpcStateOperation: GrpcStateOperationMap;

