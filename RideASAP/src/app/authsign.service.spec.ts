import { TestBed } from '@angular/core/testing';

import { AuthsignService } from './authsign.service';

describe('AuthsignService', () => {
  let service: AuthsignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthsignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
