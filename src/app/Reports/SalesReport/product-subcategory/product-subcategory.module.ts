import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { productsubcategoryRoutingModule } from './product-subcategory-routing.module';
import { productsubcategoryComponent } from './product-subcategory.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    productsubcategoryRoutingModule,
    SharedModule
  ],
  declarations: [productsubcategoryComponent]
})
export class productsubcategoryModule { }
