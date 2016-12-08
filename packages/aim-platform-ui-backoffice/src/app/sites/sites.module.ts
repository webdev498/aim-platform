import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SitesComponent} from "./sites.component";
import {RouterModule} from "@angular/router";
import { SiteComponent } from './site/site.component';
import {SiteService} from "./site/site.service";
import { TemplateComponent } from './site/template/template.component';
import {TemplateService} from "./site/template/template.service";

export const routes = [
  { path: '', component: SitesComponent, pathMatch: 'full' },
  { path: ':id', component: SiteComponent},
  { path: ':id/template/:id', component: TemplateComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SitesComponent,
    SiteComponent,
    TemplateComponent
  ],
  providers: [
    SiteService,
    TemplateService
  ]
})
export class SitesModule {
  static routes = routes
}
