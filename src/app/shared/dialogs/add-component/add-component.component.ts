import {Component} from '@angular/core';

import {GrpcComponentType} from '../../../../proto/generated/building_management_pb'

import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent {

  componentDescription !: string;
  componentType !: GrpcComponentType;
  longitude !: number;
  latitude !: number;

  componentTypes = Object.values(GrpcComponentType);

  constructor(public dialogRef: MatDialogRef<AddComponentComponent>) {
    this.dialogRef.disableClose = true;
    this.componentTypes = this.componentTypes.filter(e => e != 0);
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        componentDescription: this.componentDescription,
        componentType: this.componentType,
        longitude: this.longitude,
        latitude: this.latitude
      }
    })
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }
}
