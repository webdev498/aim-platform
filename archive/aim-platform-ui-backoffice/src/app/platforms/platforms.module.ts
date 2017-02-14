import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlatformsComponent} from "./platforms.component";
import {RouterModule} from "@angular/router";

export const routes = [
  { path: '', component: PlatformsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PlatformsComponent
  ]
})
export class PlatformsModule { }
