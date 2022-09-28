import {Component, Inject, NgZone, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GrpcProblem, GrpcProblemState} from '../../../../proto/generated/problem_management_pb'
import {CdkTextareaAutosize} from "@angular/cdk/text-field";

@Component({
  selector: 'app-edit-problem',
  templateUrl: './edit-problem.component.html',
  styleUrls: ['./edit-problem.component.css']
})
export class EditProblemComponent{

  problemTitle!: string;
  problemDescription!: string;
  problemReporter!: string;
  problemState!: GrpcProblemState;
  referenceIdentificationNumber!: string;
  identificationNumber!: string;

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  constructor(public dialogRef: MatDialogRef<EditProblemComponent>, private _ngZone: NgZone, @Inject(MAT_DIALOG_DATA) public data: GrpcProblem.AsObject) {
    this.dialogRef.disableClose = true;
    this.problemTitle = data.problemTitle;
    this.problemDescription = data.problemDescription;
    this.problemState = data.problemState;
    this.problemReporter = data.problemReporter;
    this.referenceIdentificationNumber = data.referenceIdentificationNumber;
    this.identificationNumber = data.identificationNumber;
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        problemTitle: this.problemTitle,
        problemDescription: this.problemDescription,
        problemState: this.problemState,
        problemReporter: this.problemReporter,
        referenceIdentificationNumber: this.referenceIdentificationNumber,
        identificationNumber: this.identificationNumber
      }
    })
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }
}
