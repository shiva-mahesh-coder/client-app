import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

const routes: Routes = [
  {

    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',

        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]

  },

  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'topsalesreport',
        loadChildren: () => import('./Reports/SalesReport/TopSalesReport/TopSalesReport.module').then(m=>m.TopSalesReportModule)
      },

      {
        path: 'productcategory',
        loadChildren: () => import('./Reports/SalesReport/product-category/product-category.module').then(m => m.productcategoryModule)
      },
      {
        path: 'productsubcategory',
        loadChildren: () => import('./Reports/SalesReport/product-subcategory/product-subcategory.module').then(m => m.productsubcategoryModule)
      },

      {
        path: 'productselected',
        loadChildren: () => import('./Reports/SalesReport/product-selected/product-selected.module').then(m => m.productselectedModule)
      },
      {
        path: 'productreport',
        loadChildren: () => import('./Reports/SalesReport/product-report/product-report.module').then(m => m.productreportModule)
      },
      {
        path: 'itemdetails',
        loadChildren: () => import('./Reports/SalesReport/item-details/item-details.module').then(m => m.itemdetailsModule)
      },
      {
        path: 'basic',
        loadChildren: () => import('./components/basic/basic.module').then(m => m.BasicModule)
      }, {
        path: 'notifications',
        loadChildren: () => import('./components/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      }, {
        path: 'forms',
        loadChildren: () => import('./components/forms/basic-elements/basic-elements.module').then(m => m.BasicElementsModule)
      }, {
        path: 'bootstrap-table',
        loadChildren: () => import('./components/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      }, {
        path: 'map',
        loadChildren: () => import('./map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, {
        path: 'simple-page',
        loadChildren: () => import('./simple-page/simple-page.module').then(m => m.SimplePageModule)
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

const Adminroutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }, {
        path: 'basic',
        loadChildren: () => import('./components/basic/basic.module').then(m => m.BasicModule)
      }, {
        path: 'notifications',
        loadChildren: () => import('./components/advance/notifications/notifications.module').then(m => m.NotificationsModule)
      }, {
        path: 'forms',
        loadChildren: () => import('./components/forms/basic-elements/basic-elements.module').then(m => m.BasicElementsModule)
      }, {
        path: 'bootstrap-table',
        loadChildren: () => import('./components/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module').then(m => m.BasicBootstrapModule),
      }, {
        path: 'map',
        loadChildren: () => import('./map/google-map/google-map.module').then(m => m.GoogleMapModule),
      }, {
        path: 'simple-page',
        loadChildren: () => import('./simple-page/simple-page.module').then(m => m.SimplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
