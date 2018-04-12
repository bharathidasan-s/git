import { TestBed, inject } from '@angular/core/testing';

import { HttpprotocolService } from './httpprotocol.service';

describe('HttpprotocolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpprotocolService]
    });
  });

  it('should be created', inject([HttpprotocolService], (service: HttpprotocolService) => {
    expect(service).toBeTruthy();
  }));
});
