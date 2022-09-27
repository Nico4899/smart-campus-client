import { Injectable } from '@angular/core';
import {RemoveRequest, RemoveResponse} from "../../../proto/generated/building_management_pb";
import {RpcError} from "grpc-web";
import {
  ChangeStateRequest, ChangeStateResponse,
  CreateProblemRequest, CreateProblemResponse,
  GetProblemRequest, GetProblemResponse, ListProblemsForUserRequest,
  ListProblemsRequest,
  ListProblemsResponse, UpdateProblemRequest, UpdateProblemResponse
} from "../../../proto/generated/problem_management_pb";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../../environments/environment";
import {ProblemManagementClient} from "../../../proto/generated/Problem_managementServiceClientPb";
import {ProblemsTableComponent} from "../../shared/tables/problems-table/problems-table.component";

import {BuildingsTableComponent} from "../../shared/tables/buildings-table/buildings-table.component"
import { RoomsTableComponent } from 'src/app/shared/tables/rooms-table/rooms-table.component';

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

  async listProblemsForUser(request: ListProblemsForUserRequest, callback: (response: ListProblemsResponse, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.listProblemsForUser(request, {}, (error: RpcError, response: ListProblemsResponse) => {
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

  async createProblem(request: CreateProblemRequest, callback: (response: CreateProblemResponse, self: ProblemsTableComponent | BuildingsTableComponent | RoomsTableComponent) => void, self: ProblemsTableComponent | BuildingsTableComponent | RoomsTableComponent) {
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

  async changeProblemState(request:ChangeStateRequest, callback: (response: ChangeStateResponse, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.changeState(request, {}, (error: RpcError, response: ChangeStateResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }
}
