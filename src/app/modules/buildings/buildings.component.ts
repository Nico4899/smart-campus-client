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
    this.buildingManagementConnector.listBuildings(this.setBuildings, this);
  }

  setBuildings(buildings: GrpcBuilding[] | undefined, self: BuildingsComponent): void {
    self.buildings = buildings;
  }

}
