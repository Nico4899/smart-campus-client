import {Pipe, PipeTransform} from '@angular/core';
import {
  GrpcCampusLocation
} from "../../../../proto/generated/building_management_pb";

@Pipe({
  name: 'campusLocation'
})
export class CampusLocationPipe implements PipeTransform {

  transform(value: GrpcCampusLocation, ...args: unknown[]): unknown {
    switch (value) {
      case GrpcCampusLocation.EAST_CAMPUS: return "East Campus"
      case GrpcCampusLocation.NORTH_CAMPUS: return "North Campus"
      case GrpcCampusLocation.WEST_CAMPUS: return "West Campus"
      case GrpcCampusLocation.SOUTH_CAMPUS: return "South Campus"
      default: return "N/A"
    }
  }
}
