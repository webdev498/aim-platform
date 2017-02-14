import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { DynamicFormComponent, DynamicForm } from 'lib/dynamic-forms';

import { CompaniesService} from '../companies.service';
import { Data, Companies } from 'lib/api';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  //styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company: Data<Companies.Company>;
  form: DynamicForm;

  initialized: boolean = false;

  constructor(private companiesService: CompaniesService, private route: ActivatedRoute, private router: Router) {}

  private routeParamSubscription: any;
  ngOnInit() {
    this.routeParamSubscription = this.route.params.subscribe(params => {
      let companyId = params['companyId'];

      if(companyId) {
        console.log('CompanyComponent:ngOnInit, companyId: ', companyId);
        this.companiesService.getCompany(companyId).subscribe(company => {
          console.log('CompanyComponent:ngOnInit, company: ', company);
          this.companiesService.getForm(company).subscribe(form => {
            this.company = company;
            this.form = form;
            this.initialized = true;
          });
        });
      } else {
        // create new company
        let company = new Data<Companies.Company>();
        this.companiesService.getForm(company).subscribe(form => {
          this.company = company;
          this.form = form;
          this.initialized = true;
        });
      }
    });
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }

  onSubmit(formData: {model: Companies.Company}) {
    console.log('CompanyComponent, onSubmit, model: ', formData.model);
    this.companiesService.saveCompany(this.company);
  }

  onCancel(formData: {model: Companies.Company}) {
    console.log('CompanyComponent, onCancel, model: ', formData.model);
  }

}
