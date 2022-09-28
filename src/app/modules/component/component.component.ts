import {Component, OnInit} from '@angular/core';
import {
  CreateFavoriteRequest,
  CreateFavoriteResponse,
  GetComponentRequest,
  GetComponentResponse,
  GrpcComponent
} from "../../../proto/generated/building_management_pb";
import {
  BuildingManagementConnectorService
} from "../../core/connectors/building-management-connector.service";
import {ActivatedRoute} from "@angular/router";
import {AuthServiceService} from 'src/app/core/authentication/auth-service.service';
import {
  CreateProblemRequest,
  CreateProblemResponse
} from 'src/proto/generated/problem_management_pb';
import {
  ProblemManagementConnectorService
} from 'src/app/core/connectors/problem-management-connector.service';
import {MatDialog} from '@angular/material/dialog';
import {AddProblemComponent} from 'src/app/shared/dialogs/add-problem/add-problem.component';
import {TranslateService} from "@ngx-translate/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  translateService: TranslateService;
  // path variable
  cin: string = "";

  // datasource containing provided data from the api, to be displayed in the html datatables, as well as the current selected object
  component: GrpcComponent.AsObject = new GrpcComponent().toObject();

  constructor(private buildingManagementConnector: BuildingManagementConnectorService, private problemManagementConnector: ProblemManagementConnectorService, public authService: AuthServiceService, private route: ActivatedRoute, private dialog: MatDialog, private snackbar: MatSnackBar, translateService: TranslateService) {
    this.translateService = translateService;
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
    let request = new CreateFavoriteRequest();
    request.setOwner(this.authService.eMail as string);
    request.setReferenceIdentificationNumber(this.cin);
    this.buildingManagementConnector.createFavorite(request, ComponentComponent.interpretCreateFavoriteResponse, this);
    this.translateService.get('added_favorite').subscribe((res: string) => {
      this.snackbar.open(res, "", {duration: 3500});
    });
  }

  openCreateProblemDialog() {
    const dialogRef = this.dialog.open(AddProblemComponent, {data: this.component.identificationNumber});
    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'ok') {
        this.problemManagementConnector.createProblem(ComponentComponent.buildCreateProblemRequest(result), ComponentComponent.interpretCreateProblemResponse, this);
        this.translateService.get('reported_problem').subscribe((res: string) => {
          this.snackbar.open(res, "", {duration: 3500});
        });
      } else {
        return;
      }
    })
  }

  private static interpretCreateFavoriteResponse(response: CreateFavoriteResponse, self: any): void {
  }

  private static interpretCreateProblemResponse(response: CreateProblemResponse, self: any): void {
    return;
  }

  private static buildCreateProblemRequest(result: any): CreateProblemRequest {
    let request = new CreateProblemRequest();
    request.setProblemTitle(result.data.problemTitle);
    request.setProblemDescription(result.data.problemDescription);
    request.setReferenceIdentificationNumber(result.data.referenceIdentificationNumber);
    request.setProblemReporter(result.data.problemReporter);
    return request;
  }
}
