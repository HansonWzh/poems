import { TestBed, inject } from '@angular/core/testing';

import { Heroservice } from './hero.service';

describe('Heroservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Heroservice]
    });
  });

  it('should be created', inject([Heroservice], (service: Heroservice) => {
    expect(service).toBeTruthy();
  }));
});
