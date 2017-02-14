import { EventEmitter, Output, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { ApiService } from '../api.service';
import { DynamicForm } from 'lib/dynamic-forms';

import { Data, DataType, Companies } from 'lib/api';

@Injectable()
export class CompaniesService {
  constructor(private apiService: ApiService) { }

  getCompany(companyId: string): Observable<Data<Companies.Company>> {
    return this.apiService.getByType<Data<Companies.Company>>(Data, '/data/' + companyId);
  }

  saveCompany(company: Data<Companies.Company>) {
    this.apiService.put('/data/' + company.id, company);
  }

  getCompanies(): Observable<Data<Companies.Company>[]> {
    return this.apiService.getArrayByType<Data<Companies.Company>>(Data, '/companies');
  }

  getForm(model: Data<any>): Observable<DynamicForm> {
    return this.apiService.getForm(model);
  }
}
