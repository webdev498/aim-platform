import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformsComponent } from "./platforms.component";
import { RouterModule } from "@angular/router";
import { PlatformsRoutingModule } from './platforms-routing.module';
import { UiModule } from 'lib/ui';
import { PlatformsService } from './platforms.service';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    PlatformsRoutingModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    PlatformsService,
  ],
  declarations: [
    PlatformsComponent
  ]
})
export class PlatformsModule { }
