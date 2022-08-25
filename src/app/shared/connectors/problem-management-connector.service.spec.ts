import { TestBed } from '@angular/core/testing';

import { ProblemManagementConnectorService } from './problem-management-connector.service';

describe('ProblemManagementClientService', () => {
  let service: ProblemManagementConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemManagementConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
