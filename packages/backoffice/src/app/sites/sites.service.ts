import { EventEmitter, Output, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Data, DataType, Site } from 'lib/api';
import { Form } from 'lib/dynamic-forms';


@Injectable()
export class SitesService {
  constructor(private apiService: ApiService) { }

  getSite(siteId: string): Observable<Data<Site>> {
    return this.apiService.getByType<Data<Site>>(Data, '/data/' + siteId);
  }

  saveSite(site: Data<Site>) {
    this.apiService.put('/data/' + site.id, site);
  }

  getSites(): Observable<Data<Site>[]> {
    return this.apiService.getArrayByType<Data<Site>>(Data, '/sites');
  }

  getDataType(o: any): Observable<Data<DataType>> {
    return new Observable<Data<DataType>>(observer => {
      if('typeId' in o) {
        this.apiService.getByType<Data<DataType>>(Data, '/dataTypes/' + o['typeId']).subscribe(dataType => {
          if(dataType) {
            if(dataType['formId']) {
              this.apiService.getByType<Data<Form>>(Data, '/data/' + dataType['formId']).subscribe(form => {
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
