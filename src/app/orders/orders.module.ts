import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    CoreModule.forChild({title: 'ExportByChild Module Order configuration'})
  ],
  exports: [
    CoreModule
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule { }
