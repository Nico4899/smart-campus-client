import {Component, Input, OnInit} from '@angular/core';
import {GrpcBuilding, GrpcComponent, GrpcNotification, GrpcRoom} from "../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {RoomComponent} from "../room/room.component";
import {ActivatedRoute} from "@angular/router";
import {ComponentComponent} from "../component/component.component";
//gmaps necessary inputs
import {Loader} from '@googlemaps/js-api-loader'


@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {



  lat: string = "49.46800006494457";
  lon: string = "17.11514008755796";

  googlemappage: string = "http://www.google.com/maps/place/" + this.lat + "," + this.lon;




  bin: string | undefined;

  @Input() rooms: GrpcRoom[] | undefined;
  @Input() components: GrpcComponent[] | undefined;
  @Input() notifications: GrpcNotification[] | undefined;
  @Input() building: GrpcBuilding | undefined;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.bin = String(this.route.snapshot.paramMap.get("bin"));
    this.buildingManagementConnector.listRooms(this.bin, this.setRooms, this);
    this.buildingManagementConnector.listComponents(this.bin, this.setComponents, this);
    this.buildingManagementConnector.listNotifications(this.bin, this.setNotifications, this);
    this.buildingManagementConnector.getBuilding(this.bin, this.setBuilding, this);

  }

  setRooms(rooms: GrpcRoom[] | undefined, self: BuildingComponent): void {
    self.rooms = rooms;
  }

  setComponents(components: GrpcComponent[] | undefined, self: BuildingComponent | RoomComponent): void {
    self.components = components;
  }

  setNotifications(notifications: GrpcNotification[] | undefined, self: BuildingComponent | RoomComponent | ComponentComponent): void {
    self.notifications = notifications;
  }

  setBuilding(building: GrpcBuilding | undefined, self: BuildingComponent): void {
    self.building = building;
  }



}
