import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent }    from './layout.component';

import { AuthGuard } from 'lib/auth';
import { AuthConfigResolver, UserResolver, PlatformResolver } from 'app/app.resolver';

const routes: Routes = [
  {
    path: 'app/:platformId',
    component: LayoutComponent,
    resolve: {
      authConfig: AuthConfigResolver,
      platform: PlatformResolver,
      user: UserResolver,
    },
    canActivate: [ AuthGuard ],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
      { path: 'sites', loadChildren: 'app/sites/sites.module#SitesModule' },
      //{ path: 'shows', loadChildren: () => 'app/shows/shows.module#ShowsModule' },
      //{ path: 'reports', loadChildren: () => 'app/reports/reports.module#ReportsModule' },
      //{ path: 'approvals', loadChildren: () => 'app/approvals/approvals.module#ApprovalsModule' },
      //{ path: 'companies', loadChildren: () => 'app/companies/companies.module#CompaniesModule' },
      //{ path: 'forms', loadChildren: () => System.import('../forms/forms.module') },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
