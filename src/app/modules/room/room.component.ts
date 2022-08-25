import {Component, Input, OnInit} from '@angular/core';
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {GrpcComponent, GrpcNotification, GrpcRoom} from "../../../proto/generated/building_management_pb";
import {ComponentComponent} from "../component/component.component";
import {BuildingComponent} from "../building/building.component";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rin: string | undefined;

  @Input() room: GrpcRoom | undefined;
  @Input() components: GrpcComponent[] | undefined;
  @Input() notifications: GrpcNotification[] | undefined;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.rin = String(this.route.snapshot.paramMap.get("rin"));
    this.buildingManagementConnector.listComponents(this.rin, this.setComponents, this);
    this.buildingManagementConnector.listNotifications(this.rin, this.setNotifications, this);
    this.buildingManagementConnector.getRoom(this.rin, this.setRoom, this);
  }

  setComponents(components: GrpcComponent[] | undefined, self: BuildingComponent | RoomComponent): void {
    self.components = components;
  }

  setNotifications(notifications: GrpcNotification[] | undefined, self: BuildingComponent | RoomComponent | ComponentComponent): void {
    self.notifications = notifications;
  }

  setRoom(room: GrpcRoom | undefined, self: RoomComponent): void {
    self.room = room;
  }

}
