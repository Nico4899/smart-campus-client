import {Component, OnInit} from '@angular/core';
import {
  CreateFavoriteRequest,
  CreateFavoriteResponse,
  GetBuildingRequest,
  GetBuildingResponse,
  GrpcBuilding, IsFavoriteRequest, IsFavoriteResponse, RemoveFavoriteRequest
} from "../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {AuthServiceService} from 'src/app/core/authentication/auth-service.service';
import {ProblemManagementConnectorService} from 'src/app/core/connectors/problem-management-connector.service';
import {MatDialog} from '@angular/material/dialog';
import {CreateProblemRequest, CreateProblemResponse} from 'src/proto/generated/problem_management_pb';
import {AddProblemComponent} from 'src/app/shared/dialogs/add-problem/add-problem.component';
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";
import {RoomComponent} from "../room/room.component";
import {ComponentComponent} from "../component/component.component";
import {RemoveFavoriteComponent} from "../../shared/dialogs/remove-favorite/remove-favorite.component";
import {
  FavoriteComponentsTableComponent
} from "../../shared/tables/favorites-tables/favorite-components-table/favorite-components-table.component";
import {
  FavoriteRoomsTableComponent
} from "../../shared/tables/favorites-tables/favorite-rooms-table/favorite-rooms-table.component";
import {
  FavoriteBuildingsTableComponent
} from "../../shared/tables/favorites-tables/favorite-buildings-table/favorite-buildings-table.component";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  translateService: TranslateService;

  // map variables
  zoom = 15;
  center: google.maps.LatLngLiteral = {
    lat: 49.0119,
    lng: 8.4170
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
  };

  marker = {
    position: {
      lat: 49.0119,
      lng: 8.4170
    },
    label: {
      color: 'red',
      text: ' '
    },
    title: 'Title',
    options: {
      icon: {
        url: '../../assets/images/marker.png',
        scaledSize: new google.maps.Size(23, 33)
      },
      draggable: false
    }
  }

  // is favorite
  isFavorite = false;

  // path variable
  bin: string = "";


  // main object
  building: GrpcBuilding.AsObject = new GrpcBuilding().toObject();

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private problemManagementConnector: ProblemManagementConnectorService, public authService: AuthServiceService, private route: ActivatedRoute, private dialog: MatDialog, private snackbar: MatSnackBar, translateService: TranslateService) {
    // inject building management client and current rout to obtain path variables
    this.translateService = translateService;
  }

  ngOnInit(): void {

    // obtain path variables
    this.bin = String(this.route.snapshot.paramMap.get("bin"));

    // run initial calls
    let getBuildingRequest = new GetBuildingRequest();
    getBuildingRequest.setIdentificationNumber(this.bin);
    this.buildingManagementConnector.getBuilding(getBuildingRequest, BuildingComponent.interpretGetBuildingResponse, this);

    let isFavoriteRequest = new IsFavoriteRequest().setOwner(this.authService.eMail as string).setIdentificationNumber(this.bin);
    this.buildingManagementConnector.isFavorite(isFavoriteRequest, BuildingComponent.interpretIsFavoriteResponse,this)
  }

  // private callback methods for api calls
  private static interpretGetBuildingResponse(response: GetBuildingResponse, self: BuildingComponent): void {
    self.building = response.getGrpcBuilding()?.toObject()!;

    self.marker.position = {
      lat: self.building.grpcGeographicalLocation!.latitude,
      lng: self.building.grpcGeographicalLocation!.longitude
    };
    self.center = {
      lat: self.building.grpcGeographicalLocation!.latitude,
      lng: self.building.grpcGeographicalLocation!.longitude
    };
    self.marker.title = self.building.buildingName;
    self.marker.label.text = self.building.buildingName;

  }

  addFavorite(): void {
    let request = new CreateFavoriteRequest();
    request.setOwner(this.authService.eMail as string);
    request.setReferenceIdentificationNumber(this.bin);
    this.isFavorite = true;
    this.buildingManagementConnector.createFavorite(request, BuildingComponent.interpretCreateFavoriteResponse, this);
    this.translateService.get('added_favorite').subscribe((res: string) => {
      this.snackbar.open(res, "", {duration: 3500});
    });
  }

  openCreateProblemDialog() {
    const dialogRef = this.dialog.open(AddProblemComponent, {data: this.building.identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnector.createProblem(BuildingComponent.buildCreateProblemRequest(result), BuildingComponent.interpretCreateProblemResponse, this);
      } else {
        return;
      }
    })
  }

  removeFavorite(): void {
    let request = new RemoveFavoriteRequest();
    request.setIdentificationNumber(this.bin);
    request.setOwner(this.authService.eMail as string);
    this.isFavorite = false;
    this.buildingManagementConnector.removeFavorite(request, BuildingComponent.interpretRemoveFavoriteResponse, this);
    this.translateService.get('remove_favorite').subscribe((res: string) => {
      this.snackbar.open(res, "", {duration: 3500});
    });
  }

  private static buildRemoveRequest(result: any, email: string): RemoveFavoriteRequest {
    let request = new RemoveFavoriteRequest();
    request.setIdentificationNumber(result.data.identificationNumber);
    request.setOwner(email);
    return request;
  }

  private static interpretRemoveFavoriteResponse(id: string, self: FavoriteBuildingsTableComponent | FavoriteComponentsTableComponent | FavoriteRoomsTableComponent | BuildingComponent | RoomComponent | ComponentComponent): void {
    if (self instanceof BuildingComponent) {
      self.isFavorite = false;
    }
  }

  private static interpretCreateFavoriteResponse(response: CreateFavoriteResponse, self: any): void {
  }

  private static interpretIsFavoriteResponse(response: IsFavoriteResponse, self: BuildingComponent | RoomComponent | ComponentComponent): void {
    self.isFavorite = response.getIsFavorite();
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
