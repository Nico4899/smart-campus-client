import {Component, OnInit} from '@angular/core';
import {
  CreateFavoriteRequest,
  CreateFavoriteResponse,
  GetComponentRequest,
  GetComponentResponse,
  GrpcComponent
} from "../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import { AuthServiceService } from 'src/app/core/authentication/auth-service.service';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  // path variable
  cin: string = "";

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  component: GrpcComponent.AsObject = new GrpcComponent().toObject();

  constructor(private buildingManagementConnector: BuildingManagementConnectorService,public authService: AuthServiceService, private route: ActivatedRoute) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {

    // obtain path variables
    this.cin = String(this.route.snapshot.paramMap.get("cin"));

    // run initial calls
    let getComponentRequest = new GetComponentRequest();
    getComponentRequest.setIdentificationNumber(this.cin);
    this.buildingManagementConnector.getComponent(getComponentRequest, ComponentComponent.interpretGetComponentResponse, this);
  }

  // private callback methods for api calls
  private static interpretGetComponentResponse(response: GetComponentResponse, self: ComponentComponent): void {
    self.component = response.getComponent()?.toObject()!;
  }

  addFavorite(): void {
    const id = this.component.identificationNumber;
    const owner: string = this.authService.name as string;

    let request = new CreateFavoriteRequest();
    request.setOwner(this.authService.name as string);
    request.setReferenceIdentificationNumber(this.cin);
    this.buildingManagementConnector.createFavorite(request, ComponentComponent.interpretCreateFavoriteResponse, this);

  }


  private static interpretCreateFavoriteResponse(response: CreateFavoriteResponse, self: any): void {
  }
}
