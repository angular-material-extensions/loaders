import { TestBed } from '@angular/core/testing';

import { LoadersService } from './loaders.service';

describe('LoadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadersService = TestBed.get(LoadersService);
    expect(service).toBeTruthy();
  });
});
