import { Injectable, Optional, Inject } from '@angular/core';
import { Http, BaseRequestOptions, Response, ResponseOptions, Headers, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import * as _ from 'lodash';

import { AppConfig } from './app.config';
import { DefaultApi, Data, DataType, Form } from 'lib/api';
import { DynamicForm } from 'lib/dynamic-forms';

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
      let arr = response.json();
      let ret = [];
      for(var i = 0; i < arr.length; i++) {
        let o = {};
        ret.push(Object.assign(o, arr[i]));
      }
      console.log('ApiService:getArray, return: ', ret);
      return ret;
    });
  }

  getByType<T>(objectType: { new(): T }, ...params): Observable<T> {
    console.log('ApiService:getByType, params: ', objectType, params);
    return this.request('get', params).map( response => {
      let o = (undefined !== objectType) ? new objectType() : {};
      o = Object.assign(o, response.json()) as T;
      console.log('ApiService:getByType, o: ', o);
      return o;
    });
  }

  getArrayByType<T>(objectType: { new(): T }, ...params): Observable<T[]> {
    console.log('ApiService:getArrayByType, params: ', objectType, params);
    return this.request('get', params).map( (response):T[] => {
      let arr = response.json();
      let ret: Array<T> = [];
      for(var i = 0; i < arr.length; i++) {
        let o = (undefined !== objectType) ? new objectType() : {};
        ret.push(Object.assign(o, arr[i]) as T);
      }
      console.log('ApiService:getArrayByType, return: ', ret);
      return ret;
    });
  }


  getDataType(model: Data<any>): Observable<DataType> {
    return new Observable<DataType>(observer => {
      if(!_.isEmpty(model.dataTypeId)) {
        this.getByType<DataType>(DataType, '/dataTypes/' + model.dataTypeId).subscribe(dataType => {
          if(dataType) {
            observer.next(dataType);
            observer.complete();
          } else {
            observer.error('DataType not found');
          }
        });
      } else {
        observer.error('Object does not have a dataTypeId');
      }
    });
  }


  getForm(model: Data<any>): Observable<DynamicForm> {
    return new Observable<DynamicForm>(observer => {
      if(!_.isEmpty(model.dataTypeId)) {
        this.getDataType(model).subscribe(dataType => {
          if(!_.isEmpty(dataType.formId)) {
            this.getByType<Data<Form>>(Data, '/data/' + dataType['formId']).subscribe(form => {
              let f = new DynamicForm();
              Object.assign(f, form);
              observer.next(f);
              observer.complete();
            });
          } else {
            observer.error('No form associated with this DataType');
          }
        });
      } else {
        observer.error('Model does not have a dataTypeId');
      }
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
