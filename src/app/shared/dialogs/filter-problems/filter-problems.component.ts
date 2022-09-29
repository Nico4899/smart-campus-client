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

  allPSComplete: boolean = true;

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

  updateAllComplete(selection: string) {
    switch (selection) {
      case 'ps': {
        this.allPSComplete = this.selectedStates != null && this.selectedStates.every(e => e.selected);
        break;
      }
    }
  }

  someComplete(selection: string): boolean {
    switch (selection) {
      case 'ps': {
        if (this.selectedStates == null) {
          return false;
        }
        return this.selectedStates.filter(e => e.selected).length > 0 && !this.allPSComplete;
      }
    }
    return false;
  }

  setAll(completed: boolean, selection: string) {
    switch (selection) {
      case 'ps': {
        this.allPSComplete = completed;
        if (this.selectedStates == null) {
          return;
        }
        this.selectedStates.forEach(t => (t.selected = completed));
        break;
      }
    }
  }
}
