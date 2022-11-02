import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-remove-favorite',
  templateUrl: './remove-favorite.component.html',
  styleUrls: ['./remove-favorite.component.css']
})
export class RemoveFavoriteComponent {

  identificationNumber!: string;

  constructor(public dialogRef: MatDialogRef<RemoveFavoriteComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
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
