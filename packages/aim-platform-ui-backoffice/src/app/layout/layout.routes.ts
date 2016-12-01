import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'inbox', loadChildren: 'app/inbox/inbox.module#InboxModule' },
    { path: 'charts', loadChildren: 'app/charts/charts.module#ChartsModule' },
    { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' },
    { path: 'forms', loadChildren: 'app/forms/forms.module#FormModule' },
    { path: 'ui', loadChildren: 'app/ui-elements/ui-elements.module#UiElementsModule' },
    { path: 'extra', loadChildren: 'app/extra/extra.module#ExtraModule' },
    { path: 'tables', loadChildren: 'app/tables/tables.module#TableModule' },
    { path: 'maps', loadChildren: 'app/maps/maps.module#MapModule' },
    { path: 'grid', loadChildren: 'app/grid/grid.module#GridModule' },
    { path: 'widgets', loadChildren: 'app/widgets/widgets.module#WidgetsModule' }
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
