import {Component, OnInit} from '@angular/core';
import {GetBuildingRequest, GetBuildingResponse, GrpcBuilding} from "../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

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
  }

  // private callback methods for api calls
  private static interpretGetBuildingResponse(response: GetBuildingResponse, self: BuildingComponent): void {
    self.building = response.getGrpcBuilding()?.toObject()!;
  }
}
