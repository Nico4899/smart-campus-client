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
  GrpcRoom, IsFavoriteRequest, IsFavoriteResponse, RemoveFavoriteRequest
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
import {ComponentComponent} from "../component/component.component";
import {BuildingComponent} from "../building/building.component";
import {
  FavoriteBuildingsTableComponent
} from "../../shared/tables/favorites-tables/favorite-buildings-table/favorite-buildings-table.component";
import {
  FavoriteComponentsTableComponent
} from "../../shared/tables/favorites-tables/favorite-components-table/favorite-components-table.component";
import {
  FavoriteRoomsTableComponent
} from "../../shared/tables/favorites-tables/favorite-rooms-table/favorite-rooms-table.component";

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

  // is favorite
  isFavorite = false;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private problemManagementConnector: ProblemManagementConnectorService, public authService: AuthServiceService, private route: ActivatedRoute, private dialog: MatDialog, private snackbar: MatSnackBar, translateService: TranslateService) {
    this.translateService = translateService;
  }

  ngOnInit(): void {
    this.rin = String(this.route.snapshot.paramMap.get("rin"));

    let getRoomRequest = new GetRoomRequest();
    getRoomRequest.setIdentificationNumber(this.rin);
    this.buildingManagementConnector.getRoom(getRoomRequest, RoomComponent.interpretGetRoomResponse, this);

    let isFavoriteRequest = new IsFavoriteRequest().setOwner(this.authService.eMail as string).setIdentificationNumber(this.rin);
    this.buildingManagementConnector.isFavorite(isFavoriteRequest, RoomComponent.interpretIsFavoriteResponse,this)
  }

  private static interpretGetRoomResponse(response: GetRoomResponse, self: RoomComponent): void {
    self.room = response.getRoom()?.toObject()!;
  }

  addFavorite(): void {
    let request = new CreateFavoriteRequest();
    request.setOwner(this.authService.eMail as string);
    request.setReferenceIdentificationNumber(this.rin);
    this.isFavorite = true;
    this.buildingManagementConnector.createFavorite(request, RoomComponent.interpretCreateFavoriteResponse, this);
    this.translateService.get('added_favorite').subscribe((res: string) => {
      this.snackbar.open(res, "", {duration: 3500});
    });
  }

  openCreateProblemDialog() {
    const dialogRef = this.dialog.open(AddProblemComponent, {data: this.room.identificationNumber, width: '445px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnector.createProblem(RoomComponent.buildCreateProblemRequest(result), RoomComponent.interpretCreateProblemResponse, this);
      } else {
        return;
      }
    })
  }

  removeFavorite(): void {
    let request = new RemoveFavoriteRequest();
    request.setIdentificationNumber(this.rin);
    request.setOwner(this.authService.eMail as string);
    this.isFavorite = false;
    this.buildingManagementConnector.removeFavorite(request, RoomComponent.interpretRemoveFavoriteResponse, this);
    this.translateService.get('remove_favorite').subscribe((res: string) => {
      this.snackbar.open(res, "", {duration: 3500});
    });
  }

  private static interpretRemoveFavoriteResponse(id: string, self: FavoriteBuildingsTableComponent | FavoriteComponentsTableComponent | FavoriteRoomsTableComponent | BuildingComponent | RoomComponent | ComponentComponent): void {
    if (self instanceof RoomComponent) {
      self.isFavorite = false;
    }
  }

  private static interpretCreateFavoriteResponse(response: CreateFavoriteResponse, self: any): void {
  }

  private static interpretCreateProblemResponse(response: CreateProblemResponse, self: any): void {
    return;
  }

  private static interpretIsFavoriteResponse(response: IsFavoriteResponse, self: BuildingComponent | RoomComponent | ComponentComponent): void {
    self.isFavorite = response.getIsFavorite();
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
