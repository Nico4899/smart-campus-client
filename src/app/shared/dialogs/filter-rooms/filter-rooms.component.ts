import {Component, Inject} from '@angular/core';
import {GrpcComponentType, GrpcRoomType} from "../../../../proto/generated/building_management_pb";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-filter-rooms',
  templateUrl: './filter-rooms.component.html',
  styleUrls: ['./filter-rooms.component.css']
})
export class FilterRoomsComponent {

  // selected fields for comp
  selectedComponentTypes: { componentType: GrpcComponentType, selected: boolean }[] = [];
  selectedRoomTypes: { roomType: GrpcRoomType, selected: boolean }[] = [];

  constructor(public dialogRef: MatDialogRef<FilterRoomsComponent>, @Inject(MAT_DIALOG_DATA) public data: {
    selectedComponentTypes: { componentType: GrpcComponentType, selected: boolean }[],
    selectedRoomTypes: { roomType: GrpcRoomType, selected: boolean }[];
  }) {
    // disable close
    this.dialogRef.disableClose = true;

    this.selectedComponentTypes = data.selectedComponentTypes;
    this.selectedRoomTypes = data.selectedRoomTypes
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        componentTypes: this.selectedComponentTypes,
        roomTypes: this.selectedRoomTypes
      }
    });
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }
}
