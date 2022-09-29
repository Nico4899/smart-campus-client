import {Component, Inject} from '@angular/core';

import {GrpcProblemState} from '../../../../proto/generated/problem_management_pb'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'


@Component({
  selector: 'app-filter-problems',
  templateUrl: './filter-problems.component.html',
  styleUrls: ['./filter-problems.component.css']
})
export class FilterProblemsComponent {

  selectedStates: { state: GrpcProblemState, selected: boolean } [] = [];

  constructor(public dialogRef: MatDialogRef<FilterProblemsComponent>, @Inject(MAT_DIALOG_DATA) public data: {
    selectedStates: { state: GrpcProblemState, selected: boolean }[];
  }) {
    this.dialogRef.disableClose = true;
    this.selectedStates = data.selectedStates;
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        problemStates: this.selectedStates
      }
    });
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }
}
