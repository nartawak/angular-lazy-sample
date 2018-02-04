import { TestBed, inject } from '@angular/core/testing';

import { ExportsByRootsService } from './exports-by-roots.service';

describe('ExportsByRootsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExportsByRootsService]
    });
  });

  it('should be created', inject([ExportsByRootsService], (service: ExportsByRootsService) => {
    expect(service).toBeTruthy();
  }));
});
