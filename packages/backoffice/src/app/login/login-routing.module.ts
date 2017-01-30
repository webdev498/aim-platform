import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }    from './login.component';
import { LogoutComponent }  from './logout.component';

import { AuthConfigResolver } from 'app/app.resolver';

export const routes: Routes = [
  {
    path: 'login',
    resolve: {
      authConfig: AuthConfigResolver
    },
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'logout', component: LogoutComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
