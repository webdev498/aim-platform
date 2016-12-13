import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowsComponent} from "./shows.component";
import {RouterModule} from "@angular/router";
import { ShowComponent } from './show/show.component';

export const routes = [
  { path: '', component: ShowsComponent, pathMatch: 'full' },
  { path: ':showId', component: ShowComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ShowsComponent,
    ShowComponent
  ]
})
export class ShowsModule {
  static routes = routes
}
