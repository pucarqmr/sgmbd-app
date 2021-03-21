import { TestBed } from '@angular/core/testing';

import { IptuService } from './iptu.service';

describe('IptuService', () => {
  let service: IptuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IptuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
