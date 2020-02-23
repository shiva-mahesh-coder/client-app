import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productselectedComponent } from './product-selected.component';

const routes: Routes = [
  {
    path: '',
    component: productselectedComponent,
    data: {
      breadcrumb: 'Selected Products : Bag/All/All/All',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productselectedRoutingModule { }
