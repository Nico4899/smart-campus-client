import { Injectable } from '@angular/core';
import {ListNotificationsRequest, ListNotificationsResponse} from "../../../proto/generated/building_management_pb";
import {BuildingComponent} from "../../modules/building/building.component";
import {RoomComponent} from "../../modules/room/room.component";
import {ComponentComponent} from "../../modules/component/component.component";
import {RpcError} from "grpc-web";
import {ListProblemsRequest, ListProblemsResponse} from "../../../proto/generated/problem_management_pb";
import {ProblemsComponent} from "../../modules/problems/problems.component";
import {BuildingManagementClient} from "../../../proto/generated/Building_managementServiceClientPb";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../../environments/environment";
import {ProblemManagementClient} from "../../../proto/generated/Problem_managementServiceClientPb";

@Injectable({
  providedIn: 'root'
})
export class ProblemManagementConnectorService {

  private readonly client: ProblemManagementClient;

  constructor(private snackbar: MatSnackBar) {
    this.client = new ProblemManagementClient(environment.clientUrls.problem_management, null, null);
  }

  async listProblems(request: ListProblemsRequest, callback: (response: ListProblemsResponse, self: ProblemsComponent) => void, self: ProblemsComponent) {
    this.client.listProblems(request, {}, (error: RpcError, response: ListProblemsResponse) => {
      if (error) {
        this.snackbar.open("Error occurred, please try again.", "", {duration: 1500});
      } else {
        callback(response, self);
      }
    })
  }
}
