import {Component, OnInit} from '@angular/core';
import {
  BuildingManagementConnectorService
} from "../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {
  CreateFavoriteRequest,
  CreateFavoriteResponse,
  GetRoomRequest,
  GetRoomResponse,
  GrpcRoom
} from "../../../proto/generated/building_management_pb";
import {AuthServiceService} from 'src/app/core/authentication/auth-service.service';
import {
  CreateProblemRequest,
  CreateProblemResponse
} from 'src/proto/generated/problem_management_pb';
import {AddProblemComponent} from 'src/app/shared/dialogs/add-problem/add-problem.component';
import {
  ProblemManagementConnectorService
} from 'src/app/core/connectors/problem-management-connector.service';
import {MatDialog} from '@angular/material/dialog';
import {TranslateService} from "@ngx-translate/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  translateService: TranslateService;
  // path variable
  rin: string = "";

  // main object
  room: GrpcRoom.AsObject = new GrpcRoom().toObject();

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private problemManagementConnector: ProblemManagementConnectorService, public authService: AuthServiceService, private route: ActivatedRoute, private dialog: MatDialog, private snackbar: MatSnackBar, translateService: TranslateService) {
    this.translateService = translateService;
  }

  ngOnInit(): void {
    this.rin = String(this.route.snapshot.paramMap.get("rin"));

    let getRoomRequest = new GetRoomRequest();
    getRoomRequest.setIdentificationNumber(this.rin);
    this.buildingManagementConnector.getRoom(getRoomRequest, RoomComponent.interpretGetRoomResponse, this);
  }

  private static interpretGetRoomResponse(response: GetRoomResponse, self: RoomComponent): void {
    self.room = response.getRoom()?.toObject()!;
  }

  addFavorite(): void {
    let request = new CreateFavoriteRequest();
    request.setOwner(this.authService.eMail as string);
    request.setReferenceIdentificationNumber(this.rin);
    this.buildingManagementConnector.createFavorite(request, RoomComponent.interpretCreateFavoriteResponse, this);
    this.translateService.get('added_favorite').subscribe((res: string) => {
      this.snackbar.open(res, "", {duration: 3500});
    });
  }


  openCreateProblemDialog() {
    const dialogRef = this.dialog.open(AddProblemComponent, {data: this.room.identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnector.createProblem(RoomComponent.buildCreateProblemRequest(result), RoomComponent.interpretCreateProblemResponse, this);
      } else {
        return;
      }
    })
  }

  private static interpretCreateFavoriteResponse(response: CreateFavoriteResponse, self: any): void {
  }

  private static interpretCreateProblemResponse(response: CreateProblemResponse, self: any): void {
    return;
  }


  private static buildCreateProblemRequest(result: any): CreateProblemRequest {
    let request = new CreateProblemRequest();
    request.setProblemTitle(result.data.problemTitle);
    request.setProblemDescription(result.data.problemDescription);
    request.setReferenceIdentificationNumber(result.data.referenceIdentificationNumber);
    request.setProblemReporter(result.data.problemReporter);
    return request;
  }

}
