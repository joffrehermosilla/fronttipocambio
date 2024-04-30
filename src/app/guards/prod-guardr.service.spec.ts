import { TestBed } from '@angular/core/testing';

import { ProdGuardrService } from './prod-guardr.service';

describe('ProdGuardrService', () => {
  let service: ProdGuardrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdGuardrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
