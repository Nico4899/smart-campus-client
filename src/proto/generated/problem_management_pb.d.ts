import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ListProblemsRequest extends jspb.Message {
  getGrpcFilterValueSelection(): GrpcProblemFilterValueSelection | undefined;
  setGrpcFilterValueSelection(value?: GrpcProblemFilterValueSelection): ListProblemsRequest;
  hasGrpcFilterValueSelection(): boolean;
  clearGrpcFilterValueSelection(): ListProblemsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProblemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProblemsRequest): ListProblemsRequest.AsObject;
  static serializeBinaryToWriter(message: ListProblemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProblemsRequest;
  static deserializeBinaryFromReader(message: ListProblemsRequest, reader: jspb.BinaryReader): ListProblemsRequest;
}

export namespace ListProblemsRequest {
  export type AsObject = {
    grpcFilterValueSelection?: GrpcProblemFilterValueSelection.AsObject,
  }
}

export class ListProblemsResponse extends jspb.Message {
  getProblemsList(): Array<GrpcProblem>;
  setProblemsList(value: Array<GrpcProblem>): ListProblemsResponse;
  clearProblemsList(): ListProblemsResponse;
  addProblems(value?: GrpcProblem, index?: number): GrpcProblem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProblemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProblemsResponse): ListProblemsResponse.AsObject;
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
  setIdentificationNumber(value: string): GetProblemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProblemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProblemRequest): GetProblemRequest.AsObject;
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
  getProblem(): GrpcProblem | undefined;
  setProblem(value?: GrpcProblem): GetProblemResponse;
  hasProblem(): boolean;
  clearProblem(): GetProblemResponse;

  getPossibleStateOperationsList(): Array<GrpcStateOperation>;
  setPossibleStateOperationsList(value: Array<GrpcStateOperation>): GetProblemResponse;
  clearPossibleStateOperationsList(): GetProblemResponse;
  addPossibleStateOperations(value: GrpcStateOperation, index?: number): GetProblemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProblemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProblemResponse): GetProblemResponse.AsObject;
  static serializeBinaryToWriter(message: GetProblemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProblemResponse;
  static deserializeBinaryFromReader(message: GetProblemResponse, reader: jspb.BinaryReader): GetProblemResponse;
}

export namespace GetProblemResponse {
  export type AsObject = {
    problem?: GrpcProblem.AsObject,
    possibleStateOperationsList: Array<GrpcStateOperation>,
  }
}

export class CreateProblemRequest extends jspb.Message {
  getProblemTitle(): string;
  setProblemTitle(value: string): CreateProblemRequest;

  getProblemDescription(): string;
  setProblemDescription(value: string): CreateProblemRequest;

  getProblemReporter(): string;
  setProblemReporter(value: string): CreateProblemRequest;

  getReferenceIdentificationNumber(): string;
  setReferenceIdentificationNumber(value: string): CreateProblemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProblemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProblemRequest): CreateProblemRequest.AsObject;
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
  getProblem(): GrpcProblem | undefined;
  setProblem(value?: GrpcProblem): CreateProblemResponse;
  hasProblem(): boolean;
  clearProblem(): CreateProblemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProblemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProblemResponse): CreateProblemResponse.AsObject;
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
  setIdentificationNumber(value: string): UpdateProblemRequest;

  getProblemTitle(): string;
  setProblemTitle(value: string): UpdateProblemRequest;

  getProblemDescription(): string;
  setProblemDescription(value: string): UpdateProblemRequest;

  getProblemReporter(): string;
  setProblemReporter(value: string): UpdateProblemRequest;

  getReferenceIdentificationNumber(): string;
  setReferenceIdentificationNumber(value: string): UpdateProblemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProblemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProblemRequest): UpdateProblemRequest.AsObject;
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
  getProblem(): GrpcProblem | undefined;
  setProblem(value?: GrpcProblem): UpdateProblemResponse;
  hasProblem(): boolean;
  clearProblem(): UpdateProblemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProblemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProblemResponse): UpdateProblemResponse.AsObject;
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
  setIdentificationNumber(value: string): RemoveProblemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveProblemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveProblemRequest): RemoveProblemRequest.AsObject;
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
  static serializeBinaryToWriter(message: RemoveProblemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveProblemResponse;
  static deserializeBinaryFromReader(message: RemoveProblemResponse, reader: jspb.BinaryReader): RemoveProblemResponse;
}

export namespace RemoveProblemResponse {
  export type AsObject = {
  }
}

export class ChangeStateRequest extends jspb.Message {
  getGrpcStateOperation(): GrpcStateOperation;
  setGrpcStateOperation(value: GrpcStateOperation): ChangeStateRequest;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): ChangeStateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeStateRequest): ChangeStateRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeStateRequest;
  static deserializeBinaryFromReader(message: ChangeStateRequest, reader: jspb.BinaryReader): ChangeStateRequest;
}

export namespace ChangeStateRequest {
  export type AsObject = {
    grpcStateOperation: GrpcStateOperation,
    identificationNumber: string,
  }
}

export class ChangeStateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeStateResponse): ChangeStateResponse.AsObject;
  static serializeBinaryToWriter(message: ChangeStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeStateResponse;
  static deserializeBinaryFromReader(message: ChangeStateResponse, reader: jspb.BinaryReader): ChangeStateResponse;
}

export namespace ChangeStateResponse {
  export type AsObject = {
  }
}

export class GrpcProblem extends jspb.Message {
  getProblemState(): GrpcProblemState;
  setProblemState(value: GrpcProblemState): GrpcProblem;

  getIdentificationNumber(): string;
  setIdentificationNumber(value: string): GrpcProblem;

  getProblemTitle(): string;
  setProblemTitle(value: string): GrpcProblem;

  getProblemDescription(): string;
  setProblemDescription(value: string): GrpcProblem;

  getProblemReporter(): string;
  setProblemReporter(value: string): GrpcProblem;

  getCreationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationTime(value?: google_protobuf_timestamp_pb.Timestamp): GrpcProblem;
  hasCreationTime(): boolean;
  clearCreationTime(): GrpcProblem;

  getReferenceIdentificationNumber(): string;
  setReferenceIdentificationNumber(value: string): GrpcProblem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcProblem.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcProblem): GrpcProblem.AsObject;
  static serializeBinaryToWriter(message: GrpcProblem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcProblem;
  static deserializeBinaryFromReader(message: GrpcProblem, reader: jspb.BinaryReader): GrpcProblem;
}

export namespace GrpcProblem {
  export type AsObject = {
    problemState: GrpcProblemState,
    identificationNumber: string,
    problemTitle: string,
    problemDescription: string,
    problemReporter: string,
    creationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    referenceIdentificationNumber: string,
  }
}

export class GrpcProblemFilterValueSelection extends jspb.Message {
  getReportersList(): Array<string>;
  setReportersList(value: Array<string>): GrpcProblemFilterValueSelection;
  clearReportersList(): GrpcProblemFilterValueSelection;
  addReporters(value: string, index?: number): GrpcProblemFilterValueSelection;

  getStatesList(): Array<GrpcProblemState>;
  setStatesList(value: Array<GrpcProblemState>): GrpcProblemFilterValueSelection;
  clearStatesList(): GrpcProblemFilterValueSelection;
  addStates(value: GrpcProblemState, index?: number): GrpcProblemFilterValueSelection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcProblemFilterValueSelection.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcProblemFilterValueSelection): GrpcProblemFilterValueSelection.AsObject;
  static serializeBinaryToWriter(message: GrpcProblemFilterValueSelection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcProblemFilterValueSelection;
  static deserializeBinaryFromReader(message: GrpcProblemFilterValueSelection, reader: jspb.BinaryReader): GrpcProblemFilterValueSelection;
}

export namespace GrpcProblemFilterValueSelection {
  export type AsObject = {
    reportersList: Array<string>,
    statesList: Array<GrpcProblemState>,
  }
}

export enum GrpcProblemState { 
  UNKNOWN_PROBLEM_STATE = 0,
  ACCEPTED = 1,
  DECLINED = 2,
  IN_PROGRESS = 3,
  OPEN = 4,
  CLOSED = 5,
}
export enum GrpcStateOperation { 
  UNKNOWN_STATE_OPERATION = 0,
  ACCEPT = 1,
  CLOSE = 2,
  DECLINE = 3,
  APPROACH = 4,
  HOLD = 5,
}
