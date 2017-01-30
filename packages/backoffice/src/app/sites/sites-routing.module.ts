import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitesComponent }    from './sites.component';
import { SiteComponent }  from './site/site.component';
import { TemplateComponent } from './site/templates/template.component';
import { PageComponent } from './site/pages/page.component';

export const routes = [
  { path: '', component: SitesComponent, pathMatch: 'full' },
  { path: 'create', component: SiteComponent },
  { path: ':siteId', component: SiteComponent},
  { path: ':siteId/template/:templateId', component: TemplateComponent },
  { path: ':siteId/page/:pageId', component: PageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SitesRoutingModule { }
