import {Component} from '@angular/core';

import {GrpcProblemState} from '../../../../proto/generated/problem_management_pb'
import {MatDialogRef} from '@angular/material/dialog'


@Component({
  selector: 'app-filter-problems',
  templateUrl: './filter-problems.component.html',
  styleUrls: ['./filter-problems.component.css']
})
export class FilterProblemsComponent {

  problemState = Object.values(GrpcProblemState).filter(e => e != 0) as GrpcProblemState[];

  selectedStates: { state: GrpcProblemState, selected: boolean } [] = [];

  constructor(public dialogRef: MatDialogRef<FilterProblemsComponent>) {
    this.problemState.forEach(e => this.selectedStates.push({state: e, selected: false}));
    this.dialogRef.disableClose = true;
  }

  ok() {
    this.dialogRef.close({
      event: 'ok',
      data: {
        problemStates: this.selectedStates.filter(e => e.selected).map(e => e.state)
      }
    });
  }

  cancel() {
    this.dialogRef.close({event: 'cancel'});
  }
}
