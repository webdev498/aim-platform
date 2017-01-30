import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

import { Observable } from 'rxjs';

@Injectable()
export class PlatformsService {
  constructor(private apiService: ApiService) {
  }

  getPlatform(platformId): Observable<any> {
    return this.apiService.get('/platforms/' + platformId);
  }

  getPlatforms(): Observable<any[]> {
    return this.apiService.getArray('/platforms');
  }
}
