import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-remove-component',
  templateUrl: './remove-component.component.html',
  styleUrls: ['./remove-component.component.css']
})
export class RemoveComponentComponent {

  identificationNumber!: string;

  constructor(public dialogRef: MatDialogRef<RemoveComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.dialogRef.disableClose = true;
    this.identificationNumber = data;
  }

  ok() {
    this.dialogRef.close({
      event: 'ok', data: {identificationNumber: this.identificationNumber}
    });
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }


}
