import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


export const ROUTES: Routes = [{
  path: '', redirectTo: 'app', pathMatch: 'full'
}, {
  path: 'app',   loadChildren: () => new Promise(resolve => {
    require.ensure([], require => {
      resolve(require('./layout/layout.module').LayoutModule);
    })
  })
}, {
  path: 'login',  loadChildren: () => new Promise(resolve => {
    require.ensure([], require => {
      resolve(require('./login/login.module').LoginModule);
    })
  })
}, {
  path: 'error', component: ErrorComponent
}, {
  path: '**',    component: ErrorComponent
}
];
