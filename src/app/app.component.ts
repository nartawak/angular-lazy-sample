import { Component } from '@angular/core';
import {ExportsByModuleService} from './core/services/exports-by-module.service';
import {ExportsByClildService} from './core/services/exports-by-child.service';
import {ExportsByRootsService} from './core/services/exports-by-roots.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Lazy loading feature modules';

  constructor(public ebm: ExportsByModuleService, public ebr: ExportsByRootsService) { }
}
