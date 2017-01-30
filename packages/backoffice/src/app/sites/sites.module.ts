import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';


import { UiModule } from 'lib/ui';
import { DynamicFormsModule } from 'lib/dynamic-forms';

import { RouterModule } from '@angular/router';

import { SitesService } from "./sites.service";

import { SiteComponent } from './site/site.component';
import { SitesComponent } from './sites.component';

import { TemplateComponent } from './site/templates/template.component';
import { TemplatesComponent } from "./site/templates/templates.component";

import { PageComponent } from "./site/pages/page.component";
import { PagesComponent } from "./site/pages/pages.component";

import { SitesRoutingModule } from './sites-routing.module';

import { DataTableModule, MessagesModule, SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule, MessagesModule, SharedModule,
    UiModule,
    DynamicFormsModule,
    SitesRoutingModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    SitesService,
  ],
  declarations: [
    PageComponent,
    PagesComponent,
    SiteComponent,
    SitesComponent,
    TemplateComponent,
    TemplatesComponent,
  ]
})
export class SitesModule {
}

