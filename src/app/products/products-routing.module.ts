import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPagesComponent } from './Pages/basic-pages/basic-pages.component';
import { NumbersPagesComponent } from './Pages/numbers-pages/numbers-pages.component';
import { UncommonPagesComponent } from './Pages/uncommon-pages/uncommon-pages.component';


const routes: Routes = [
  { path: '', component: BasicPagesComponent },
  { path: 'numbers', component: NumbersPagesComponent},
  { path: 'uncommon', component: UncommonPagesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
