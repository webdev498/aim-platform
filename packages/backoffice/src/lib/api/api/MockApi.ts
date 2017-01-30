import { Http, BaseRequestOptions, Request, Response, ResponseOptions, Headers, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DefaultApi } from './DefaultApi';

import { MOCK_API_DATA } from '../mock';

import * as _ from 'lodash';

@Injectable()
export class MockApi extends DefaultApi {

  constructor(private backend: MockBackend, protected http: Http, @Optional() basePath: string) {
    super(http, basePath);
    const MOCK_API_RESPONSE_TIMER = 'Http Request, MockApi response';
    this.backend.connections.subscribe(c => {
      console.time(MOCK_API_RESPONSE_TIMER);
      console.log('MockApi:backend.connections, request.url', c.request);
      let request: Request = c.request;
      let response: Response;

      let path = request.url.replace(this.basePath, '').replace(/^\//, '').replace('/', '.');

      console.log('MockApi, request basePath: ', this.basePath, ', path: ', path, ', headers: ', request.headers, ', body: ', request.json());
      let data = null;
      let delay = 0;

      if(_.has(MOCK_API_DATA, path)) {
        data = _.get(MOCK_API_DATA, path);
      } else {
        if(path.startsWith('users')) {
          data = _.get(MOCK_API_DATA, 'users.generic');
          if(data) {
            _.set(data, 'body.id', path.split('.')[1]);
          }
        }
      }

      if(_.has(data, 'delay')) delay = parseInt(_.get<string>(data, 'delay'));

      let body = this._getBody(data);

      switch(request.method) {
        case RequestMethod.Get: {
          // this one's simple, we already retrieved the body above
          if(!data) {
            throw 'MockApi, need to add support for returning XXX responses when something goes wrong'
          }
        } break;
        case RequestMethod.Post: {
          let requestBody = request.json();

        } break;
        case RequestMethod.Put: {
          if(!data) {
            throw 'MockApi, need to add support for returning XXX responses when something goes wrong'
          }
          let requestBody = request.json();
          if(_.has(requestBody, 'id')) {
            if(requestBody.id == body.id) {
              _.set(MOCK_API_DATA, [path, 'body'], requestBody);
              if(_.has(data, '____root')) {
                let root = _.get(data, '____root');
                _.set(MOCK_API_DATA, [root, body.id, 'body'], requestBody);
              }
              data = _.get(MOCK_API_DATA, path);
              body = this._getBody(data);
            }
          }
        } break;
        case RequestMethod.Delete: {

        } break;
        default: {
          throw 'MockApi, Unimplemented RequestMethod: ' + request.method;
        }
      }

      if(body) {
        console.log('MockApi, response: ', path, ', object: ', body);
        response = new Response(new ResponseOptions({
          headers: new Headers(_.get(data, 'headers', {})),
          status: _.get(data, 'statusCode', 200),
          statusText: _.get(data, 'statusText', 'OK'),
          body: JSON.stringify(body),
        }));
      }

      if(response) {
        if(delay) {
          console.log('MockApi, response delay', delay);
          setTimeout(() => {
            //console.log('MockApi response');
            console.timeEnd(MOCK_API_RESPONSE_TIMER);
            if(response.status === 200) c.mockRespond(response);
            else c.mockError(response);
          }, delay);
        } else {
          //console.log('MockApi, response');
          if(response.status === 200) c.mockRespond(response);
          else c.mockError(response);
        }
      }
    });
  }

  private _getBody(data): any {
    let body = null
    if('body' in data) {
      body = data['body'];
    } else {
      // hocky work around for converting a key'd set of data into a generic array of data
      body = [];
      for(var k in data) {
        if('body' in data[k]) {
          body.push(data[k]['body']);
        } else {
          body.push(null);
        }
      }
    }
    return body;
  }
}
