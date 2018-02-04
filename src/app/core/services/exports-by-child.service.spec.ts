import { TestBed, inject } from '@angular/core/testing';

import { ExportsByChildService } from './exports-by-child.service';

describe('ExportsByChildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExportsByChildService]
    });
  });

  it('should be created', inject([ExportsByChildService], (service: ExportsByChildService) => {
    expect(service).toBeTruthy();
  }));
});
