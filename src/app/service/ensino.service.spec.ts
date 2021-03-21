import { TestBed } from '@angular/core/testing';

import { EnsinoService } from './ensino.service';

describe('EnsinoService', () => {
  let service: EnsinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnsinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
