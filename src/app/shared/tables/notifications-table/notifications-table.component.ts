import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {
  GrpcNotification,
  ListNotificationsRequest,
  ListNotificationsResponse
} from "../../../../proto/generated/building_management_pb";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {BuildingManagementConnectorService} from "../../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {ExpandAnimation} from "../../animations";

@Component({
  selector: 'app-notifications-table',
  templateUrl: './notifications-table.component.html',
  styleUrls: ['./notifications-table.component.css'],
  animations: [ExpandAnimation]
})
export class NotificationsTableComponent implements OnInit, AfterViewInit {

  // path variable
  nin: string = "";

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcNotification.AsObject> = new MatTableDataSource<GrpcNotification.AsObject>();

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // columns to be displayed
  columnsToDisplay: string[] = ['identificationNumber', 'notificationTitle', 'creationTime', 'lastModified'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedNotification!: string;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {
    let listNotificationsRequest = new ListNotificationsRequest();
    listNotificationsRequest.setIdentificationNumber(this.nin);
    this.buildingManagementConnector.listNotifications(listNotificationsRequest, NotificationsTableComponent.interpretListNotificationsResponse, this);
  }

  ngAfterViewInit() {

    // add sorter and paginator to datasource
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // private callback methods for api calls
  private static interpretListNotificationsResponse(response: ListNotificationsResponse, self: NotificationsTableComponent): void {
    self.dataSource.data = response.toObject().notificationsList;
  }
}
