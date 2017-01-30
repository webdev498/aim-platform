import { Injectable, Optional, Inject } from '@angular/core';
import { Http, BaseRequestOptions, Response, ResponseOptions, Headers, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

import { AppConfig } from './app.config';
import { DefaultApi } from 'lib/api';

@Injectable()
export class ApiService {
  headers: Headers = new Headers();

  constructor(private appConfig: AppConfig, private apiGateway: DefaultApi, protected http: Http) {
  }

  request(method, params): Observable<any> {
    return this.http.request(environment.api.basePath + params[0], {
      method: method,
      headers: this.headers,
      body: params[1]
    });
  }

  get(...params): Observable<any> {
    console.log('ApiService:get, params: ', params);
    return this.request('get', params).map( response => {
      let o = Object.assign({}, response.json());
      console.log('ApiService:getByType, o: ', o);
      return o;
    });
  }

  getArray(...params): Observable<any[]> {
    console.log('ApiService:getArray, params: ', params);
    return this.request('get', params).map( (response):any[] => {
      console.log('ApiService:getArray, response: ', response);
      let arr = response.json();
      let ret = [];
      for(var i = 0; i < arr.length; i++) {
        let o = {};
        console.log('ApiService.getArray, o:', o);
        ret.push(Object.assign(o, arr[i]));
      }
      return ret;
    });
  }

  getByType<T>(objectType: { new(): T }, ...params): Observable<T> {
    console.log('ApiService:getByType, params: ', objectType, params);
    return this.request('get', params).map( response => {
      let o = (undefined !== objectType) ? new objectType() : {};
      console.log('ApiService:getByType, o: ', o);
      return Object.assign(o, response.json()) as T;
    });
  }

  getArrayByType<T>(objectType: { new(): T }, ...params): Observable<T[]> {
    console.log('ApiService:getArrayByType, params: ', objectType, params);
    return this.request('get', params).map( (response):T[] => {
      console.log('ApiService:getArrayByType, response: ', response);
      let arr = response.json();
      let ret: Array<T> = [];
      for(var i = 0; i < arr.length; i++) {
        let o = (undefined !== objectType) ? new objectType() : {};
        console.log('ApiService:getArrayByType, o: ' , o);
        ret.push(Object.assign(o, arr[i]) as T);
      }
      return ret;
    });
  }

  post(...params): Observable<any> {
    return this.request('post', params);
  }
  put(...params): Observable<any> {
    return this.request('put', params);
  }
  delete(...params): Observable<any> {
    return this.http.delete('delete', params);
  }
}
