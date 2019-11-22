import { TestBed } from '@angular/core/testing';

import { ServiceDBService } from './service-db.service';

describe('ServiceDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceDBService = TestBed.get(ServiceDBService);
    expect(service).toBeTruthy();
  });
});
