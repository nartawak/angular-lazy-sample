import { TestBed, inject } from '@angular/core/testing';

import { ExportsByModuleService } from './exports-by-module.service';

describe('ExportsByModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExportsByModuleService]
    });
  });

  it('should be created', inject([ExportsByModuleService], (service: ExportsByModuleService) => {
    expect(service).toBeTruthy();
  }));
});
