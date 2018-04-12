import { TestBed, inject } from '@angular/core/testing';

import { XmsutilsService } from './xmsutils.service';

describe('XmsutilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmsutilsService]
    });
  });

  it('should be created', inject([XmsutilsService], (service: XmsutilsService) => {
    expect(service).toBeTruthy();
  }));
});
