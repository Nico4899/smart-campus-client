import { Pipe, PipeTransform } from '@angular/core';
import {
    GrpcComponentType
} from "../../../../proto/generated/building_management_pb";
import {TranslateService} from "@ngx-translate/core";

@Pipe({
  name: 'componentType'
})
export class ComponentTypePipe implements PipeTransform {

  translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
  }

  transform(value: GrpcComponentType | string, ...args: unknown[]): unknown {
    let key = '';
    switch (value) {
      case GrpcComponentType.ELEVATOR:
        key = 'component_type_pipe.elevator'
        break
      case GrpcComponentType.STAIRS:
        key = 'component_type_pipe.stairs'
        break
    }

    let result;
    this.translateService.get(key).subscribe((res: string) => {
      result = res
    });
    return result
  }
}
