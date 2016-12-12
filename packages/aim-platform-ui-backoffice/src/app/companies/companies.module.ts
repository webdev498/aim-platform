import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import {CompaniesComponent} from "./companies.component";
import {RouterModule} from "@angular/router";
import { ContactsComponent } from './company/contacts/contacts.component';
import { ContactComponent } from './company/contacts/contact/contact.component';
import { ProductsComponent } from './company/products/products.component';
import { ProductComponent } from './company/products/product/product.component';

export const routes = [
  { path: '', component: CompaniesComponent, pathMatch: 'full' },
  { path: ':companyId', component: CompanyComponent},
  { path: ':companyId/contacts', component: ContactsComponent },
  { path: ':companyId/contacts/:contactId', component: ContactComponent },
  { path: ':companyId/products', component: ProductsComponent },
  { path: ':companyId/products/:productId', component: ProductComponent }
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
    ContactComponent,
    ProductsComponent,
    ProductComponent
  ]
})
export class CompaniesModule { }
