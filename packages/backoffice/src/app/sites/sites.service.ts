import { EventEmitter, Output, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Data, DataType, Sites } from 'lib/api';
import { DynamicForm } from 'lib/dynamic-forms';


@Injectable()
export class SitesService {
  constructor(private apiService: ApiService) { }

  getSite(siteId: string): Observable<Data<Sites.Site>> {
    return this.apiService.getByType<Data<Sites.Site>>(Data, '/data/' + siteId);
  }

  saveSite(site: Data<Sites.Site>) {
    this.apiService.put('/data/' + site.id, site);
  }

  getSites(): Observable<Data<Sites.Site>[]> {
    return this.apiService.getArrayByType<Data<Sites.Site>>(Data, '/sites');
  }

  getForm(model: Data<any>): Observable<DynamicForm> {
    return this.apiService.getForm(model);
  }
}
