import { Injectable } from '@angular/core';
import {
  CreateBuildingRequest, CreateBuildingResponse,
  GetBuildingRequest, GetBuildingResponse,
  ListNotificationsRequest,
  ListNotificationsResponse, RemoveRequest, RemoveResponse, UpdateBuildingRequest, UpdateBuildingResponse
} from "../../../proto/generated/building_management_pb";
import {BuildingComponent} from "../../modules/building/building.component";
import {RoomComponent} from "../../modules/room/room.component";
import {ComponentComponent} from "../../modules/component/component.component";
import {RpcError} from "grpc-web";
import {
  CreateProblemRequest, CreateProblemResponse,
  GetProblemRequest, GetProblemResponse,
  ListProblemsRequest,
  ListProblemsResponse, UpdateProblemRequest, UpdateProblemResponse
} from "../../../proto/generated/problem_management_pb";
import {ProblemsComponent} from "../../modules/problems/problems.component";
import {BuildingManagementClient} from "../../../proto/generated/Building_managementServiceClientPb";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../../environments/environment";
import {ProblemManagementClient} from "../../../proto/generated/Problem_managementServiceClientPb";
import {ProblemComponent} from "../../modules/problem/problem.component";
import {ProblemsTableComponent} from "../../shared/tables/problems-table/problems-table.component";
import {BuildingsTableComponent} from "../../shared/tables/buildings-table/buildings-table.component";

@Injectable({
  providedIn: 'root'
})
export class ProblemManagementConnectorService {

  private readonly client: ProblemManagementClient;

  constructor(private snackbar: MatSnackBar) {
    this.client = new ProblemManagementClient(environment.clientUrls.problem_management, null, null);
  }

  async listProblems(request: ListProblemsRequest, callback: (response: ListProblemsResponse, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.listProblems(request, {}, (error: RpcError, response: ListProblemsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    });
  }

  async getProblem(request: GetProblemRequest, callback: (response: GetProblemResponse, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.getProblem(request, {}, (error: RpcError, response: GetProblemResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async createProblem(request: CreateProblemRequest, callback: (response: CreateProblemResponse, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.createProblem(request, {}, (error: RpcError, response: CreateProblemResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async updateProblem(request: UpdateProblemRequest, callback: (response: UpdateProblemResponse, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.updateProblem(request, {}, (error: RpcError, response: UpdateProblemResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }

  async removeProblem(request: RemoveRequest, callback: (id: string, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.removeProblem(request, {}, (error: RpcError, response: RemoveResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(request.getIdentificationNumber(), self);
      }
    })
  }
}
