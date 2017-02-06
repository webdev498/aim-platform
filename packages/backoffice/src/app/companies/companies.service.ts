import { EventEmitter, Output, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { ApiService } from '../api.service';
import { DynamicForm } from 'lib/dynamic-forms';

import { Data, DataType, Form, Company } from 'lib/api';

@Injectable()
export class CompaniesService {
  constructor(private apiService: ApiService) { }

  getCompany(companyId: string): Observable<Data<Company>> {
    return this.apiService.getByType<Data<Company>>(Data, '/data/' + companyId);
  }

  saveCompany(company: Data<Company>) {
    this.apiService.put('/data/' + company.id, company);
  }

  getCompanies(): Observable<Data<Company>[]> {
    return this.apiService.getArrayByType<Data<Company>>(Data, '/companies');
  }

  getForm(model: Data<any>): Observable<DynamicForm> {
    return this.apiService.getForm(model);
  }
}
