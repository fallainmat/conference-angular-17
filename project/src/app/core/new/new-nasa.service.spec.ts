import { TestBed } from '@angular/core/testing';

import { NewNasaService } from './new-nasa.service';

describe('NewNasaService', () => {
  let service: NewNasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewNasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
