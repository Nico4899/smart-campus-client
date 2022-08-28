import {Component, Input, OnInit} from '@angular/core';
import {
  GetComponentResponse,
  GrpcComponent,
  GrpcNotification,
  ListNotificationsResponse
} from "../../../proto/generated/building_management_pb";
import {RoomComponent} from "../room/room.component";
import {BuildingComponent} from "../building/building.component";
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  cin: string = "";
  nDataSource: MatTableDataSource<GrpcNotification> = new MatTableDataSource<GrpcNotification>();

  @Input() notifications: GrpcNotification[] | undefined;
  component: GrpcComponent = new GrpcComponent();

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cin = String(this.route.snapshot.paramMap.get("cin"));
    this.buildingManagementConnector.listNotifications(this.cin, ComponentComponent.interpretListNotificationsResponse, this);
    this.buildingManagementConnector.getComponent(this.cin, ComponentComponent.interpretGetComponentResponse, this);
  }

  private static interpretListNotificationsResponse(response: ListNotificationsResponse, self: BuildingComponent | RoomComponent | ComponentComponent): void {
    self.nDataSource = new MatTableDataSource<GrpcNotification>(response.getNotificationsList());
  }

  private static interpretGetComponentResponse(response: GetComponentResponse, self: ComponentComponent): void {
    self.component = response.getComponent()!;
  }
}
