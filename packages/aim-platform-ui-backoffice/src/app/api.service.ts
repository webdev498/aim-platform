import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable()
export class ApiService {
  headers: Headers;
  constructor(public http: Http) {

  }
  request(method, params): Observable<Response> {
    return this.http.request(environment.apiUrl + params[0], {
      method: method,
      headers: this.headers,
      body: params[1]
    });
  }
  get(...params): Observable<Response> {
    return this.request('get', params);
  }
  post(...params): Observable<Response> {
    return this.request('post', params);
  }
  put(...params): Observable<Response> {
    return this.request('put', params);
  }
  delete(...params): Observable<Response> {
    return this.http.delete('delete', params);
  }
}
