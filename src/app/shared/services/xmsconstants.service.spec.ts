import { TestBed, inject } from '@angular/core/testing';

import { XmsconstantsService } from './xmsconstants.service';

describe('XmsconstantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmsconstantsService]
    });
  });

  it('should be created', inject([XmsconstantsService], (service: XmsconstantsService) => {
    expect(service).toBeTruthy();
  }));
});
