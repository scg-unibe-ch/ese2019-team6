import { TestBed } from '@angular/core/testing';

import { UserDBService } from './user-db.service';

describe('UserDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserDBService = TestBed.get(UserDBService);
    expect(service).toBeTruthy();
  });
});
