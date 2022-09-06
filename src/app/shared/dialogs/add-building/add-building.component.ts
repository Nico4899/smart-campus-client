import {Component} from '@angular/core';
import {GrpcCampusLocation} from "../../../../proto/generated/building_management_pb";
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent {

  highestFloor!: number;
  lowestFloor!: number;
  buildingName!: string;
  buildingNumber!: string;
  campusLocation!: GrpcCampusLocation;
  longitude!: number;
  latitude!: number;

  campusLocations = Object.values(GrpcCampusLocation);

  constructor(public dialogRef: MatDialogRef<AddBuildingComponent>) {
    this.dialogRef.disableClose = true;
    this.campusLocations = this.campusLocations.filter(e => e != 0);
  }

  ok() {
    this.dialogRef.close({event: 'ok',
      data: {
        highestFloor: this.highestFloor,
        lowestFloor: this.lowestFloor,
        buildingName: this.buildingName,
        buildingNumber: this.buildingNumber,
        campusLocation: this.campusLocation,
        longitude: this.longitude,
        latitude: this.latitude
      }
    });
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }

}
