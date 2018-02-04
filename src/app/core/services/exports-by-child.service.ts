import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class ExportsByChildServiceConfig {
  title = 'Default ExportsByChildServiceConfig';
}

@Injectable()
export class ExportsByClildService {
  id = nextId++;
  private _title = 'Default ExportsByChildService';

  constructor(@Optional() byChildConfig: ExportsByChildServiceConfig) {
    if (byChildConfig) { this._title = byChildConfig.title; }
  }

  get title() {
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._title + suffix;
  }
}

