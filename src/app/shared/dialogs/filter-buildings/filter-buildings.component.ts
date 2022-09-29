import {Component, Inject} from '@angular/core';
import {GrpcCampusLocation, GrpcComponentType, GrpcRoomType} from "../../../../proto/generated/building_management_pb";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-filter-buildings',
  templateUrl: './filter-buildings.component.html',
  styleUrls: ['./filter-buildings.component.css']
})
export class FilterBuildingsComponent {

  // selected fields for comp
  selectedComponentTypes: { componentType: GrpcComponentType, selected: boolean }[] = [];
  selectedRoomTypes: { roomType: GrpcRoomType, selected: boolean }[] = [];
  selectedCampusLocations: { campusLocation: GrpcCampusLocation, selected: boolean }[] = [];

  constructor(public dialogRef: MatDialogRef<FilterBuildingsComponent>, @Inject(MAT_DIALOG_DATA) public data: {
    selectedComponentTypes: { componentType: GrpcComponentType, selected: boolean }[],
    selectedRoomTypes: { roomType: GrpcRoomType, selected: boolean }[],
    selectedCampusLocations: { campusLocation: GrpcCampusLocation, selected: boolean }[];
  }) {
    // disable close
    this.dialogRef.disableClose = true;
    this.selectedComponentTypes = this.data.selectedComponentTypes;
    this.selectedRoomTypes = this.data.selectedRoomTypes;
    this.selectedCampusLocations = this.data.selectedCampusLocations;
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        componentTypes: this.selectedComponentTypes,
        roomTypes: this.selectedRoomTypes,
        campusLocations: this.selectedCampusLocations
      }
    });
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }
}
