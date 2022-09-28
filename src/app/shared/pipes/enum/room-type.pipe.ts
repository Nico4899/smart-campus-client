import { Pipe, PipeTransform } from '@angular/core';
import {GrpcRoomType} from "../../../../proto/generated/building_management_pb";
import {TranslateService} from "@ngx-translate/core";

@Pipe({
  name: 'roomType'
})
export class RoomTypePipe implements PipeTransform {

  translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this.translateService = translateService;
  }

  transform(value: GrpcRoomType | string, ...args: unknown[]): unknown {
    let key = ''
    switch (value) {
      case GrpcRoomType.CAFETERIA:
        key = 'room_type_pipe.cafeteria'
        break
      case GrpcRoomType.LECTURE_ROOM:
        key = 'room_type_pipe.lecture_room'
        break
      case GrpcRoomType.LIBRARY:
        key = 'room_type_pipe.library'
        break
      case GrpcRoomType.OFFICE:
        key = 'room_type_pipe.office'
        break
      case GrpcRoomType.RESTROOM:
        key = 'room_type_pipe.restroom'
        break
      case GrpcRoomType.RESTROOM_HANDICAPPED:
        key = 'room_type_pipe.restroom_handicapped'
        break
      case GrpcRoomType.SEMINAR_ROOM:
        key = 'room_type_pipe.seminar_room'
        break
      case GrpcRoomType.SPORTS:
        key = 'room_type_pipe.sports'
        break
    }

    let result;
    this.translateService.get(key).subscribe((res: string) => {
      result = res
    });
    return result
  }

}
