import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportsComponent} from "./reports.component";
import {RouterModule} from "@angular/router";

export const routes = [
  { path: '', component: ReportsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ReportsComponent
  ]
})
export class ReportsModule {
  static routes = routes;
}
