import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopSalesReportComponent } from './TopSalesReport.component';

const routes: Routes = [
  {
    path: '',
    component: TopSalesReportComponent,
    data: {
      breadcrumb: 'Sales Dashboard by stores',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopSalesReportRoutingModule { }
