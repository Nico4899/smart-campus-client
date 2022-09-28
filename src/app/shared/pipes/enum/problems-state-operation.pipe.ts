import {Pipe, PipeTransform} from '@angular/core';
import {
  GrpcStateOperation
} from "../../../../proto/generated/problem_management_pb";
import {TranslateService} from "@ngx-translate/core";

@Pipe({
  name: 'problemsStateOperation'
})
export class ProblemsStateOperationPipe implements PipeTransform {

  translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
  }

  transform(value: GrpcStateOperation, ...args: unknown[]): unknown {
    let key = ''
    switch (value) {
      case GrpcStateOperation.ACCEPT:
        key = 'problem_state_operation_pipe.accept'
        break
      case GrpcStateOperation.APPROACH:
        key = 'problem_state_operation_pipe.approach'
        break
      case GrpcStateOperation.CLOSE:
        key = 'problem_state_operation_pipe.close'
        break
      case GrpcStateOperation.DECLINE:
        key = 'problem_state_operation_pipe.decline'
        break
      case GrpcStateOperation.HOLD:
        key = 'problem_state_operation_pipe.hold'
        break
    }
    let result;
    this.translateService.get(key).subscribe((res: string) => {
      result = res
    });
    return result
  }

}
