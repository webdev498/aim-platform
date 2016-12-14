import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApprovalsComponent} from "./approvals.component";
import {RouterModule} from "@angular/router";

export const routes = [
  { path: '', component: ApprovalsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ApprovalsComponent
  ]
})
export class ApprovalsModule {
  static routes = routes;
}
