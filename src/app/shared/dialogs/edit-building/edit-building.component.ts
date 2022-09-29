import {Component, Inject} from '@angular/core';
import {
  GrpcBuilding,
  GrpcCampusLocation
} from "../../../../proto/generated/building_management_pb";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-building',
  templateUrl: './edit-building.component.html',
  styleUrls: ['./edit-building.component.css']
})
export class EditBuildingComponent {

  highestFloor!: number;
  lowestFloor!: number;
  buildingName!: string;
  buildingNumber!: string;
  campusLocation!: GrpcCampusLocation;
  longitude!: number;
  latitude!: number;
  identificationNumber!: string;
  address!: string;

  campusLocations = Object.values(GrpcCampusLocation);

  constructor(public dialogRef: MatDialogRef<EditBuildingComponent>, @Inject(MAT_DIALOG_DATA) public data: GrpcBuilding.AsObject) {
    this.dialogRef.disableClose = true;
    this.campusLocations = this.campusLocations.filter(e => e != 0);
    this.buildingName = data.buildingName;
    this.buildingNumber = data.buildingNumber;
    this.highestFloor = data.grpcFloors?.highestFloor!;
    this.lowestFloor = data.grpcFloors?.lowestFloor!;
    this.campusLocation = data.campusLocation;
    this.identificationNumber = data.identificationNumber;
    this.longitude = this.data.grpcGeographicalLocation?.longitude!;
    this.latitude = this.data.grpcGeographicalLocation?.latitude!;
    this.address = this.data.buildingAddress;
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        highestFloor: this.highestFloor,
        lowestFloor: this.lowestFloor,
        buildingName: this.buildingName,
        buildingNumber: this.buildingNumber,
        campusLocation: this.campusLocation,
        longitude: this.longitude,
        latitude: this.latitude,
        identificationNumber: this.identificationNumber,
        address: this.address
      }
    });
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }
}
