import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {GrpcBuilding, ListBuildingsResponse} from "../../../proto/generated/building_management_pb";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit, AfterViewInit{
  bDataSource: MatTableDataSource<GrpcBuilding> = new MatTableDataSource<GrpcBuilding>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey: string = "";

  displayedBuildingColumns: string[] = ['id', 'number', 'name', 'address', 'campus_location', 'edit_building', 'delete_building'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService) {
  }

  ngOnInit(): void {
    this.buildingManagementConnector.listBuildings(BuildingsComponent.interpretListBuildingsResponse, this);
  }

  ngAfterViewInit() {
    this.bDataSource.sort = this.sort;
    this.bDataSource.paginator = this.paginator;
  }

  applyFilter() {
    this.bDataSource.filter = this.searchKey?.trim().toLowerCase();
  }

  private static interpretListBuildingsResponse(response: ListBuildingsResponse, self: BuildingsComponent): void {
    self.bDataSource.data = response?.getBuildingsList();
  }
}
