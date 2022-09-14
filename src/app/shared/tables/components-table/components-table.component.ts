import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {BuildingManagementConnectorService} from "../../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {
  CreateComponentRequest,
  CreateComponentResponse,
  GrpcComponent,
  GrpcGeographicalLocation,
  ListComponentsRequest,
  ListComponentsResponse,
  RemoveRequest,
  UpdateComponentRequest,
  UpdateComponentResponse
} from "../../../../proto/generated/building_management_pb";
import {AddComponentComponent} from '../../dialogs/add-component/add-component.component'
import {EditComponentComponent} from '../../dialogs/edit-component/edit-component.component'
import {MatDialog} from '@angular/material/dialog'
import {MatTableDataSource} from "@angular/material/table";
import {RemoveComponent} from "../../dialogs/remove/remove.component";
import {ExpandAnimation} from "../../animations";
import {AuthServiceService} from "../../../core/authentication/auth-service.service";

@Component({
  selector: 'app-components-table',
  templateUrl: './components-table.component.html',
  styleUrls: ['./components-table.component.css'],
  animations: [ExpandAnimation]
})
export class ComponentsTableComponent implements OnInit, AfterViewInit {

  // path variable
  parentIdentificationNumber: string = "";

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  dataSource: MatTableDataSource<GrpcComponent.AsObject> = new MatTableDataSource<GrpcComponent.AsObject>();

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // columns to be displayed
  columnsToDisplay: string[] = ['componentType', 'edit_component', 'delete_component'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedComponent!: string;

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute,
              private dialog: MatDialog, public authService: AuthServiceService) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {

    // obtain path variables
    if (this.route.snapshot.paramMap.get("bin")) {
      this.parentIdentificationNumber = String(this.route.snapshot.paramMap.get("bin"));
    } else {
      this.parentIdentificationNumber = String(this.route.snapshot.paramMap.get("rin"));
    }

    // run initial calls
    let listComponentsRequest = new ListComponentsRequest();
    listComponentsRequest.setIdentificationNumber(this.parentIdentificationNumber);
    this.buildingManagementConnector.listComponents(listComponentsRequest, ComponentsTableComponent.interpretListComponentsResponse, this);
  }

  ngAfterViewInit() {

    // add sorter and paginator to datasource
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  private static interpretListComponentsResponse(response: ListComponentsResponse, self: ComponentsTableComponent): void {
    self.dataSource.data = response.toObject().componentsList;
  }

  private static interpretCreateComponentResponse(response: CreateComponentResponse, self: ComponentsTableComponent): void {
    console.log(response.getComponent()?.toObject()!)
    self.dataSource.data.push(response.getComponent()?.toObject()!);
  }

  private static interpretUpdateComponentResponse(response: UpdateComponentResponse, self: ComponentsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != response.getComponent()?.getIdentificationNumber());
    self.dataSource.data.push(response.getComponent()?.toObject()!);
  }

  private static interpretRemoveComponentResponse(id: string, self: ComponentsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != id);
  }


  openCreateComponentDialog() {
    const dialogRef = this.dialog.open(AddComponentComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.createComponent(ComponentsTableComponent.buildCreateComponentRequest(this.parentIdentificationNumber, result), ComponentsTableComponent.interpretCreateComponentResponse, this);
      } else {
        return;
      }
    })
  }

  openUpdateComponentDialog(component: GrpcComponent.AsObject) {
    const dialogRef = this.dialog.open(EditComponentComponent, {data: component});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.buildingManagementConnector.updateComponent(ComponentsTableComponent.buildUpdateComponentRequest(result), ComponentsTableComponent.interpretUpdateComponentResponse, this);
      } else {
        return;
      }
    })
  }

  openRemoveComponentDialog(identificationNumber: string) {
    const dialogRef = this.dialog.open(RemoveComponent, {data: identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
        if (result.event == 'ok ') {
          this.buildingManagementConnector.removeComponent(ComponentsTableComponent.buildRemoveRequest(result), ComponentsTableComponent.interpretRemoveComponentResponse, this);
        } else {
          return;
        }
      }
    )
  }

  private static buildCreateComponentRequest(identificationNumber: string, result: any): CreateComponentRequest {
    let request = new CreateComponentRequest();
    request.setComponentDescription(result.data.componentDescription);
    request.setParentIdentificationNumber(identificationNumber);
    request.setComponentType(result.data.componentType);
    let geographicalLocation = new GrpcGeographicalLocation();
    geographicalLocation.setLongitude(result.data.longitude);
    geographicalLocation.setLatitude(result.data.latitude);
    request.setGrpcGeographicalLocation(geographicalLocation);
    return request;
  }

  private static buildUpdateComponentRequest(result: any): UpdateComponentRequest {
    let request = new UpdateComponentRequest();
    request.setComponentDescription(result.data.componentDescription);
    request.setParentIdentificationNumber(result.data.parentIdentificationNumber);
    request.setComponentType(result.data.componentType);
    let geographicalLocation = new GrpcGeographicalLocation();
    geographicalLocation.setLongitude(result.data.longitude);
    geographicalLocation.setLatitude(result.data.latitude);
    request.setGrpcGeographicalLocation(geographicalLocation);
    request.setIdentificationNumber(result.data.identificationNumber);
    return request;
  }

  private static buildRemoveRequest(result: any): RemoveRequest {
    let request = new RemoveRequest();
    request.setIdentificationNumber(result.data.identificationNumber);
    return request;
  }

}
