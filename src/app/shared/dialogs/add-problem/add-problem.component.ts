import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent {

  problemTitle !: string;
  problemDescription !: string;

  // ID number of the problematic building/room/component/whatever
  correspondingIdentificationNumber !: string;

  constructor(public dialogRef: MatDialogRef<AddProblemComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.correspondingIdentificationNumber = data;
    this.dialogRef.disableClose = true;
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        problemTitle: this.problemTitle,
        problemDescription: this.problemDescription,
        externalIdentifier: this.correspondingIdentificationNumber
      }
    })
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'})
  }
}
