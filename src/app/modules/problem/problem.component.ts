import {Component, Input, OnInit} from '@angular/core';
import {GrpcProblem} from "../../../proto/generated/problem_management_pb";
import {ActivatedRoute} from "@angular/router";
import {ProblemManagementConnectorService} from "../../shared/connectors/problem-management-connector.service";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  pin: string | undefined;

  @Input() problem: GrpcProblem | undefined;

  constructor(private problemManagementConnector: ProblemManagementConnectorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pin = String(this.route.snapshot.paramMap.get("pin"));
    this.problemManagementConnector.getProblem(this.pin, this.setProblem, this);
  }

  setProblem(problem: GrpcProblem | undefined, self: ProblemComponent): void {
    self.problem = problem;
  }

}
