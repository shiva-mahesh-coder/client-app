import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productsubcategoryComponent } from './product-subcategory.component';

const routes: Routes = [
  {
    path: '',
    component: productsubcategoryComponent,
    data: {
      breadcrumb: 'Sales by Sub-Category',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productsubcategoryRoutingModule { }
