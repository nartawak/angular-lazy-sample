import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExportsByModuleService, ExportsByModuleServiceConfig} from './services/exports-by-module.service';
import {ModuleWithProviders} from '@angular/compiler/src/core';
import {ExportsByRootsService, ExportsByRootsServiceConfig} from './services/exports-by-roots.service';
import {ExportsByChildServiceConfig, ExportsByClildService} from './services/exports-by-child.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ExportsByModuleService
  ],
  declarations: []
})
export class CoreModule {

  static forRoot(byModule?: ExportsByModuleServiceConfig,
                 byRoot?: ExportsByRootsServiceConfig): ModuleWithProviders  {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: ExportsByModuleServiceConfig, useValue: byModule },
        {provide: ExportsByRootsServiceConfig, useValue: byRoot },

        ExportsByRootsService,
      ]
    };
  }

  static forChild(byChild: ExportsByChildServiceConfig): ModuleWithProviders  {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: ExportsByChildServiceConfig, useValue: byChild },
        ExportsByClildService,
      ]
    };
  }

}
