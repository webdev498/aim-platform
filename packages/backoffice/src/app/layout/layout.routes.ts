import { Routes, RouterModule }  from '@angular/router';
import { LayoutComponent } from './layout.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'sites', loadChildren: 'app/sites/sites.module#SitesModule' },
    { path: 'companies', loadChildren: 'app/companies/companies.module#CompaniesModule' },
    { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' },
    //{ path: 'shows', loadChildren: () => 'app/shows/shows.module#ShowsModule' },
    //{ path: 'reports', loadChildren: () => 'app/reports/reports.module#ReportsModule' },
    //{ path: 'approvals', loadChildren: () => 'app/approvals/approvals.module#ApprovalsModule' },
    //{ path: 'companies', loadChildren: () => 'app/companies/companies.module#CompaniesModule' },
    //{ path: 'forms', loadChildren: () => System.import('../forms/forms.module') },
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
