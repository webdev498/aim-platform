import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';


import { UiModule } from 'lib/ui';
import { DynamicFormsModule } from 'lib/dynamic-forms';

import { RouterModule } from '@angular/router';

import { CompaniesService } from "./companies.service";

import { CompanyComponent } from './company/company.component';
import { CompaniesComponent } from './companies.component';

import { CompaniesRoutingModule } from './companies-routing.module';

import { DataTableModule, MessagesModule, SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule, MessagesModule, SharedModule,
    UiModule,
    DynamicFormsModule,
    CompaniesRoutingModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    CompaniesService,
  ],
  declarations: [
    CompanyComponent,
    CompaniesComponent
  ]
})
export class CompaniesModule {
}

