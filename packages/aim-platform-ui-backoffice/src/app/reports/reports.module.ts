import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportsComponent} from "./reports.component";
import {RouterModule} from "@angular/router";
import { ReportComponent } from './report/report.component';

export const routes = [
  { path: '', component: ReportsComponent, pathMatch: 'full' },
  { path: ':reportId', component: ReportComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ReportsComponent,
    ReportComponent
  ]
})
export class ReportsModule {
  static routes = routes;
}
