import {Component, OnInit} from '@angular/core';
import {
  GetComponentRequest,
  GetComponentResponse,
  GrpcComponent
} from "../../../proto/generated/building_management_pb";
import {BuildingManagementConnectorService} from "../../shared/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";

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

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private route: ActivatedRoute) {
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
}
