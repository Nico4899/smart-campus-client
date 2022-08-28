import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  BuildingManagementConnectorService
} from "../../shared/connectors/building-management-connector.service";
import {
  GrpcBuilding,
  ListBuildingsResponse
} from "../../../proto/generated/building_management_pb";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  bDataSource: MatTableDataSource<GrpcBuilding> = new MatTableDataSource<GrpcBuilding>();

  displayedBuildingColumns: string[] = ['name', 'number', 'campus_location'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService) {
  }

  ngOnInit(): void {
    this.buildingManagementConnector.listBuildings(BuildingsComponent.interpretListBuildingsResponse, this);
  }

  private static interpretListBuildingsResponse(response: ListBuildingsResponse, self: BuildingsComponent): void {
    self.bDataSource = new MatTableDataSource<GrpcBuilding>(response?.getBuildingsList());
  }
}
