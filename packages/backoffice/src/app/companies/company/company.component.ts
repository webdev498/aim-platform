import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { DynamicFormComponent, Form } from 'lib/dynamic-forms';

import { CompaniesService} from '../companies.service';
import { Data, DataType, Company } from 'lib/api';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  //styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company: Data<Company>;
  dataType: Data<DataType>;
  form: Form;

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
          if(company.dataTypeId) {
            this.companiesService.getDataType(company).subscribe(dataType => {
                console.log('ComapnyComponent:ngOnInit, dataType: ', dataType);
                if(dataType['form']) {
                  this.form = dataType['form'];
                }
                this.dataType = dataType;
                this.company = company;
                //this.form.model = this.company;
                this.initialized = true;
              },
              (err) => {
                // TODO: Display an error to the user
                console.warn(err);
              });
          }
        });
      } else {
        // create new company
        let company = new Data<Company>();
        this.companiesService.getDataType(company).subscribe(dataType => {
            if(dataType['form']) {
              this.form = dataType['form'];
            }
            this.dataType = dataType;
            this.company = company;
            this.initialized = true;
          },
          (err) => {
            // TODO: Display an error to the user
            console.warn(err);
          });
      }
    });
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }

  onSubmit(formData: {model: Company}) {
    console.log('CompanyComponent, onSubmit, model: ', formData.model);
    this.companiesService.saveCompany(this.company);
  }

  onCancel(formData: {model: Company}) {
    console.log('CompanyComponent, onCancel, model: ', formData.model);
  }

}
