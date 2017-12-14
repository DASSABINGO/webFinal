import { TestBed, inject } from '@angular/core/testing';

import { SportsBetService } from './sports-bet.service';

describe('SportsBetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportsBetService]
    });
  });

  it('should be created', inject([SportsBetService], (service: SportsBetService) => {
    expect(service).toBeTruthy();
  }));
});
