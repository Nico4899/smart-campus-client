import {Component, OnInit} from '@angular/core';
import {GetBuildingRequest, GetBuildingResponse, GrpcBuilding} from "../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";

import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps'



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
      text: 'Marked Position'
    },
    title: 'Title',
    options: {
      icon: '../../assets/google-maps-pin-icon.png',
      draggable: false
    }
  }





  // path variable
  bin: string = "";





  // main object
  building: GrpcBuilding.AsObject = new GrpcBuilding().toObject();

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
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
    }

    this.marker.position = {
      lat: this.building.grpcGeographicalLocation!.latitude,
      lng: this.building.grpcGeographicalLocation!.longitude
    }

    this.marker.title = this.building.buildingName;
    this.marker.label.text = this.building.buildingName;

  }

  // private callback methods for api calls
  private static interpretGetBuildingResponse(response: GetBuildingResponse, self: BuildingComponent): void {
    self.building = response.getGrpcBuilding()?.toObject()!;
  }
}
