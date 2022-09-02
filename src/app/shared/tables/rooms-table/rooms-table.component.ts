import {Component, OnInit, ViewChild} from '@angular/core';
import {GrpcRoom, ListRoomsRequest, ListRoomsResponse} from "../../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-rooms-table',
  templateUrl: './rooms-table.component.html',
  styleUrls: ['./rooms-table.component.css']
})
export class RoomsTableComponent implements OnInit {

  // path variable
  bin: string = "";

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcRoom.AsObject> = new MatTableDataSource<GrpcRoom.AsObject>();

  // search values from search bars
  searchKey: string = "";

  // columns to be displayed
  displayedColumns: string[] = ['identificationNumber', 'roomNumber', 'roomName', 'floor', 'roomType', 'edit_room', 'delete_room'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {

    // obtain path variables
    this.bin = String(this.route.snapshot.paramMap.get("bin"));

    // run initial calls
    let listRoomsRequest = new ListRoomsRequest();
    listRoomsRequest.setIdentificationNumber(this.bin);
    this.buildingManagementConnector.listRooms(listRoomsRequest, RoomsTableComponent.interpretListRoomsResponse, this);
  }

  ngAfterViewInit() {

    // add sorter and paginator to datasource
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // search function
  applySearch() {
    this.dataSource.filter = this.searchKey?.trim().toLowerCase();
  }

  // private callback methods for api calls
  private static interpretListRoomsResponse(response: ListRoomsResponse, self: RoomsTableComponent): void {
    self.dataSource.data = response.toObject().roomsList;
  }

}
