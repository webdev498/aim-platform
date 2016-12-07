import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowsComponent} from "./shows.component";
import {RouterModule} from "@angular/router";

export const routes = [
  { path: '', component: ShowsComponent, pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ShowsComponent
  ]
})
export class ShowsModule {
  static routes = routes
}
