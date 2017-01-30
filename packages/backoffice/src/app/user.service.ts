import { Injectable, Optional, Inject } from '@angular/core';
import { Http, BaseRequestOptions, Response, ResponseOptions, Headers, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

import { AppConfig } from './app.config';
import { DefaultApi } from 'lib/api';

export class User {
  id: any;
  displayName: string;
  firstName: string;
  lastName: string;
  avatar?: {
    image?: string,
    icon?: string,
  };
  notifications: {
    image?: string,
    icon?: string,
    createdAt: Date,
    message: string,
  }[];
  defaults: {
    platform?: string;
  };
  platforms: {
    [propName: string]: {
      id: string,
      title: string,
      defaults: {
        module?: string,
        [propName: string]: any,
      }
    }
  };
  [propName: string]: any;
}

@Injectable()
export class UserService {
  private _user: User;
  get user(): User {
    return this._user;
  }

  set user(u: User) {
    throw 'You can not set the user directly, call userService.setUser(user) instead';
  }

  constructor() { }

  setUser(u: any) {
    // TODO: validate user identity
    let user = new User();
    if('content' in u) {
      user = Object.assign(user, u['content']);
    }

    if('id' in u) user.id = u['id'];
    if('title' in u) user.displayName = u['title'];

    this._user = user;
  }
}
