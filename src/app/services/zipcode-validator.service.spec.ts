import { TestBed } from '@angular/core/testing';

import { ZipcodeValidatorService } from './zipcode-validator.service';

describe('ZipcodeValidatorService', () => {
  let service: ZipcodeValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZipcodeValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
