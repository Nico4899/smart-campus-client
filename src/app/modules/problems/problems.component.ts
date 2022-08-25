import {Component, Input, OnInit} from '@angular/core';
import {ProblemManagementConnectorService} from "../../shared/connectors/problem-management-connector.service";
import {GrpcProblem} from "../../../proto/generated/problem_management_pb";

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  @Input() problems: GrpcProblem[] | undefined;

  constructor(private problemManagementConnector: ProblemManagementConnectorService) {
  }

  ngOnInit(): void {
    this.problemManagementConnector.listProblems(this.setProblems, this);
  }

  setProblems(problems: GrpcProblem[] | undefined, self: ProblemsComponent): void {
    self.problems = problems;
  }

}
