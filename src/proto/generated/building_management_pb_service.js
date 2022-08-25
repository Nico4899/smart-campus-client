// package: edu.kit.tm.cm.proto
// file: building_management.proto

var building_management_pb = require("./building_management_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BuildingManagement = (function () {
  function BuildingManagement() {}
  BuildingManagement.serviceName = "edu.kit.tm.cm.proto.BuildingManagement";
  return BuildingManagement;
}());

BuildingManagement.GetBuilding = {
  methodName: "GetBuilding",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.GetBuildingRequest,
  responseType: building_management_pb.GetBuildingResponse
};

BuildingManagement.GetRoom = {
  methodName: "GetRoom",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.GetRoomRequest,
  responseType: building_management_pb.GetRoomResponse
};

BuildingManagement.GetComponent = {
  methodName: "GetComponent",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.GetComponentRequest,
  responseType: building_management_pb.GetComponentResponse
};

BuildingManagement.ListBuildings = {
  methodName: "ListBuildings",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.ListBuildingsRequest,
  responseType: building_management_pb.ListBuildingsResponse
};

BuildingManagement.ListRooms = {
  methodName: "ListRooms",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.ListRoomsRequest,
  responseType: building_management_pb.ListRoomsResponse
};

BuildingManagement.ListComponents = {
  methodName: "ListComponents",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.ListComponentsRequest,
  responseType: building_management_pb.ListComponentsResponse
};

BuildingManagement.ListNotifications = {
  methodName: "ListNotifications",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.ListNotificationsRequest,
  responseType: building_management_pb.ListNotificationsResponse
};

BuildingManagement.ListFavoriteBuildings = {
  methodName: "ListFavoriteBuildings",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.ListFavoriteBuildingsRequest,
  responseType: building_management_pb.ListFavoriteBuildingsResponse
};

BuildingManagement.ListFavoriteRooms = {
  methodName: "ListFavoriteRooms",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.ListFavoriteRoomsRequest,
  responseType: building_management_pb.ListFavoriteRoomsResponse
};

BuildingManagement.ListFavoriteComponents = {
  methodName: "ListFavoriteComponents",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.ListFavoriteComponentsRequest,
  responseType: building_management_pb.ListFavoriteComponentsResponse
};

BuildingManagement.CreateBuilding = {
  methodName: "CreateBuilding",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.CreateBuildingRequest,
  responseType: building_management_pb.CreateBuildingResponse
};

BuildingManagement.CreateRoom = {
  methodName: "CreateRoom",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.CreateRoomRequest,
  responseType: building_management_pb.CreateRoomResponse
};

BuildingManagement.CreateComponent = {
  methodName: "CreateComponent",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.CreateComponentRequest,
  responseType: building_management_pb.CreateComponentResponse
};

BuildingManagement.CreateFavorite = {
  methodName: "CreateFavorite",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.CreateFavoriteRequest,
  responseType: building_management_pb.CreateFavoriteResponse
};

BuildingManagement.UpdateBuilding = {
  methodName: "UpdateBuilding",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.UpdateBuildingRequest,
  responseType: building_management_pb.UpdateBuildingResponse
};

BuildingManagement.UpdateRoom = {
  methodName: "UpdateRoom",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.UpdateRoomRequest,
  responseType: building_management_pb.UpdateRoomResponse
};

BuildingManagement.UpdateComponent = {
  methodName: "UpdateComponent",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.UpdateComponentRequest,
  responseType: building_management_pb.UpdateComponentResponse
};

BuildingManagement.RemoveBuilding = {
  methodName: "RemoveBuilding",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.RemoveRequest,
  responseType: building_management_pb.RemoveResponse
};

BuildingManagement.RemoveRoom = {
  methodName: "RemoveRoom",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.RemoveRequest,
  responseType: building_management_pb.RemoveResponse
};

BuildingManagement.RemoveComponent = {
  methodName: "RemoveComponent",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.RemoveRequest,
  responseType: building_management_pb.RemoveResponse
};

BuildingManagement.RemoveFavorite = {
  methodName: "RemoveFavorite",
  service: BuildingManagement,
  requestStream: false,
  responseStream: false,
  requestType: building_management_pb.RemoveRequest,
  responseType: building_management_pb.RemoveResponse
};

exports.BuildingManagement = BuildingManagement;

function BuildingManagementClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BuildingManagementClient.prototype.getBuilding = function getBuilding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.GetBuilding, {
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

BuildingManagementClient.prototype.getRoom = function getRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.GetRoom, {
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

BuildingManagementClient.prototype.getComponent = function getComponent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.GetComponent, {
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

BuildingManagementClient.prototype.listBuildings = function listBuildings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.ListBuildings, {
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

BuildingManagementClient.prototype.listRooms = function listRooms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.ListRooms, {
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

BuildingManagementClient.prototype.listComponents = function listComponents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.ListComponents, {
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

BuildingManagementClient.prototype.listNotifications = function listNotifications(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.ListNotifications, {
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

BuildingManagementClient.prototype.listFavoriteBuildings = function listFavoriteBuildings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.ListFavoriteBuildings, {
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

BuildingManagementClient.prototype.listFavoriteRooms = function listFavoriteRooms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.ListFavoriteRooms, {
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

BuildingManagementClient.prototype.listFavoriteComponents = function listFavoriteComponents(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.ListFavoriteComponents, {
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

BuildingManagementClient.prototype.createBuilding = function createBuilding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.CreateBuilding, {
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

BuildingManagementClient.prototype.createRoom = function createRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.CreateRoom, {
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

BuildingManagementClient.prototype.createComponent = function createComponent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.CreateComponent, {
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

BuildingManagementClient.prototype.createFavorite = function createFavorite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.CreateFavorite, {
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

BuildingManagementClient.prototype.updateBuilding = function updateBuilding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.UpdateBuilding, {
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

BuildingManagementClient.prototype.updateRoom = function updateRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.UpdateRoom, {
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

BuildingManagementClient.prototype.updateComponent = function updateComponent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.UpdateComponent, {
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

BuildingManagementClient.prototype.removeBuilding = function removeBuilding(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.RemoveBuilding, {
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

BuildingManagementClient.prototype.removeRoom = function removeRoom(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.RemoveRoom, {
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

BuildingManagementClient.prototype.removeComponent = function removeComponent(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.RemoveComponent, {
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

BuildingManagementClient.prototype.removeFavorite = function removeFavorite(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BuildingManagement.RemoveFavorite, {
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

exports.BuildingManagementClient = BuildingManagementClient;

