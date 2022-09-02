import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {
  GetRoomRequest,
  GetRoomResponse,
  GrpcComponent,
  GrpcNotification,
  GrpcRoom, ListComponentsRequest, ListComponentsResponse, ListNotificationsRequest, ListNotificationsResponse
} from "../../../proto/generated/building_management_pb";
import {BuildingComponent} from "../building/building.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ComponentComponent} from "../component/component.component";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, AfterViewInit {

  rin: string = "";

  room: GrpcRoom = new GrpcRoom();
  cDataSource: MatTableDataSource<GrpcComponent> = new MatTableDataSource<GrpcComponent>();
  nDataSource: MatTableDataSource<GrpcNotification> = new MatTableDataSource<GrpcNotification>();

  @ViewChild(MatSort) nSort!: MatSort;
  @ViewChild(MatSort) cSort!: MatSort;
  @ViewChild(MatPaginator) nPaginator!: MatPaginator;
  @ViewChild(MatPaginator) cPaginator!: MatPaginator;

  cSearchKey: string = "";

  displayedComponentColumns: string[] = ['component-id', 'component-type', 'edit_component', 'delete_component'];
  displayedNotificationColumns: string[] = ['notification-id', 'notification-title', 'created_on', 'last_edited_on'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.rin = String(this.route.snapshot.paramMap.get("rin"));

    let listComponentsRequest = new ListComponentsRequest();
    listComponentsRequest.setIdentificationNumber(this.rin);
    this.buildingManagementConnector.listComponents(listComponentsRequest, RoomComponent.interpretListComponentsResponse, this);

    let listNotificationsRequest = new ListNotificationsRequest();
    listNotificationsRequest.setIdentificationNumber(this.rin);
    this.buildingManagementConnector.listNotifications(listNotificationsRequest, RoomComponent.interpretListNotificationsResponse, this);

    let getRoomRequest = new GetRoomRequest();
    getRoomRequest.setIdentificationNumber(this.rin);
    this.buildingManagementConnector.getRoom(getRoomRequest, RoomComponent.interpretGetRoomResponse, this);
  }

  ngAfterViewInit() {
    this.nDataSource.sort = this.nSort;
    this.nDataSource.paginator = this.nPaginator;

    this.cDataSource.sort = this.cSort;
    this.cDataSource.paginator = this.cPaginator;
  }

  applySearch() {
    this.cDataSource.filter = this.cSearchKey?.trim().toLowerCase();
  }

  private static interpretListComponentsResponse(response: ListComponentsResponse, self: BuildingComponent | RoomComponent): void {
    self.cDataSource.data = response.getComponentsList();
  }

  private static interpretListNotificationsResponse(response: ListNotificationsResponse, self: BuildingComponent | RoomComponent| ComponentComponent): void {
    self.nDataSource.data = response.getNotificationsList();
  }

  private static interpretGetRoomResponse(response: GetRoomResponse, self: RoomComponent): void {
    self.room = response.getRoom()!;
  }

}
