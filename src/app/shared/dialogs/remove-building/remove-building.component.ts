import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-remove-building',
  templateUrl: './remove-building.component.html',
  styleUrls: ['./remove-building.component.css']
})
export class RemoveBuildingComponent {



  identificationNumber!: string;

  constructor(public dialogRef: MatDialogRef<RemoveBuildingComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
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
