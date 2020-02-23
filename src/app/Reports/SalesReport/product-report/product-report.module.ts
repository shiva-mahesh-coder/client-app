import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { productreportRoutingModule } from './product-report-routing.module';
import { productreportComponent } from './product-report.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    productreportRoutingModule,
    SharedModule
  ],
  declarations: [productreportComponent]
})
export class productreportModule { }
