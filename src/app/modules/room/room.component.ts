import {Component, OnInit} from '@angular/core';
import {BuildingManagementConnectorService} from "../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {GetRoomRequest, GetRoomResponse, GrpcRoom} from "../../../proto/generated/building_management_pb";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  // path variable
  rin: string = "";

  // main object
  room: GrpcRoom.AsObject = new GrpcRoom().toObject();

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.rin = String(this.route.snapshot.paramMap.get("rin"));

    let getRoomRequest = new GetRoomRequest();
    getRoomRequest.setIdentificationNumber(this.rin);
    this.buildingManagementConnector.getRoom(getRoomRequest, RoomComponent.interpretGetRoomResponse, this);
  }

  private static interpretGetRoomResponse(response: GetRoomResponse, self: RoomComponent): void {
    self.room = response.getRoom()?.toObject()!;
  }

}
