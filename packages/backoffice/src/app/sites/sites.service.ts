import { EventEmitter, Output, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { DataTypeItem } from 'lib/api';
import { Form } from 'lib/dynamic-forms';

export class Site {
  id: string;
  title: string;
  dataType: string;
  dataTypeId: string;
  content: {
    url: string;
    description: string;
    aliases: string[];
  };
  [propName: string]: any;
}

@Injectable()
export class SitesService {
  constructor(private apiService: ApiService) { }

  getSite(siteId: string): Observable<Site> {
    return this.apiService.getByType<Site>(Site, '/data/' + siteId);
  }

  saveSite(site: Site) {
    this.apiService.put('/data/' + site.id, site);
  }

  getSites(): Observable<Site[]> {
    return this.apiService.getArrayByType<Site>(Site, '/sites');
  }

  getDataType(o: any): Observable<DataTypeItem> {
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
