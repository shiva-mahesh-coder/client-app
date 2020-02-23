import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productreportComponent } from './product-report.component';

const routes: Routes = [
  {
    path: '',
    component: productreportComponent,
    data: {
      breadcrumb: 'Sales Dashboard by day',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class productreportRoutingModule { }
