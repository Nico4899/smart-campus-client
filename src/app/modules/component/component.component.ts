import {Component, OnInit} from '@angular/core';
import {
  CreateFavoriteRequest,
  CreateFavoriteResponse,
  GetComponentRequest,
  GetComponentResponse,
  GrpcComponent, IsFavoriteRequest, IsFavoriteResponse, RemoveFavoriteRequest
} from "../../../proto/generated/building_management_pb";
import {
  BuildingManagementConnectorService
} from "../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {AuthServiceService} from 'src/app/core/authentication/auth-service.service';
import {
  CreateProblemRequest,
  CreateProblemResponse
} from 'src/proto/generated/problem_management_pb';
import {
  ProblemManagementConnectorService
} from 'src/app/core/connectors/problem-management-connector.service';
import {MatDialog} from '@angular/material/dialog';
import {AddProblemComponent} from 'src/app/shared/dialogs/add-problem/add-problem.component';
import {TranslateService} from "@ngx-translate/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RoomComponent} from "../room/room.component";
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
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  translateService: TranslateService;
  // path variable
  cin: string = "";

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  component: GrpcComponent.AsObject = new GrpcComponent().toObject();

  // is favorite
  isFavorite = false;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private problemManagementConnector: ProblemManagementConnectorService, public authService: AuthServiceService, private route: ActivatedRoute, private dialog: MatDialog, private snackbar: MatSnackBar, translateService: TranslateService) {
    this.translateService = translateService;
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {

    // obtain path variables
    this.cin = String(this.route.snapshot.paramMap.get("cin"));

    // run initial calls
    let getComponentRequest = new GetComponentRequest();
    getComponentRequest.setIdentificationNumber(this.cin);
    this.buildingManagementConnector.getComponent(getComponentRequest, ComponentComponent.interpretGetComponentResponse, this);

    let isFavoriteRequest = new IsFavoriteRequest().setOwner(this.authService.eMail as string).setIdentificationNumber(this.cin);
    this.buildingManagementConnector.isFavorite(isFavoriteRequest, ComponentComponent.interpretIsFavoriteResponse,this)
  }

  // private callback methods for api calls
  private static interpretGetComponentResponse(response: GetComponentResponse, self: ComponentComponent): void {
    self.component = response.getComponent()?.toObject()!;
  }

  addFavorite(): void {
    let request = new CreateFavoriteRequest();
    request.setOwner(this.authService.eMail as string);
    request.setReferenceIdentificationNumber(this.cin);
    this.isFavorite = true;
    this.buildingManagementConnector.createFavorite(request, ComponentComponent.interpretCreateFavoriteResponse, this);
    this.translateService.get('added_favorite').subscribe((res: string) => {
      this.snackbar.open(res, "", {duration: 3500});
    });
  }

  openCreateProblemDialog() {
    const dialogRef = this.dialog.open(AddProblemComponent, {data: this.component.identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnector.createProblem(ComponentComponent.buildCreateProblemRequest(result), ComponentComponent.interpretCreateProblemResponse, this);
      } else {
        return;
      }
    })
  }

  removeFavorite(): void {
    let request = new RemoveFavoriteRequest();
    request.setIdentificationNumber(this.cin);
    request.setOwner(this.authService.eMail as string);
    this.isFavorite = false;
    this.buildingManagementConnector.removeFavorite(request, ComponentComponent.interpretRemoveFavoriteResponse, this);
    this.translateService.get('remove_favorite').subscribe((res: string) => {
      this.snackbar.open(res, "", {duration: 3500});
    });
  }

  private static interpretRemoveFavoriteResponse(id: string, self: FavoriteBuildingsTableComponent | FavoriteComponentsTableComponent | FavoriteRoomsTableComponent | BuildingComponent | RoomComponent | ComponentComponent): void {
    if (self instanceof ComponentComponent) {
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
