import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {
  GetBuildingRequest,
  GetBuildingResponse,
  GrpcBuilding,
  GrpcComponent,
  GrpcNotification,
  GrpcRoom, ListBuildingsRequest, ListComponentsRequest,
  ListComponentsResponse, ListNotificationsRequest,
  ListNotificationsResponse, ListRoomsRequest,
  ListRoomsResponse
} from "../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {RoomComponent} from "../room/room.component";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  bin: string = "";
  rDataSource: MatTableDataSource<GrpcRoom> = new MatTableDataSource<GrpcRoom>();
  cDataSource: MatTableDataSource<GrpcComponent> = new MatTableDataSource<GrpcComponent>();
  nDataSource: MatTableDataSource<GrpcNotification> = new MatTableDataSource<GrpcNotification>();
  building: GrpcBuilding = new GrpcBuilding();

  @ViewChildren(MatSort) sort = new QueryList<MatSort>();
  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  rSearchKey: string = "";
  cSearchKey: string = "";

  displayedRoomColumns: string[] = ['room-id', 'room-number', 'room-name', 'room-floor', 'room-type', 'edit_room', 'delete_room'];
  displayedComponentColumns: string[] = ['component-id', 'component-type', 'edit_component', 'delete_component'];
  displayedNotificationColumns: string[] = ['notification-id', 'notification-title', 'created_on', 'last_edited_on'];


  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.bin = String(this.route.snapshot.paramMap.get("bin"));

    let listRoomsRequest = new ListRoomsRequest();
    listRoomsRequest.setIdentificationNumber(this.bin);
    this.buildingManagementConnector.listRooms(listRoomsRequest, BuildingComponent.interpretListRoomsResponse, this);

    let listComponentsRequest = new ListComponentsRequest();
    listComponentsRequest.setIdentificationNumber(this.bin);
    this.buildingManagementConnector.listComponents(listComponentsRequest, BuildingComponent.interpretListComponentsResponse, this);

    let listNotificationsRequest = new ListNotificationsRequest();
    listNotificationsRequest.setIdentificationNumber(this.bin);
    this.buildingManagementConnector.listNotifications(listNotificationsRequest, BuildingComponent.interpretListNotificationsResponse, this);

    let getBuildingRequest = new GetBuildingRequest();
    getBuildingRequest.setIdentificationNumber(this.bin);
    this.buildingManagementConnector.getBuilding(getBuildingRequest, BuildingComponent.interpretGetBuildingResponse, this);
  }

  ngAfterViewInit() {
    this.rDataSource.sort = this.sort.toArray()[0];
    this.rDataSource.paginator = this.paginator.toArray()[0];

    this.nDataSource.sort = this.sort.toArray()[1];
    this.nDataSource.paginator = this.paginator.toArray()[1];

    this.cDataSource.sort = this.sort.toArray()[2];
    this.cDataSource.paginator = this.paginator.toArray()[2];
  }

  applySearch() {
    this.rDataSource.filter = this.rSearchKey?.trim().toLowerCase();
    this.cDataSource.filter = this.cSearchKey?.trim().toLowerCase();
  }

  private static interpretListRoomsResponse(response: ListRoomsResponse, self: BuildingComponent): void {
    self.rDataSource.data = response.getRoomsList();
  }

  private static interpretListComponentsResponse(response: ListComponentsResponse, self: BuildingComponent | RoomComponent): void {
    self.cDataSource.data = response.getComponentsList();
  }

  private static interpretListNotificationsResponse(response: ListNotificationsResponse, self: BuildingComponent | RoomComponent): void {
    self.nDataSource.data = response.getNotificationsList();
  }

  private static interpretGetBuildingResponse(response: GetBuildingResponse, self: BuildingComponent): void {
    self.building = response.getGrpcBuilding()!;
  }
}
