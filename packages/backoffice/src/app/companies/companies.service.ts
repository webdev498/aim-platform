import { EventEmitter, Output, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { DataTypeItem } from 'lib/api';
import { Form } from 'lib/dynamic-forms';

export class Company {
  id: string;
  title: string;
  type: string;
  typeId: string;
  content: {
    url: string;
    description: string;
    aliases: string[];
  };
  [propName: string]: any;
}

@Injectable()
export class CompaniesService {
  constructor(private apiService: ApiService) { }

  getCompany(companyId: string): Observable<Company> {
    debugger
    return this.apiService.getByType<Company>(Company, '/data/' + companyId);
  }

  saveCompany(company: Company) {
    this.apiService.put('/data/' + company.id, company);
  }

  getCompanies(): Observable<Company[]> {
    debugger
    return this.apiService.getArrayByType<Company>(Company, '/companies');
  }

  getDataType(o: any): Observable<DataTypeItem> {
    debugger
    return new Observable<DataTypeItem>(observer => {
      if('typeId' in o) {
        this.apiService.getByType<DataTypeItem>(DataTypeItem, '/dataTypes/' + o['typeId']).subscribe(dataType => {
          if(dataType) {
            if(dataType['formId']) {
              this.apiService.getByType<Form>(Form, '/data/' + dataType['formId']).subscribe(form => {
                dataType['form'] = form;
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
        observer.error('Object does not have a typeId');
      }
    });
  }

  getForms(): Observable<Form[]> {
    debugger
    return this.apiService.getArrayByType<Form>(Form, '/forms');;
  }

  getForm(formId: any): Observable<Form> {
    debugger
    return this.apiService.getByType<Form>(Form, '/forms/' + formId);
  }

  // TODO: this is a dummy method that won't actually reside here
  getData(modelId: any): Observable<any> {
    debugger
    return this.apiService.get('/data/' + modelId).map(data => {
      console.log('FormsService:getData, data: ', data);
      return data;
    });
  }
}
