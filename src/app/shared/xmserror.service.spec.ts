import { TestBed, inject } from '@angular/core/testing';

import { XmserrorService } from './xmserror.service';

describe('XmserrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmserrorService]
    });
  });

  it('should be created', inject([XmserrorService], (service: XmserrorService) => {
    expect(service).toBeTruthy();
  }));
});
