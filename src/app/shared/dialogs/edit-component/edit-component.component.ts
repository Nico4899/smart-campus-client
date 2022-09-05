import { Component, Inject } from '@angular/core';

import {GrpcComponentType, GrpcComponent} from '../../../../proto/generated/building_management_pb'

import {FormControl, Validators} from '@angular/forms'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent {

  componentDescription !: string;
  componentType !:GrpcComponentType;

  longitude !: number;
  latitude !: number;

  identificationNumber!: string;

  formControl = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<EditComponentComponent>,@Inject(MAT_DIALOG_DATA) public data: GrpcComponent.AsObject ) {
    this.dialogRef.disableClose = true;

    this.componentDescription = data.componentDescription;

    this.identificationNumber = data.identificationNumber;

    this.longitude = this.data.grpcGeographicalLocation?.longitude!;
    this.latitude = this.data.grpcGeographicalLocation?.latitude!;

  }


  ok(){
    this.dialogRef.close({ event: 'ok',
      data: {
        componentDescription: this.componentDescription,
        componentType: this.componentType,
        longitude: this.longitude,
        latitude: this.latitude
      }})

  }

  cancel(){
    this.dialogRef.close({ event: 'cancel'});
  }



}
