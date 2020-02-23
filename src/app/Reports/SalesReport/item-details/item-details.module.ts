import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { itemdetailsRoutingModule } from './item-details-routing.module';
import { itemdetailsComponent } from './item-details.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    itemdetailsRoutingModule,
    SharedModule
  ],
  declarations: [itemdetailsComponent]
})
export class itemdetailsModule { }
