import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class ExportsByModuleServiceConfig {
  title = 'Default ExportByModuleServiceConfig';
}

@Injectable()
export class ExportsByModuleService {
  id = nextId++;
  private _title = 'Default ExportsByModuleService';

  constructor(@Optional() byModuleConfig: ExportsByModuleServiceConfig) {
    if (byModuleConfig) { this._title = byModuleConfig.title; }
  }

  get title() {
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._title + suffix;
  }
}
