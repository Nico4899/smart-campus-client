import {Component, Input, OnInit} from '@angular/core';
import {GrpcComponent, GrpcNotification} from "../../../proto/generated/building_management_pb";
import {RoomComponent} from "../room/room.component";
import {BuildingComponent} from "../building/building.component";
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  cin: string | undefined;

  @Input() notifications: GrpcNotification[] | undefined;
  @Input() component: GrpcComponent | undefined;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cin = String(this.route.snapshot.paramMap.get("cin"));
    this.buildingManagementConnector.listNotifications(this.cin, this.setNotifications, this);
    this.buildingManagementConnector.getComponent(this.cin, this.setComponent, this);
  }

  setNotifications(notifications: GrpcNotification[] | undefined, self: BuildingComponent | RoomComponent | ComponentComponent): void {
    self.notifications = notifications;
  }

  setComponent(component: GrpcComponent | undefined, self: ComponentComponent): void {
    self.component = component;
  }
}
