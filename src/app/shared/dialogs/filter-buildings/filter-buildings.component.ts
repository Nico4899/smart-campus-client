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

  allCLComplete: boolean = false;
  allRTComplete: boolean = false;
  allCTComplete: boolean = false;

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

  updateAllComplete(selection: string) {
    switch (selection) {
      case 'cl': {
        this.allCLComplete = this.selectedCampusLocations != null && this.selectedCampusLocations.every(e => e.selected);
        break;
      }
      case 'rt': {
        this.allRTComplete = this.selectedRoomTypes != null && this.selectedRoomTypes.every(e => e.selected);
        break;
      }
      case 'ct': {
        this.allCTComplete = this.selectedComponentTypes != null && this.selectedComponentTypes.every(e => e.selected);
        break;
      }
    }
  }

  someComplete(selection: string): boolean {
    switch (selection) {
      case 'cl': {
        if (this.selectedCampusLocations == null) {
          return false;
        }
        return this.selectedCampusLocations.filter(e => e.selected).length > 0 && !this.allCLComplete;
      }
      case 'rt': {
        if (this.selectedRoomTypes == null) {
          return false;
        }
        return this.selectedRoomTypes.filter(e => e.selected).length > 0 && !this.allRTComplete;
      }
      case 'ct': {
        if (this.selectedComponentTypes == null) {
          return false;
        }
        return this.selectedComponentTypes.filter(e => e.selected).length > 0 && !this.allCTComplete;
      }
    }
    return false;
  }

  setAll(completed: boolean, selection: string) {
    switch (selection) {
      case 'cl': {
        this.allCLComplete = completed;
        if (this.selectedCampusLocations == null) {
          return;
        }
        this.selectedCampusLocations.forEach(t => (t.selected = completed));
        break;
      }
      case 'rt': {
        this.allRTComplete = completed;
        if (this.selectedRoomTypes == null) {
          return;
        }
        this.selectedRoomTypes.forEach(t => (t.selected = completed));
        break;
      }
      case 'ct': {
        this.allCTComplete = completed;
        if (this.selectedComponentTypes == null) {
          return;
        }
        this.selectedComponentTypes.forEach(t => (t.selected = completed));
        break;
      }
    }
  }
}
