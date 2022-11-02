import {Pipe, PipeTransform} from '@angular/core';
import {GrpcCampusLocation} from "../../../../proto/generated/building_management_pb";
import {TranslateService} from "@ngx-translate/core";

@Pipe({
  name: 'campusLocation'
})
export class CampusLocationPipe implements PipeTransform {

  translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
  }

  transform(value: GrpcCampusLocation | string, ...args: unknown[]): unknown {
    let key = ''
    switch (value) {
      case GrpcCampusLocation.EAST_CAMPUS:
        key = 'campus_location_pipe.east_campus'
        break
      case GrpcCampusLocation.NORTH_CAMPUS:
        key = 'campus_location_pipe.north_campus'
        break
      case GrpcCampusLocation.WEST_CAMPUS:
        key = 'campus_location_pipe.west_campus'
        break
      case GrpcCampusLocation.SOUTH_CAMPUS:
        key = 'campus_location_pipe.south_campus'
        break
    }

    let result;
    this.translateService.get(key).subscribe((res: string) => {
      result = res
    });
    return result
  }
}
