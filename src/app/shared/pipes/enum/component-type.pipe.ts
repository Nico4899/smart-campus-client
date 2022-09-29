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
      case GrpcComponentType.DOOR:
        key = 'component_type_pipe.door'
        break
      case GrpcComponentType.RAMP:
        key = 'component_type_pipe.ramp'
        break
      case GrpcComponentType.CHAIR:
        key = 'component_type_pipe.chair'
        break
      case GrpcComponentType.LAMP:
        key = 'component_type_pipe.lamp'
        break
      case GrpcComponentType.WINDOW:
        key = 'component_type_pipe.window'
        break
      case GrpcComponentType.CANVAS:
        key = 'component_type_pipe.canvas'
        break
      case GrpcComponentType.WHITEBOARD:
        key = 'component_type_pipe.whiteboard'
        break
      case GrpcComponentType.BEAMER:
        key = 'component_type_pipe.beamer'
        break
      case GrpcComponentType.POWER_OUTLET:
        key = 'component_type_pipe.power_outlet'
        break
      case GrpcComponentType.SINK:
        key = 'component_type_pipe.sink'
        break
      case GrpcComponentType.HEATER:
        key = 'component_type_pipe.heater'
        break
    }

    let result;
    this.translateService.get(key).subscribe((res: string) => {
      result = res
    });
    return result
  }
}
