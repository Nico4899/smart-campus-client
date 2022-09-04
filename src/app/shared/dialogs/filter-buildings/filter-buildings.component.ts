import {Component} from '@angular/core';
import {GrpcCampusLocation, GrpcComponentType, GrpcRoomType} from "../../../../proto/generated/building_management_pb";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-filter-buildings',
  templateUrl: './filter-buildings.component.html',
  styleUrls: ['./filter-buildings.component.css']
})
export class FilterBuildingsComponent {

  // without N/A values
  campusLocations = Object.values(GrpcCampusLocation).filter(e => e != 0) as GrpcCampusLocation[];
  roomTypes = Object.values(GrpcRoomType).filter(e => e != 0) as GrpcRoomType[];
  componentTypes = Object.values(GrpcComponentType).filter(e => e != 0) as GrpcComponentType[];

  // selected fields for comp
  selectedComponentTypes: { componentType: GrpcComponentType, selected: boolean }[] = [];
  selectedRoomTypes: { roomType: GrpcRoomType, selected: boolean }[] = [];
  selectedCampusLocations: { campusLocation: GrpcCampusLocation, selected: boolean }[] = [];

  constructor(public dialogRef: MatDialogRef<FilterBuildingsComponent>) {
    // add all
    this.campusLocations.forEach(e => this.selectedCampusLocations.push({campusLocation: e, selected: false}));
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
        ),
        campusLocations: this.selectedCampusLocations.filter(e => e.selected).map(e => e.campusLocation
        )
      }
    });
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }


}
