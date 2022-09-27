import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {BuildingManagementConnectorService} from "../../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {
  CreateComponentRequest,
  CreateComponentResponse,
  CreateFavoriteRequest,
  CreateFavoriteResponse,
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
import { ProblemManagementConnectorService } from 'src/app/core/connectors/problem-management-connector.service';
import {CreateProblemRequest, CreateProblemResponse } from 'src/proto/generated/problem_management_pb';
import { BuildingsTableComponent } from '../buildings-table/buildings-table.component';
import { ProblemsTableComponent } from '../problems-table/problems-table.component';
import { RoomsTableComponent } from '../rooms-table/rooms-table.component';
import { AddProblemComponent } from '../../dialogs/add-problem/add-problem.component';

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

  // data loading
  isLoading = true;

  // sorter and paginator for tables
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // columns to be displayed
  columnsToDisplay: string[] = ['componentType', 'edit_component', 'delete_component'];

  constructor(private buildingManagementConnector: BuildingManagementConnectorService,private problemManagementConnector: ProblemManagementConnectorService, private route: ActivatedRoute,
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
    self.isLoading = false;
  }

  private static interpretCreateProblemResponse(response: CreateProblemResponse, self: BuildingsTableComponent | ProblemsTableComponent | RoomsTableComponent | ComponentsTableComponent): void{
    return;
  }

  private static interpretCreateComponentResponse(response: CreateComponentResponse, self: ComponentsTableComponent): void {
    self.dataSource.data.push(response.getComponent()?.toObject()!);
  }



  private static interpretUpdateComponentResponse(response: UpdateComponentResponse, self: ComponentsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != response.getComponent()?.getIdentificationNumber());
    self.dataSource.data.push(response.getComponent()?.toObject()!);
  }

  private static interpretRemoveComponentResponse(id: string, self: ComponentsTableComponent): void {
    self.dataSource.data = self.dataSource.data.filter(e => e.identificationNumber != id);
  }


  private static interpretCreateFavoriteResponse(response: CreateFavoriteResponse, self: any): void {

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

  openCreateProblemDialog() {
    const dialogRef = this.dialog.open(AddProblemComponent);
    dialogRef.afterClosed().subscribe( result => {
      if(result.event == 'ok'){
        this.problemManagementConnector.createProblem(ComponentsTableComponent.buildCreateProblemRequest(result), ComponentsTableComponent.interpretCreateProblemResponse, this);
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

  addFavorite(component: GrpcComponent.AsObject) {
    const id = component.identificationNumber;
    const name: string = this.authService.name as string;
    const result = {
      data : {
        referenceIdentificationNumber: id,
        owner: name
      }
    }
    this.buildingManagementConnector.createFavorite( ComponentsTableComponent.buildCreateFavoriteRequest(result),ComponentsTableComponent.interpretCreateFavoriteResponse, this);
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

  private static buildCreateProblemRequest(result: any): CreateProblemRequest {
    let request = new CreateProblemRequest();
    request.setProblemTitle(result.data.problemTitle);
    request.setProblemDescription(result.data.problelDescription);
    request.setReferenceIdentificationNumber(result.data.referenceIdentificationNumber);
    request.setProblemReporter(result.data.problemReporter);
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


  private static buildCreateFavoriteRequest(result: any): CreateFavoriteRequest {
    let request = new CreateFavoriteRequest();
    request.setOwner(result.data.owner);
    request.setReferenceIdentificationNumber(result.data.referenceIdentificationNumber);
    return request;
  }

}
