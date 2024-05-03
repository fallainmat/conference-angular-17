import { TestBed } from '@angular/core/testing';

import { OldNasaService } from './old-nasa.service';

describe('NasaService', () => {
  let service: OldNasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldNasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
