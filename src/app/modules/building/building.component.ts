import {Component, OnInit} from '@angular/core';
import {
  CreateFavoriteRequest,
  CreateFavoriteResponse,
  GetBuildingRequest,
  GetBuildingResponse,
  GrpcBuilding
} from "../../../proto/generated/building_management_pb";
import {
  BuildingManagementConnectorService
} from "../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {AuthServiceService} from 'src/app/core/authentication/auth-service.service';
import {
  ProblemManagementConnectorService
} from 'src/app/core/connectors/problem-management-connector.service';
import {MatDialog} from '@angular/material/dialog';
import {
  CreateProblemRequest,
  CreateProblemResponse
} from 'src/proto/generated/problem_management_pb';
import {AddProblemComponent} from 'src/app/shared/dialogs/add-problem/add-problem.component';
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";


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
      icon: '../../assets/images/marker.png',
      draggable: false
    }
  }


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

    // set center of map correctly

    this.center = {
      lat: this.building.grpcGeographicalLocation!.latitude,
      lng: this.building.grpcGeographicalLocation!.longitude
    };

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
        this.translateService.get('reported_problem').subscribe((res: string) => {
          this.snackbar.open(res, "", {duration: 3500});
        });
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
