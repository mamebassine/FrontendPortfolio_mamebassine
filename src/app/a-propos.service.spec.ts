import { TestBed } from '@angular/core/testing';

import { AProposService } from './a-propos.service';

describe('AProposService', () => {
  let service: AProposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AProposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
