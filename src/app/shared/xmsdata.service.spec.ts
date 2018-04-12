import { TestBed, inject } from '@angular/core/testing';

import { XmsdataService } from './xmsdata.service';

describe('XmsdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmsdataService]
    });
  });

  it('should be created', inject([XmsdataService], (service: XmsdataService) => {
    expect(service).toBeTruthy();
  }));
});
