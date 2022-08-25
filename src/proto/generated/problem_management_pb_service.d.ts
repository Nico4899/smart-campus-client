// package: edu.kit.tm.cm.proto
// file: problem_management.proto

import * as problem_management_pb from "./problem_management_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProblemManagementListProblems = {
  readonly methodName: string;
  readonly service: typeof ProblemManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof problem_management_pb.ListProblemsRequest;
  readonly responseType: typeof problem_management_pb.ListProblemsResponse;
};

type ProblemManagementGetProblem = {
  readonly methodName: string;
  readonly service: typeof ProblemManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof problem_management_pb.GetProblemRequest;
  readonly responseType: typeof problem_management_pb.GetProblemResponse;
};

type ProblemManagementCreateProblem = {
  readonly methodName: string;
  readonly service: typeof ProblemManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof problem_management_pb.CreateProblemRequest;
  readonly responseType: typeof problem_management_pb.CreateProblemResponse;
};

type ProblemManagementUpdateProblem = {
  readonly methodName: string;
  readonly service: typeof ProblemManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof problem_management_pb.UpdateProblemRequest;
  readonly responseType: typeof problem_management_pb.UpdateProblemResponse;
};

type ProblemManagementRemoveProblem = {
  readonly methodName: string;
  readonly service: typeof ProblemManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof problem_management_pb.RemoveProblemRequest;
  readonly responseType: typeof problem_management_pb.RemoveProblemResponse;
};

type ProblemManagementChangeState = {
  readonly methodName: string;
  readonly service: typeof ProblemManagement;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof problem_management_pb.ChangeStateRequest;
  readonly responseType: typeof problem_management_pb.ChangeStateResponse;
};

export class ProblemManagement {
  static readonly serviceName: string;
  static readonly ListProblems: ProblemManagementListProblems;
  static readonly GetProblem: ProblemManagementGetProblem;
  static readonly CreateProblem: ProblemManagementCreateProblem;
  static readonly UpdateProblem: ProblemManagementUpdateProblem;
  static readonly RemoveProblem: ProblemManagementRemoveProblem;
  static readonly ChangeState: ProblemManagementChangeState;
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

export class ProblemManagementClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listProblems(
    requestMessage: problem_management_pb.ListProblemsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.ListProblemsResponse|null) => void
  ): UnaryResponse;
  listProblems(
    requestMessage: problem_management_pb.ListProblemsRequest,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.ListProblemsResponse|null) => void
  ): UnaryResponse;
  getProblem(
    requestMessage: problem_management_pb.GetProblemRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.GetProblemResponse|null) => void
  ): UnaryResponse;
  getProblem(
    requestMessage: problem_management_pb.GetProblemRequest,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.GetProblemResponse|null) => void
  ): UnaryResponse;
  createProblem(
    requestMessage: problem_management_pb.CreateProblemRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.CreateProblemResponse|null) => void
  ): UnaryResponse;
  createProblem(
    requestMessage: problem_management_pb.CreateProblemRequest,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.CreateProblemResponse|null) => void
  ): UnaryResponse;
  updateProblem(
    requestMessage: problem_management_pb.UpdateProblemRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.UpdateProblemResponse|null) => void
  ): UnaryResponse;
  updateProblem(
    requestMessage: problem_management_pb.UpdateProblemRequest,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.UpdateProblemResponse|null) => void
  ): UnaryResponse;
  removeProblem(
    requestMessage: problem_management_pb.RemoveProblemRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.RemoveProblemResponse|null) => void
  ): UnaryResponse;
  removeProblem(
    requestMessage: problem_management_pb.RemoveProblemRequest,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.RemoveProblemResponse|null) => void
  ): UnaryResponse;
  changeState(
    requestMessage: problem_management_pb.ChangeStateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.ChangeStateResponse|null) => void
  ): UnaryResponse;
  changeState(
    requestMessage: problem_management_pb.ChangeStateRequest,
    callback: (error: ServiceError|null, responseMessage: problem_management_pb.ChangeStateResponse|null) => void
  ): UnaryResponse;
}

