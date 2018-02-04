import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class ExportsByRootsServiceConfig {
  title = 'Default ExportsByRootsServiceConfig';
}

@Injectable()
export class ExportsByRootsService {
  id = nextId++;
  private _title = 'Default ExportsByRootsService';

  constructor(@Optional() byModuleConfig: ExportsByRootsServiceConfig) {
    if (byModuleConfig) { this._title = byModuleConfig.title; }
  }

  get title() {
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._title + suffix;
  }
}

