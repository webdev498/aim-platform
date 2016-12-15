import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'app/:platformId', loadChildren: 'app/layout/layout.module#LayoutModule' },
  { path: 'platforms', loadChildren: 'app/platforms/platforms.module#PlatformsModule' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'logout', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent }
];
