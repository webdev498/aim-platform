import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent }    from './companies.component';
import { CompanyComponent }  from './company/company.component';

export const routes = [
  { path: '', component: CompaniesComponent, pathMatch: 'full' },
  { path: 'create', component: CompanyComponent },
  { path: ':companyId', component: CompanyComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CompaniesRoutingModule { }
