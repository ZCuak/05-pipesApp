import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPagesComponent } from './Pages/basic-pages/basic-pages.component';
import { NumbersPagesComponent } from './Pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './Pages/uncommon-pages/uncommon-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';




@NgModule({
  declarations: [
    BasicPagesComponent,
    NumbersPagesComponent,
    UncommonPagesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
