import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be initialized zero',()=>{
    expect(service.a).toBe(0)
  })

  it('should increment the value of a',() =>{
    service.a = 0
    service.increment()
    expect(service.a).toBe(1)

  })
});
