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
  parentIdentificationNumber: string = "";

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcNotification.AsObject> = new MatTableDataSource<GrpcNotification.AsObject>();

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // data loading
  isLoading = true;

  // columns to be displayed
  columnsToDisplay: string[] = ['notificationTitle', 'createdOn', 'lastModifiedOn'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedNotification!: string;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {
    // obtain path variables
    if (this.route.snapshot.paramMap.get("bin")) {
      this.parentIdentificationNumber = String(this.route.snapshot.paramMap.get("bin"));
    } else if (this.route.snapshot.paramMap.get("rin")){
      this.parentIdentificationNumber = String(this.route.snapshot.paramMap.get("rin"));
    } else {
      this.parentIdentificationNumber = String(this.route.snapshot.paramMap.get("cin"));
    }
    let listNotificationsRequest = new ListNotificationsRequest();
    listNotificationsRequest.setIdentificationNumber(this.parentIdentificationNumber);
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
    self.isLoading = false;
  }
}
