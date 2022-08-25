import { TestBed } from '@angular/core/testing';

import { BuildingManagementConnectorService } from './building-management-connector.service';

describe('BuildingManagementClientService', () => {
  let service: BuildingManagementConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingManagementConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
