import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {
  GetProblemRequest,
  GetProblemResponse,
  GrpcProblem,
  ListProblemsRequest, ListProblemsResponse
} from "../../../proto/generated/problem_management_pb";
import {ProblemsComponent} from "../../modules/problems/problems.component";
import {ProblemComponent} from "../../modules/problem/problem.component";
import {RpcError} from "grpc-web";
import {ProblemManagementClient} from "../../../proto/generated/Problem_managementServiceClientPb";

@Injectable({
  providedIn: 'root'
})
export class ProblemManagementConnectorService {

  private readonly client: ProblemManagementClient;

  constructor() {
    this.client = new ProblemManagementClient(environment.clientUrls.problem_management);
  }

  async getProblem(identificationNumber: string, callback: (problem: GrpcProblem | undefined, self: ProblemComponent) => void, self: ProblemComponent) {

    let request = new GetProblemRequest();
    request.setIdentificationNumber(identificationNumber);

    this.client.getProblem(request, {}, (error: RpcError, response: GetProblemResponse) => {
      callback(response?.getProblem(), self);
    })
  }

  async listProblems(callback: (problems: GrpcProblem[] | undefined, self: ProblemsComponent) => void, self: ProblemsComponent) {

    let request = new ListProblemsRequest();

    this.client.listProblems(request, {}, (error: RpcError, response: ListProblemsResponse) => {
      callback(response?.getProblemsList(), self);
    })
  }
}
