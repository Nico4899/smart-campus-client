import {Component, Input, OnInit} from '@angular/core';
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {
  GetRoomResponse,
  GrpcComponent,
  GrpcNotification,
  GrpcRoom, ListComponentsResponse, ListNotificationsResponse
} from "../../../proto/generated/building_management_pb";
import {ComponentComponent} from "../component/component.component";
import {BuildingComponent} from "../building/building.component";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rin: string = "";

  room: GrpcRoom = new GrpcRoom();
  cDataSource: MatTableDataSource<GrpcComponent> = new MatTableDataSource<GrpcComponent>();
  nDataSource: MatTableDataSource<GrpcNotification> = new MatTableDataSource<GrpcNotification>();

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.rin = String(this.route.snapshot.paramMap.get("rin"));
    this.buildingManagementConnector.listComponents(this.rin, RoomComponent.interpretListComponentsResponse, this);
    this.buildingManagementConnector.listNotifications(this.rin, RoomComponent.interpretListNotificationsResponse, this);
    this.buildingManagementConnector.getRoom(this.rin, RoomComponent.interpretGetRoomResponse, this);
  }

  private static interpretListComponentsResponse(response: ListComponentsResponse, self: BuildingComponent | RoomComponent): void {
    self.cDataSource = new MatTableDataSource<GrpcComponent>(response.getComponentsList());
  }

  private static interpretListNotificationsResponse(response: ListNotificationsResponse, self: BuildingComponent | RoomComponent | ComponentComponent): void {
    self.nDataSource = new MatTableDataSource<GrpcNotification>(response.getNotificationsList());
  }

  private static interpretGetRoomResponse(response: GetRoomResponse, self: RoomComponent): void {
    self.room = response.getRoom()!;
  }

}
