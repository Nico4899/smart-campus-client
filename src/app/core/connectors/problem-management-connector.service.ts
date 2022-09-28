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
import { ComponentsTableComponent } from 'src/app/shared/tables/components-table/components-table.component';
import { BuildingComponent } from 'src/app/modules/building/building.component';
import { RoomComponent } from 'src/app/modules/room/room.component';
import { ComponentComponent } from 'src/app/modules/component/component.component';
import {AuthServiceService} from "../authentication/auth-service.service";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class ProblemManagementConnectorService {

  private readonly client: ProblemManagementClient;
  private readonly errDuration: number = 3500;

  constructor(private snackbar: MatSnackBar, private authService: AuthServiceService, private translateService: TranslateService) {
    this.client = new ProblemManagementClient(environment.clientUrls.problem_management, null, null);
  }

  async listProblems(request: ListProblemsRequest, callback: (response: ListProblemsResponse, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.listProblems(request, {Authorization: `Bearer ${this.authService.token}`}, (error: RpcError, response: ListProblemsResponse) => {
      if (error) {
        let result = "";
        this.translateService.get("errors.problem_connector.list_problems").subscribe((r: string) => result = r);
        this.snackbar.open(result, "", {duration: this.errDuration});
      } else {
        callback(response, self);
      }
    });
  }

  async listProblemsForUser(request: ListProblemsForUserRequest, callback: (response: ListProblemsResponse, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.listProblemsForUser(request, {Authorization: `Bearer ${this.authService.token}`}, (error: RpcError, response: ListProblemsResponse) => {
      if (error) {
        let result = "";
        this.translateService.get("errors.problem_connector.list_problems_for_user").subscribe((r: string) => result = r);
        this.snackbar.open(result, "", {duration: this.errDuration});
      } else {
        callback(response, self);
      }
    });
  }

  async getProblem(request: GetProblemRequest, callback: (response: GetProblemResponse, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.getProblem(request, {Authorization: `Bearer ${this.authService.token}`}, (error: RpcError, response: GetProblemResponse) => {
      if (error) {
        let result = "";
        this.translateService.get("errors.problem_connector.get_problem").subscribe((r: string) => result = r);
        this.snackbar.open(result, "", {duration: this.errDuration});
      } else {
        callback(response, self);
      }
    })
  }

  async createProblem(request: CreateProblemRequest, callback: (response: CreateProblemResponse, self: ProblemsTableComponent | BuildingsTableComponent | RoomsTableComponent | ComponentsTableComponent | BuildingComponent | RoomComponent | ComponentComponent) => void, self: ProblemsTableComponent | BuildingsTableComponent | RoomsTableComponent | ComponentsTableComponent | BuildingComponent | RoomComponent | ComponentComponent) {
    this.client.createProblem(request, {Authorization: `Bearer ${this.authService.token}`}, (error: RpcError, response: CreateProblemResponse) => {
      if (error) {
        let result = "";
        this.translateService.get("errors.problem_connector.create_problem").subscribe((r: string) => result = r);
        this.snackbar.open(result, "", {duration: this.errDuration});
      } else {
        callback(response, self);
      }
    })
  }

  async updateProblem(request: UpdateProblemRequest, callback: (response: UpdateProblemResponse, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.updateProblem(request, {Authorization: `Bearer ${this.authService.token}`}, (error: RpcError, response: UpdateProblemResponse) => {
      if (error) {
        let result = "";
        this.translateService.get("errors.problem_connector.update_problem").subscribe((r: string) => result = r);
        this.snackbar.open(result, "", {duration: this.errDuration});
      } else {
        callback(response, self);
      }
    })
  }

  async removeProblem(request: RemoveRequest, callback: (id: string, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.removeProblem(request, {Authorization: `Bearer ${this.authService.token}`}, (error: RpcError, response: RemoveResponse) => {
      if (error) {
        let result = "";
        this.translateService.get("errors.problem_connector.remove_problem").subscribe((r: string) => result = r);
        this.snackbar.open(result, "", {duration: this.errDuration});
      } else {
        callback(request.getIdentificationNumber(), self);
      }
    })
  }

  async changeProblemState(request:ChangeStateRequest, callback: (response: ChangeStateResponse, self: ProblemsTableComponent) => void, self: ProblemsTableComponent) {
    this.client.changeState(request, {Authorization: `Bearer ${this.authService.token}`}, (error: RpcError, response: ChangeStateResponse) => {
      if (error) {
        let result = "";
        this.translateService.get("errors.problem_connector.change_problem_state").subscribe((r: string) => result = r);
        this.snackbar.open(result, "", {duration: this.errDuration});
      } else {
        callback(response, self);
      }
    })
  }
}
