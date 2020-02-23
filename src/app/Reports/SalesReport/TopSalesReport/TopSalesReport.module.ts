import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopSalesReportRoutingModule } from './TopSalesReport-routing.module';
import { TopSalesReportComponent } from './TopSalesReport.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TopSalesReportRoutingModule,
    SharedModule
  ],
  declarations: [TopSalesReportComponent]
})
export class TopSalesReportModule { }
