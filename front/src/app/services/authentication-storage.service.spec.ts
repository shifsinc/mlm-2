import { TestBed } from '@angular/core/testing';

import { AuthenticationStorageService } from './authentication-storage.service';

describe('AuthenticationStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationStorageService = TestBed.get(AuthenticationStorageService);
    expect(service).toBeTruthy();
  });
});
