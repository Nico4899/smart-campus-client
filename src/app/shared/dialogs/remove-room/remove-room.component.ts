import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-remove-room',
  templateUrl: './remove-room.component.html',
  styleUrls: ['./remove-room.component.css']
})
export class RemoveRoomComponent{

  identificationNumber!: string;

  constructor(public dialogRef: MatDialogRef<RemoveRoomComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
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





  ngOnInit(): void {
  }

}
