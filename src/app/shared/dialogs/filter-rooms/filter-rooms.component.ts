import { Component } from '@angular/core';
import {GrpcCampusLocation, GrpcComponentType, GrpcRoomType} from "../../../../proto/generated/building_management_pb";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-filter-rooms',
  templateUrl: './filter-rooms.component.html',
  styleUrls: ['./filter-rooms.component.css']
})
export class FilterRoomsComponent {

  // without N/A values
  roomTypes = Object.values(GrpcRoomType).filter(e => e != 0) as GrpcRoomType[];
  componentTypes = Object.values(GrpcComponentType).filter(e => e != 0) as GrpcComponentType[];

  // selected fields for comp
  selectedComponentTypes: { componentType: GrpcComponentType, selected: boolean }[] = [];
  selectedRoomTypes: { roomType: GrpcRoomType, selected: boolean }[] = [];

  constructor(public dialogRef: MatDialogRef<FilterRoomsComponent>) {
    // add all constants mapped to false
    // in case it should be remembered, pass as @Inject Data
    this.roomTypes.forEach(e => this.selectedRoomTypes.push({roomType: e, selected: false}));
    this.componentTypes.forEach(e => this.selectedComponentTypes.push({componentType: e, selected: false}));

    // disable close
    this.dialogRef.disableClose = true;
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        componentTypes: this.selectedComponentTypes.filter(e => e.selected).map(e => e.componentType
        ),
        roomTypes: this.selectedRoomTypes.filter(e => e.selected).map(e => e.roomType
        )
      }
    });
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }
}
