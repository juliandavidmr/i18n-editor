import { TestBed } from '@angular/core/testing';

import { RwService } from './rw.service';

describe('RwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RwService = TestBed.get(RwService);
    expect(service).toBeTruthy();
  });
});
