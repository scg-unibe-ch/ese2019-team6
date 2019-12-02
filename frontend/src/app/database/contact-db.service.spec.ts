import { TestBed } from '@angular/core/testing';

import { ContactDBService } from './contact-db.service';

describe('ContactDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactDBService = TestBed.get(ContactDBService);
    expect(service).toBeTruthy();
  });
});
