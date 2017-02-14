import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SitesComponent} from "./sites.component";
import {RouterModule} from "@angular/router";
import { SiteComponent } from './site/site.component';
import {SiteService} from "./site/site.service";
import { TemplateComponent } from './site/template/template.component';
import {TemplateService} from "./site/template/template.service";
import {PageComponent} from "../pages/page/page.component";

export const routes = [
  { path: '', component: SitesComponent, pathMatch: 'full' },
  { path: ':siteId', component: SiteComponent},
  { path: ':siteId/template/:templateId', component: TemplateComponent },
  { path: ':siteId/page/:pageId', component: PageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PageComponent,
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
