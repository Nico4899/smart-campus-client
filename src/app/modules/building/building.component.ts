import {Component, OnInit} from '@angular/core';
import {
  CreateFavoriteRequest, CreateFavoriteResponse, GetBuildingRequest, GetBuildingResponse, GrpcBuilding} from "../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";

import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps'
import { AuthServiceService } from 'src/app/core/authentication/auth-service.service';



@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

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
      text: ''
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

  constructor(private buildingManagementConnector: BuildingManagementConnectorService,public authService: AuthServiceService, private route: ActivatedRoute) {
    // inject building management client and current rout to obtain path variables
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
    const id = this.building.identificationNumber;
    const owner: string = this.authService.name as string;

    let request = new CreateFavoriteRequest();
    request.setOwner(this.authService.name as string);
    request.setReferenceIdentificationNumber(this.bin);
    this.buildingManagementConnector.createFavorite(request, BuildingComponent.interpretCreateFavoriteResponse, this);

  }


  private static interpretCreateFavoriteResponse(response: CreateFavoriteResponse, self: any): void {
  }


}
