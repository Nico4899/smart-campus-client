/**
 * @fileoverview gRPC-Web generated client stub for edu.kit.tm.cm.proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as problem_management_pb from './problem_management_pb';


export class ProblemManagementClient {
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

  methodDescriptorListProblems = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.ProblemManagement/ListProblems',
    grpcWeb.MethodType.UNARY,
    problem_management_pb.ListProblemsRequest,
    problem_management_pb.ListProblemsResponse,
    (request: problem_management_pb.ListProblemsRequest) => {
      return request.serializeBinary();
    },
    problem_management_pb.ListProblemsResponse.deserializeBinary
  );

  listProblems(
    request: problem_management_pb.ListProblemsRequest,
    metadata: grpcWeb.Metadata | null): Promise<problem_management_pb.ListProblemsResponse>;

  listProblems(
    request: problem_management_pb.ListProblemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: problem_management_pb.ListProblemsResponse) => void): grpcWeb.ClientReadableStream<problem_management_pb.ListProblemsResponse>;

  listProblems(
    request: problem_management_pb.ListProblemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: problem_management_pb.ListProblemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.ProblemManagement/ListProblems',
        request,
        metadata || {},
        this.methodDescriptorListProblems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.ProblemManagement/ListProblems',
    request,
    metadata || {},
    this.methodDescriptorListProblems);
  }

  methodDescriptorGetProblem = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.ProblemManagement/GetProblem',
    grpcWeb.MethodType.UNARY,
    problem_management_pb.GetProblemRequest,
    problem_management_pb.GetProblemResponse,
    (request: problem_management_pb.GetProblemRequest) => {
      return request.serializeBinary();
    },
    problem_management_pb.GetProblemResponse.deserializeBinary
  );

  getProblem(
    request: problem_management_pb.GetProblemRequest,
    metadata: grpcWeb.Metadata | null): Promise<problem_management_pb.GetProblemResponse>;

  getProblem(
    request: problem_management_pb.GetProblemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: problem_management_pb.GetProblemResponse) => void): grpcWeb.ClientReadableStream<problem_management_pb.GetProblemResponse>;

  getProblem(
    request: problem_management_pb.GetProblemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: problem_management_pb.GetProblemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.ProblemManagement/GetProblem',
        request,
        metadata || {},
        this.methodDescriptorGetProblem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.ProblemManagement/GetProblem',
    request,
    metadata || {},
    this.methodDescriptorGetProblem);
  }

  methodDescriptorCreateProblem = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.ProblemManagement/CreateProblem',
    grpcWeb.MethodType.UNARY,
    problem_management_pb.CreateProblemRequest,
    problem_management_pb.CreateProblemResponse,
    (request: problem_management_pb.CreateProblemRequest) => {
      return request.serializeBinary();
    },
    problem_management_pb.CreateProblemResponse.deserializeBinary
  );

  createProblem(
    request: problem_management_pb.CreateProblemRequest,
    metadata: grpcWeb.Metadata | null): Promise<problem_management_pb.CreateProblemResponse>;

  createProblem(
    request: problem_management_pb.CreateProblemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: problem_management_pb.CreateProblemResponse) => void): grpcWeb.ClientReadableStream<problem_management_pb.CreateProblemResponse>;

  createProblem(
    request: problem_management_pb.CreateProblemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: problem_management_pb.CreateProblemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.ProblemManagement/CreateProblem',
        request,
        metadata || {},
        this.methodDescriptorCreateProblem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.ProblemManagement/CreateProblem',
    request,
    metadata || {},
    this.methodDescriptorCreateProblem);
  }

  methodDescriptorUpdateProblem = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.ProblemManagement/UpdateProblem',
    grpcWeb.MethodType.UNARY,
    problem_management_pb.UpdateProblemRequest,
    problem_management_pb.UpdateProblemResponse,
    (request: problem_management_pb.UpdateProblemRequest) => {
      return request.serializeBinary();
    },
    problem_management_pb.UpdateProblemResponse.deserializeBinary
  );

  updateProblem(
    request: problem_management_pb.UpdateProblemRequest,
    metadata: grpcWeb.Metadata | null): Promise<problem_management_pb.UpdateProblemResponse>;

  updateProblem(
    request: problem_management_pb.UpdateProblemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: problem_management_pb.UpdateProblemResponse) => void): grpcWeb.ClientReadableStream<problem_management_pb.UpdateProblemResponse>;

  updateProblem(
    request: problem_management_pb.UpdateProblemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: problem_management_pb.UpdateProblemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.ProblemManagement/UpdateProblem',
        request,
        metadata || {},
        this.methodDescriptorUpdateProblem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.ProblemManagement/UpdateProblem',
    request,
    metadata || {},
    this.methodDescriptorUpdateProblem);
  }

  methodDescriptorRemoveProblem = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.ProblemManagement/RemoveProblem',
    grpcWeb.MethodType.UNARY,
    problem_management_pb.RemoveProblemRequest,
    problem_management_pb.RemoveProblemResponse,
    (request: problem_management_pb.RemoveProblemRequest) => {
      return request.serializeBinary();
    },
    problem_management_pb.RemoveProblemResponse.deserializeBinary
  );

  removeProblem(
    request: problem_management_pb.RemoveProblemRequest,
    metadata: grpcWeb.Metadata | null): Promise<problem_management_pb.RemoveProblemResponse>;

  removeProblem(
    request: problem_management_pb.RemoveProblemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: problem_management_pb.RemoveProblemResponse) => void): grpcWeb.ClientReadableStream<problem_management_pb.RemoveProblemResponse>;

  removeProblem(
    request: problem_management_pb.RemoveProblemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: problem_management_pb.RemoveProblemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.ProblemManagement/RemoveProblem',
        request,
        metadata || {},
        this.methodDescriptorRemoveProblem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.ProblemManagement/RemoveProblem',
    request,
    metadata || {},
    this.methodDescriptorRemoveProblem);
  }

  methodDescriptorChangeState = new grpcWeb.MethodDescriptor(
    '/edu.kit.tm.cm.proto.ProblemManagement/ChangeState',
    grpcWeb.MethodType.UNARY,
    problem_management_pb.ChangeStateRequest,
    problem_management_pb.ChangeStateResponse,
    (request: problem_management_pb.ChangeStateRequest) => {
      return request.serializeBinary();
    },
    problem_management_pb.ChangeStateResponse.deserializeBinary
  );

  changeState(
    request: problem_management_pb.ChangeStateRequest,
    metadata: grpcWeb.Metadata | null): Promise<problem_management_pb.ChangeStateResponse>;

  changeState(
    request: problem_management_pb.ChangeStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: problem_management_pb.ChangeStateResponse) => void): grpcWeb.ClientReadableStream<problem_management_pb.ChangeStateResponse>;

  changeState(
    request: problem_management_pb.ChangeStateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: problem_management_pb.ChangeStateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/edu.kit.tm.cm.proto.ProblemManagement/ChangeState',
        request,
        metadata || {},
        this.methodDescriptorChangeState,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/edu.kit.tm.cm.proto.ProblemManagement/ChangeState',
    request,
    metadata || {},
    this.methodDescriptorChangeState);
  }

}

