import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {BuildingManagementConnectorService} from "../../connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {
  GrpcComponent,
  ListComponentsRequest,
  ListComponentsResponse
} from "../../../../proto/generated/building_management_pb";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-components-table',
  templateUrl: './components-table.component.html',
  styleUrls: ['./components-table.component.css']
})
export class ComponentsTableComponent implements OnInit, AfterViewInit {

  // path variable
  bin: string = "";

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcComponent.AsObject> = new MatTableDataSource<GrpcComponent.AsObject>();

  // search values from search bars
  searchKey: string = "";

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // columns to be displayed
  displayedColumns: string[] = ['identificationNumber', 'componentType', 'edit_component', 'delete_component'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {

    // obtain path variables
    this.bin = String(this.route.snapshot.paramMap.get("bin"));

    // run initial calls
    let listComponentsRequest = new ListComponentsRequest();
    listComponentsRequest.setIdentificationNumber(this.bin);
    this.buildingManagementConnector.listComponents(listComponentsRequest, ComponentsTableComponent.interpretListComponentsResponse, this);
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

  private static interpretListComponentsResponse(response: ListComponentsResponse, self: ComponentsTableComponent): void {
    self.dataSource.data = response.toObject().componentsList;
  }

}
