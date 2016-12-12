import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import {CompaniesComponent} from "./companies.component";
import {RouterModule} from "@angular/router";
import { ContactsComponent } from './company/contacts/contacts.component';
import { ContactComponent } from './company/contacts/contact/contact.component';

export const routes = [
  { path: '', component: CompaniesComponent, pathMatch: 'full' },
  { path: ':companyId', component: CompanyComponent},
  { path: ':companyId/contacts', component: ContactsComponent },
  { path: ':companyId/contacts/:contactId', component: ContactComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CompaniesComponent,
    CompanyComponent,
    ContactsComponent,
    ContactComponent
  ]
})
export class CompaniesModule { }
