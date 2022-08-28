import { Pipe, PipeTransform } from '@angular/core';
import {GrpcProblemState} from "../../../proto/generated/problem_management_pb";

@Pipe({
  name: 'problemState'
})
export class ProblemStatePipe implements PipeTransform {

  transform(value: GrpcProblemState, ...args: unknown[]): unknown {
    switch (value) {
      case GrpcProblemState.ACCEPTED: return "Accepted"
      case GrpcProblemState.CLOSED: return "Closed"
      case GrpcProblemState.DECLINED: return "Declined"
      case GrpcProblemState.IN_PROGRESS: return "In Progress"
      case GrpcProblemState.OPEN: return "Open"
      default: return "N/A"
    }
  }

}
