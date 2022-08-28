import {Pipe, PipeTransform} from '@angular/core';
import {
  GrpcStateOperation
} from "../../../proto/generated/problem_management_pb";

@Pipe({
  name: 'problemsStateOperation'
})
export class ProblemsStateOperationPipe implements PipeTransform {

  transform(value: GrpcStateOperation, ...args: unknown[]): unknown {
    switch (value) {
      case GrpcStateOperation.ACCEPT: return "Accept"
      case GrpcStateOperation.APPROACH: return "Approach"
      case GrpcStateOperation.CLOSE: return "Close"
      case GrpcStateOperation.DECLINE: return "Decline"
      case GrpcStateOperation.HOLD: return "Hold"
      default: return "N/A"
    }
  }

}
