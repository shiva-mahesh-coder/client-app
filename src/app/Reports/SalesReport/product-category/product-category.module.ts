import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { productcategoryRoutingModule } from './product-category-routing.module';
import { productcategoryComponent } from './product-category.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    productcategoryRoutingModule,
    SharedModule
  ],
  declarations: [productcategoryComponent]
})
export class productcategoryModule { }
