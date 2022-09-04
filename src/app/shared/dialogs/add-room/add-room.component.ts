import { Component, OnInit } from '@angular/core';

import {GrpcRoomType} from '../../../../proto/generated/building_management_pb'

import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {

  floor !: number;

  roomName!: string;
  roomNumber!: string;

  roomType!: GrpcRoomType;

  roomTypes = Object.values(GrpcRoomType);

  formControl = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<AddRoomComponent>) {
    this.dialogRef.disableClose = true;
    this.roomTypes = this.roomTypes.filter(e => e != 0);
  }

  ok() {
    this.dialogRef.close({ event: 'ok',
      data: {
        roomName: this.roomName,
        roomNumber: this.roomNumber,
        roomType: this.roomType,
        floor: this.floor
      }

    });

  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }


}
