import { EventEmitter, Output, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Data, DataType, Site, Form } from 'lib/api';
import { DynamicForm } from 'lib/dynamic-forms';


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

  getForm(model: Data<any>): Observable<DynamicForm> {
    return this.apiService.getForm(model);
  }
}
