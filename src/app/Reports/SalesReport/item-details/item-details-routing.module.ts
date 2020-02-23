import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { itemdetailsComponent } from './item-details.component';

const routes: Routes = [
  {
    path: '',
    component: itemdetailsComponent,
    data: {
      breadcrumb: 'Item Detail Report',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class itemdetailsRoutingModule { }
