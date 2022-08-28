import { Pipe, PipeTransform } from '@angular/core';
import {GrpcRoomType} from "../../../proto/generated/building_management_pb";

@Pipe({
  name: 'roomType'
})
export class RoomTypePipe implements PipeTransform {

  transform(value: GrpcRoomType, ...args: unknown[]): unknown {
    switch (value) {
      case GrpcRoomType.CAFETERIA: return "Cafeteria"
      case GrpcRoomType.LECTURE_ROOM: return "Lecture Room"
      case GrpcRoomType.LIBRARY: return "Library"
      case GrpcRoomType.OFFICE: return "Office"
      case GrpcRoomType.RESTROOM: return "Restroom"
      case GrpcRoomType.RESTROOM_HANDICAPPED: return "Restroom Handicapped"
      case GrpcRoomType.SEMINAR_ROOM: return "Seminar Room"
      case GrpcRoomType.SPORTS: return "Sports"
      default: return "N/A"
    }
  }

}
