import { Pipe, PipeTransform } from '@angular/core';
import {
    GrpcComponentType
} from "../../../../proto/generated/building_management_pb";

@Pipe({
  name: 'componentType'
})
export class ComponentTypePipe implements PipeTransform {

  transform(value: GrpcComponentType, ...args: unknown[]): unknown {
    switch (value) {
      case GrpcComponentType.ELEVATOR: return "Elevator"
      case GrpcComponentType.STAIRS: return "Stairs"
      default: return "N/A"
    }
  }

}
