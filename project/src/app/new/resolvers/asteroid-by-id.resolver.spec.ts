import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { asteroidByIdResolver } from './asteroid-by-id.resolver';

describe('asteroidByIdResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => asteroidByIdResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
