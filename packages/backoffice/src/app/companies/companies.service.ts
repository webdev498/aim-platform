import { EventEmitter, Output, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Form as DynamicForm } from 'lib/dynamic-forms';


import { Data, DataType, Form, Company } from 'lib/api';

@Injectable()
export class CompaniesService {
  constructor(private apiService: ApiService) { }

  getCompany(companyId: string): Observable<Company> {
    return this.apiService.getByType<Company>(Company, '/data/' + companyId);
  }

  saveCompany(company: Data<Company>) {
    this.apiService.put('/data/' + company.id, company);
  }

  getCompanies(): Observable<Data<Company>[]> {
    return this.apiService.getArrayByType<Data<Company>>(Data, '/companies');
  }

  getDataType(o: any): Observable<Data<DataType>> {
    return new Observable<Data<DataType>>(observer => {
      if('dataTypeId' in o) {
        this.apiService.getByType<Data<DataType>>(Data, '/dataTypes/' + o.dataTypeId).subscribe(dataType => {
          if(dataType) {
            if(dataType['formId']) {
              this.apiService.getByType<Data<Form>>(Data, '/data/' + dataType['formId']).subscribe(form => {
                let f = new DynamicForm();
                Object.assign(f, form);
                dataType['form'] = f;
                observer.next(dataType);
                observer.complete();
              });
            } else {
              observer.error('No form associated with this DataType');
            }
          } else {
            observer.error('DataType not found');
          }
        });
      } else {
        observer.error('Object does not have a dataTypeId');
      }
    });
  }

  getForms(): Observable<Data<Form>[]> {
    return this.apiService.getArrayByType<Data<Form>>(Data, '/forms');;
  }

  getForm(formId: any): Observable<Data<Form>> {
    return this.apiService.getByType<Data<Form>>(Data, '/forms/' + formId);
  }

  // TODO: this is a dummy method that won't actually reside here
  getData(modelId: any): Observable<any> {
    return this.apiService.get('/data/' + modelId).map(data => {
      console.log('FormsService:getData, data: ', data);
      return data;
    });
  }
}
