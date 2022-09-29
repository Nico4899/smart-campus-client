import {Component, Inject, NgZone, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import {AuthServiceService} from "../../../core/authentication/auth-service.service"
import {CdkTextareaAutosize} from "@angular/cdk/text-field";

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent {

  problemTitle !: string;
  problemDescription !: string;

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  // ID number of the problematic building/room/component/whatever
  referenceIdentificationNumber !: string;

  constructor(public dialogRef: MatDialogRef<AddProblemComponent>, private _ngZone: NgZone, public authService: AuthServiceService, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.referenceIdentificationNumber = data;
    this.dialogRef.disableClose = true;
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        problemTitle: this.problemTitle,
        problemDescription: this.problemDescription,
        referenceIdentificationNumber: this.referenceIdentificationNumber,
        problemReporter: this.authService.eMail
      }
    })
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'})
  }
}
