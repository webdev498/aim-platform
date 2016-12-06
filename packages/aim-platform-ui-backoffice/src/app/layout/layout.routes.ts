import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'approvals', loadChildren: 'app/approvals/approvals.module#ApprovalsModule' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'reports', loadChildren: 'app/reports/reports.module#ReportsModule' },
    { path: 'shows', loadChildren: 'app/shows/shows.module#ShowsModule' },
    { path: 'sites', loadChildren: 'app/sites/sites.module#SitesModule' },
    { path: 'inbox', loadChildren: 'app/sing/inbox/inbox.module#InboxModule' },
    { path: 'charts', loadChildren: 'app/sing/charts/charts.module#ChartsModule' },
    { path: 'profile', loadChildren: 'app/sing/profile/profile.module#ProfileModule' },
    { path: 'forms', loadChildren: 'app/sing/forms/forms.module#FormModule' },
    { path: 'ui', loadChildren: 'app/sing/ui-elements/ui-elements.module#UiElementsModule' },
    { path: 'extra', loadChildren: 'app/sing/extra/extra.module#ExtraModule' },
    { path: 'tables', loadChildren: 'app/sing/tables/tables.module#TableModule' },
    { path: 'maps', loadChildren: 'app/sing/maps/maps.module#MapModule' },
    { path: 'grid', loadChildren: 'app/sing/grid/grid.module#GridModule' },
    { path: 'widgets', loadChildren: 'app/sing/widgets/widgets.module#WidgetsModule' }
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
