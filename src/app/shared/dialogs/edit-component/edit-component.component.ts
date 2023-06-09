import {Component, Inject, NgZone, ViewChild} from '@angular/core';

import {GrpcComponent, GrpcComponentType} from '../../../../proto/generated/building_management_pb'
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CdkTextareaAutosize} from "@angular/cdk/text-field";

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent {

  componentDescription !: string;
  componentType !: GrpcComponentType;
  longitude !: number;
  latitude !: number;
  identificationNumber!: string;
  parentIdentificationNumber!: string;

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  componentTypes = Object.values(GrpcComponentType);

  constructor(public dialogRef: MatDialogRef<EditComponentComponent>, private _ngZone: NgZone, @Inject(MAT_DIALOG_DATA) public data: GrpcComponent.AsObject) {
    this.dialogRef.disableClose = true;
    this.componentDescription = data.componentDescription;
    this.identificationNumber = data.identificationNumber;
    this.longitude = this.data.grpcGeographicalLocation?.longitude!;
    this.latitude = this.data.grpcGeographicalLocation?.latitude!;
    this.parentIdentificationNumber = data.parentIdentificationNumber;
    this.componentType = data.componentType;
    this.componentTypes = this.componentTypes.filter(e => e != 0);
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        componentDescription: this.componentDescription,
        componentType: this.componentType,
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
