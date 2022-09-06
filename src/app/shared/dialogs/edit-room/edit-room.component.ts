import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

import {FormControl, Validators} from '@angular/forms'

import {GrpcRoomType, GrpcGeographicalLocation, GrpcRoom} from '../../../../proto/generated/building_management_pb'

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent {

  floor !: number;
  roomName!: string;
  roomNumber!: string;
  roomType!: GrpcRoomType;
  longitude!: number;
  latitude!: number;
  identificationNumber!: string;
  parentIdentificationNumber!: string;

  roomTypes = Object.values(GrpcRoomType);

  constructor(public dialogRef: MatDialogRef<EditRoomComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GrpcRoom.AsObject) {
    this.dialogRef.disableClose = true;
    this.roomName = data.roomName;
    this.roomNumber = data.roomNumber;
    this.roomType = data.roomType;
    this.floor = data.floor;
    this.latitude = data.grpcGeographicalLocation?.latitude!;
    this.longitude = data.grpcGeographicalLocation?.longitude!;
    this.identificationNumber = data.identificationNumber;
    this.parentIdentificationNumber = data.parentIdentificationNumber;
    this.roomTypes = this.roomTypes.filter(e => e != 0);
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        roomName: this.roomName,
        roomNumber: this.roomNumber,
        roomType: this.roomType,
        floor: this.floor,
        longitude: this.longitude,
        latitude: this.latitude,
        identificationNumber: this.identificationNumber,
        parentIdentificationNumber: this.parentIdentificationNumber
      }
    })
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }
}
