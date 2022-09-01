import {Component, OnInit, ViewChild} from '@angular/core';
import {
  GetBuildingResponse,
  GrpcBuilding,
  GrpcComponent,
  GrpcNotification,
  GrpcRoom,
  ListComponentsResponse,
  ListNotificationsResponse,
  ListRoomsResponse
} from "../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {RoomComponent} from "../room/room.component";
import {ActivatedRoute} from "@angular/router";
import {ComponentComponent} from "../component/component.component";
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

  @ViewChild(MatSort) nSort!: MatSort;
  @ViewChild(MatSort) rSort!: MatSort;
  @ViewChild(MatSort) cSort!: MatSort;
  @ViewChild(MatPaginator) nPaginator!: MatPaginator;
  @ViewChild(MatPaginator) rPaginator!: MatPaginator;
  @ViewChild(MatPaginator) cPaginator!: MatPaginator;

  rSearchKey: string = "";
  cSearchKey: string = "";

  displayedRoomColumns: string[] = ['room-id', 'room-number', 'room-name', 'room-floor', 'room-type', 'edit_room', 'delete_room'];
  displayedComponentColumns: string[] = ['description', 'type'];
  displayedNotificationColumns: string[] = ['title', 'description', 'created_on', 'last_edited_on'];


  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.bin = String(this.route.snapshot.paramMap.get("bin"));
    this.buildingManagementConnector.listRooms(this.bin, BuildingComponent.interpretListRoomsResponse, this);
    this.buildingManagementConnector.listComponents(this.bin, BuildingComponent.interpretListComponentsResponse, this);
    this.buildingManagementConnector.listNotifications(this.bin, BuildingComponent.interpretListNotificationsResponse, this);
    this.buildingManagementConnector.getBuilding(this.bin, BuildingComponent.interpretGetBuildingResponse, this);
  }

  ngAfterViewInit() {
    this.rDataSource.sort = this.rSort;
    this.rDataSource.paginator = this.rPaginator;

    this.rDataSource.sort = this.rSort;
    this.rDataSource.paginator = this.rPaginator;

    this.cDataSource.sort = this.cSort;
    this.cDataSource.paginator = this.cPaginator;
  }

  applySearch() {
    this.rDataSource.filter = this.rSearchKey?.trim().toLowerCase();
    this.rDataSource.filter = this.rSearchKey?.trim().toLowerCase();
    this.cDataSource.filter = this.cSearchKey?.trim().toLowerCase();
  }

  private static interpretListRoomsResponse(response: ListRoomsResponse, self: BuildingComponent): void {
    self.rDataSource.data = response.getRoomsList();
  }

  private static interpretListComponentsResponse(response: ListComponentsResponse, self: BuildingComponent | RoomComponent): void {
    self.cDataSource.data = response.getComponentsList();
  }

  private static interpretListNotificationsResponse(response: ListNotificationsResponse, self: BuildingComponent | RoomComponent | ComponentComponent): void {
    self.nDataSource.data = response.getNotificationsList();
  }

  private static interpretGetBuildingResponse(response: GetBuildingResponse, self: BuildingComponent): void {
    self.building = response.getGrpcBuilding()!;
  }
}
