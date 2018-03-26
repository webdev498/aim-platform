import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { UiModule } from 'lib/ui';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    DashboardRoutingModule,
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
