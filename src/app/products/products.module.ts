import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPagesComponent } from './Pages/basic-pages/basic-pages.component';
import { NumbersPagesComponent } from './Pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './Pages/uncommon-pages/uncommon-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './Pages/order/order.component';
import { ToggleCasePipe } from './Pipes/toggle-case.pipe';
import { CanFlyPipe } from './Pipes/can-fly.pipe';
import { SortByPipe } from './Pipes/sort-by.pipe';




@NgModule({
  declarations: [
    BasicPagesComponent,
    NumbersPagesComponent,
    UncommonPagesComponent,
    OrderComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
