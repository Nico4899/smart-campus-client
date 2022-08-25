// package: edu.kit.tm.cm.proto
// file: problem_management.proto

var problem_management_pb = require("./problem_management_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ProblemManagement = (function () {
  function ProblemManagement() {}
  ProblemManagement.serviceName = "edu.kit.tm.cm.proto.ProblemManagement";
  return ProblemManagement;
}());

ProblemManagement.ListProblems = {
  methodName: "ListProblems",
  service: ProblemManagement,
  requestStream: false,
  responseStream: false,
  requestType: problem_management_pb.ListProblemsRequest,
  responseType: problem_management_pb.ListProblemsResponse
};

ProblemManagement.GetProblem = {
  methodName: "GetProblem",
  service: ProblemManagement,
  requestStream: false,
  responseStream: false,
  requestType: problem_management_pb.GetProblemRequest,
  responseType: problem_management_pb.GetProblemResponse
};

ProblemManagement.CreateProblem = {
  methodName: "CreateProblem",
  service: ProblemManagement,
  requestStream: false,
  responseStream: false,
  requestType: problem_management_pb.CreateProblemRequest,
  responseType: problem_management_pb.CreateProblemResponse
};

ProblemManagement.UpdateProblem = {
  methodName: "UpdateProblem",
  service: ProblemManagement,
  requestStream: false,
  responseStream: false,
  requestType: problem_management_pb.UpdateProblemRequest,
  responseType: problem_management_pb.UpdateProblemResponse
};

ProblemManagement.RemoveProblem = {
  methodName: "RemoveProblem",
  service: ProblemManagement,
  requestStream: false,
  responseStream: false,
  requestType: problem_management_pb.RemoveProblemRequest,
  responseType: problem_management_pb.RemoveProblemResponse
};

ProblemManagement.ChangeState = {
  methodName: "ChangeState",
  service: ProblemManagement,
  requestStream: false,
  responseStream: false,
  requestType: problem_management_pb.ChangeStateRequest,
  responseType: problem_management_pb.ChangeStateResponse
};

exports.ProblemManagement = ProblemManagement;

function ProblemManagementClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ProblemManagementClient.prototype.listProblems = function listProblems(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProblemManagement.ListProblems, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProblemManagementClient.prototype.getProblem = function getProblem(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProblemManagement.GetProblem, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProblemManagementClient.prototype.createProblem = function createProblem(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProblemManagement.CreateProblem, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProblemManagementClient.prototype.updateProblem = function updateProblem(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProblemManagement.UpdateProblem, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProblemManagementClient.prototype.removeProblem = function removeProblem(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProblemManagement.RemoveProblem, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ProblemManagementClient.prototype.changeState = function changeState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ProblemManagement.ChangeState, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ProblemManagementClient = ProblemManagementClient;

