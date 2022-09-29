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

  allRTComplete: boolean = true;
  allCTComplete: boolean = true;

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

  updateAllComplete(selection: string) {
    switch (selection) {
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
