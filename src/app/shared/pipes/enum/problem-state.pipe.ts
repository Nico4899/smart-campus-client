import { Pipe, PipeTransform } from '@angular/core';
import {GrpcProblemState} from "../../../../proto/generated/problem_management_pb";
import {TranslateService} from "@ngx-translate/core";

@Pipe({
  name: 'problemState'
})
export class ProblemStatePipe implements PipeTransform {

  translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
  }

  transform(value: GrpcProblemState, ...args: unknown[]): unknown {
    let key = ''
    switch (value) {
      case GrpcProblemState.ACCEPTED:
        key = 'problem_state_pipe.accepted'
        break
      case GrpcProblemState.CLOSED:
        key = 'problem_state_pipe.closed'
        break
      case GrpcProblemState.DECLINED:
        key = 'problem_state_pipe.declined'
        break
      case GrpcProblemState.IN_PROGRESS:
        key = 'problem_state_pipe.in_progress'
        break
      case GrpcProblemState.OPEN:
        key = 'problem_state_pipe.open'
        break
    }

    let result;
    this.translateService.get(key).subscribe((res: string) => {
      result = res
    });
    return result
  }

}
