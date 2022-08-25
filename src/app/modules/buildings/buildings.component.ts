import {Component, Input, OnInit} from '@angular/core';
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {GrpcBuilding} from "../../../proto/generated/building_management_pb";

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  @Input() buildings: GrpcBuilding[] | undefined;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService) {
  }

  ngOnInit(): void {

    let building1 = new GrpcBuilding();
    building1.setBuildingNumber("number 1")
    building1.setBuildingName("name 1")

    let building2 = new GrpcBuilding();
    building2.setBuildingNumber("number 2")
    building2.setBuildingName("name 2")

    let building3 = new GrpcBuilding();
    building3.setBuildingNumber("number 3")
    building3.setBuildingName("name 3")

    let building4 = new GrpcBuilding();
    building4.setBuildingNumber("number 4")
    building4.setBuildingName("name 4")

    let building5 = new GrpcBuilding();
    building5.setBuildingNumber("number 5")
    building5.setBuildingName("name 5")
      //this.buildingManagementConnector.listBuildings(this.setBuildings, this)
      this.buildings = [building1, building2, building3, building4, building5];
  }

  setBuildings(buildings: GrpcBuilding[] | undefined, self: BuildingsComponent): void {
    self.buildings = buildings;
  }

}
