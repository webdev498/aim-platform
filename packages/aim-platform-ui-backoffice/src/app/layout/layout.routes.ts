import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
      path: 'dashboard', loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('../dashboard/dashboard.module').DashboardModule);
      })
    })
    },
    {
      path: 'inbox', loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('../inbox/inbox.module').InboxModule);
      })
    })
    },    {
      path: 'charts', loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('../charts/charts.module').ChartsModule);
      })
    })
    },{
      path: 'profile', loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('../profile/profile.module').ProfileModule);
      })
    })
    },{
      path: 'forms', loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('../forms/forms.module').FormModule);
      })
    })
    },{
      path: 'ui', loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('../ui-elements/ui-elements.module').UiElementsModule);
      })
    })
    },{
      path: 'extra', loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('../extra/extra.module').ExtraModule);
      })
    })
    },{
      path: 'tables', loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('../tables/tables.module').TableModule);
      })
    })
    },{
      path: 'maps', loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('../maps/maps.module').MapModule);
      })
    })
    },{
      path: 'grid', loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('../grid/grid.module').GridModule);
      })
    })
    },{
      path: 'widgets', loadChildren: () => new Promise(resolve => {
      require.ensure([], require => {
        resolve(require('../widgets/widgets.module').WidgetsModule);
      })
    })
    }
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
