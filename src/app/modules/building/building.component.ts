import {Component, Input, OnInit} from '@angular/core';
import {GrpcBuilding, GrpcComponent, GrpcNotification, GrpcRoom, GrpcGeographicalLocation} from "../../../proto/generated/building_management_pb";
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

  // TODO: delete these three before production
  testlat: string = "49.46800006494457";
  testlon: string = "17.11514008755796";
  testgooglemappage: string = "http://www.google.com/maps/place/" + this.testlat + "," + this.testlon;




  bin: string | undefined;

  @Input() rooms: GrpcRoom[] | undefined;
  @Input() components: GrpcComponent[] | undefined;
  @Input() notifications: GrpcNotification[] | undefined;
  @Input() building: GrpcBuilding | undefined;

  geolocation: GrpcGeographicalLocation | undefined;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.bin = String(this.route.snapshot.paramMap.get("bin"));

    this.buildingManagementConnector.listRooms(this.bin, this.setRooms, this);
    this.buildingManagementConnector.listComponents(this.bin, this.setComponents, this);
    this.buildingManagementConnector.listNotifications(this.bin, this.setNotifications, this);
    this.buildingManagementConnector.getBuilding(this.bin, this.setBuilding, this);

    //if building defined, also get its location
    this.geolocation = ((this.building === undefined)? undefined: this.building.getGrpcGeographicalLocation());

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

  /**
   * returns the maps link to the building position
   * 
   *
   * If somehow invalid, returns google maps homepage
   */
  getMapslink(): string {

    if(this.geolocation === undefined){
      return "https://maps.google.com/";
    }

    var latstring = String(this.geolocation.getLatitude());
    var lonstring = String(this.geolocation.getLongitude());
    return "http://www.google.com/maps/place/" + latstring + "," + lonstring;

  }




}
