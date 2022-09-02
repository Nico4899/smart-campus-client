import {Component, OnInit} from '@angular/core';
import {ListProblemsRequest, ListProblemsResponse} from "../../../proto/generated/problem_management_pb";
import {ProblemManagementConnectorService} from "../../core/connectors/problem-management-connector.service";

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {


  constructor(private problemManagementConnector: ProblemManagementConnectorService) {
  }

  ngOnInit(): void {
    this.problemManagementConnector.listProblems(new ListProblemsRequest(), ProblemsComponent.interpretListProblemsResponse, this);

  }

  private static interpretListProblemsResponse(response: ListProblemsResponse, self: ProblemsComponent): void {
  }


}
