import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { AuthGuard } from 'lib/auth';
import { AuthConfigResolver, PlatformResolver } from './app.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'logout', loadChildren: () => System.import('./login.logout.module') },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

