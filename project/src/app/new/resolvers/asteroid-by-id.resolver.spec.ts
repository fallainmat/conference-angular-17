import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { dailyImageDate } from './asteroid-by-id.resolver';

describe('asteroidByIdResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => dailyImageDate(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
