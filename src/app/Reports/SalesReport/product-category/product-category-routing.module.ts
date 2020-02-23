import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productcategoryComponent } from './product-category.component';

const routes: Routes = [
  {
    path: '',
    component: productcategoryComponent,
    data: {
      breadcrumb: 'Sales by category',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productcategoryRoutingModule { }
