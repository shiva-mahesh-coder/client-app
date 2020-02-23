import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { productselectedRoutingModule } from './product-selected-routing.module';
import { productselectedComponent } from './product-selected.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    productselectedRoutingModule,
    SharedModule
  ],
  declarations: [productselectedComponent]
})
export class productselectedModule { }
