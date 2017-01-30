import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformsComponent } from './platforms.component';

import { AuthGuard } from 'lib/auth';
import { AuthConfigResolver, UserResolver } from 'app/app.resolver';

export const routes: Routes = [
  {
    path: 'platforms',
    resolve: {
      authConfig: AuthConfigResolver,
      user: UserResolver
    },
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: PlatformsComponent, pathMatch: 'full' },
      { path: ':select', component: PlatformsComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlatformsRoutingModule { }
