import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetProblemRequest, GetProblemResponse, GrpcProblem} from "../../../proto/generated/problem_management_pb";
import {ProblemManagementConnectorService} from "../../core/connectors/problem-management-connector.service";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  // path variable
  pin: string = "";

  // main object
  problem: GrpcProblem.AsObject = new GrpcProblem().toObject();

  constructor(private problemManagementConnectorService: ProblemManagementConnectorService, private route: ActivatedRoute) {
    // inject building management client and current rout to obtain path variables
  }

  ngOnInit(): void {

    // obtain path variables
    this.pin = String(this.route.snapshot.paramMap.get("bin"));

    // run initial calls
    let getProblemRequest = new GetProblemRequest();
    getProblemRequest.setIdentificationNumber(this.pin);
    this.problemManagementConnectorService.getProblem(getProblemRequest, ProblemComponent.interpretGetProblemResponse, this);
  }

  // private callback methods for api calls
  private static interpretGetProblemResponse(response: GetProblemResponse, self: ProblemComponent): void {
    self.problem = response.getProblem()?.toObject()!;
  }
}
