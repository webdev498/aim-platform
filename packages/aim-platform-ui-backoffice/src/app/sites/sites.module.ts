import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SitesComponent} from "./sites.component";
import {RouterModule} from "@angular/router";

export const routes = [
  { path: '', component: SitesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SitesComponent
  ]
})
export class SitesModule {
  static routes = routes
}
