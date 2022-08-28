import {Component, Input, OnInit} from '@angular/core';
import {
  GetBuildingResponse,
  GrpcBuilding,
  GrpcComponent,
  GrpcNotification,
  GrpcRoom,
  ListBuildingsResponse,
  ListComponentsResponse,
  ListNotificationsResponse,
  ListRoomsResponse
} from "../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {RoomComponent} from "../room/room.component";
import {ActivatedRoute} from "@angular/router";
import {ComponentComponent} from "../component/component.component";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  bin: string = "";
  rDataSource: MatTableDataSource<GrpcRoom> = new MatTableDataSource<GrpcRoom>();
  cDataSource: MatTableDataSource<GrpcComponent> = new MatTableDataSource<GrpcComponent>();
  nDataSource: MatTableDataSource<GrpcNotification> = new MatTableDataSource<GrpcNotification>();
  building: GrpcBuilding = new GrpcBuilding();

  displayedRoomColumns: string[] = ['name', 'number', 'type'];
  displayedComponentColumns: string[] = ['description', 'type'];
  displayedNotificationColumns: string[] = ['title', 'description', 'created_on', 'last_edited_on'];


  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.bin = String(this.route.snapshot.paramMap.get("bin"));
    this.buildingManagementConnector.listRooms(this.bin, BuildingComponent.interpretListRoomsResponse, this);
    this.buildingManagementConnector.listComponents(this.bin, BuildingComponent.interpretListComponentsResponse, this);
    this.buildingManagementConnector.listNotifications(this.bin, BuildingComponent.interpretListNotificationsResponse, this);
    this.buildingManagementConnector.getBuilding(this.bin, BuildingComponent.interpretGetBuildingResponse, this);

  }

  private static interpretListRoomsResponse(response: ListRoomsResponse, self: BuildingComponent): void {
    self.rDataSource = new MatTableDataSource<GrpcRoom>(response.getRoomsList());
  }

  private static interpretListComponentsResponse(response: ListComponentsResponse, self: BuildingComponent | RoomComponent): void {
    self.cDataSource = new MatTableDataSource<GrpcComponent>(response.getComponentsList());
  }

  private static interpretListNotificationsResponse(response: ListNotificationsResponse, self: BuildingComponent | RoomComponent | ComponentComponent): void {
    self.nDataSource = new MatTableDataSource<GrpcNotification>(response.getNotificationsList());
  }

  private static interpretGetBuildingResponse(response: GetBuildingResponse, self: BuildingComponent): void {
    self.building = response.getGrpcBuilding()!;
  }
}
