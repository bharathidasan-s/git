import { TestBed, inject } from '@angular/core/testing';

import { PluginUtilsService } from './plugin-utils.service';

describe('PluginUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PluginUtilsService]
    });
  });

  it('should be created', inject([PluginUtilsService], (service: PluginUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
