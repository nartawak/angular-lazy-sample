import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CoreModule.forChild({title: 'ExportByChild Module Customer configuration'})
  ],
  exports: [
    CoreModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
