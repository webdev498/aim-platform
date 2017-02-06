import { EventEmitter, Output, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { DataTypeItem } from 'lib/api';
import { Form } from 'lib/dynamic-forms';

export type Status = "active" | "inactive" | "pending" | "unknown";

export class Data<T> {
  id: string;
  versionId: string;
  platformId: string;
  module: string;
  moduleId: string;
  dataType: string;
  dataTypeId: string;
  createdAt: number; // date-time
  createdBy: string;
  modifiedAt: number;
  modifiedBy: string;
  deletedAt?: number;
  deletedBy?: string;
  content: T;
}

export class Company {
  status: Status;
  title: string;
  primaryContact?: {
  };
  primaryOffice?: Office;
  contacts?: {
  }[];
  offices?: Office[];
  /**
   * KeyValueList<type, value> where type is 'phone', 'mobile', 'fax', email', etc - no restrictions are placed on the key
   */
  channels?: KeyValueList;
}

export class Office {
  title?: string;
  primaryContact?: string;
  contacts?: string[];
  address?: Address;
  /**
   * KeyValueList<type, value> where type is 'phone', 'mobile', 'fax', email', etc - no restrictions are placed on the key
   */
  channels?: KeyValueList;
}

export class Address {
  /**
   * Optional user-defined name of the Address, for example 'Home' or 'Work'
   */
  name?: string;
  line1?: string;
  line2?: string;
  line3?: string;
  city?: string;
  stateOrProvince?: string;
  postalCode?: string;
  country?: string;
  geoLocation?: GeoLocation;
}

export class GeoLocation {
  latitude: string;
  longitude: string;
}
export type KeyValueList = {
  key: string;
  value: null | boolean | {
  } | any[] | number | string;
}[];

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

  getDataType(o: any): Observable<DataTypeItem> {
    return new Observable<DataTypeItem>(observer => {
      if('dataTypeId' in o) {
        this.apiService.getByType<DataTypeItem>(DataTypeItem, '/dataTypes/' + o['dataTypeId']).subscribe(dataType => {
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
        observer.error('Object does not have a dataTypeId');
      }
    });
  }

  getForms(): Observable<Form[]> {
    return this.apiService.getArrayByType<Form>(Form, '/forms');;
  }

  getForm(formId: any): Observable<Form> {
    return this.apiService.getByType<Form>(Form, '/forms/' + formId);
  }

  // TODO: this is a dummy method that won't actually reside here
  getData(modelId: any): Observable<any> {
    return this.apiService.get('/data/' + modelId).map(data => {
      console.log('FormsService:getData, data: ', data);
      return data;
    });
  }
}
