import { Injectable } from '@angular/core';
import _ from 'lodash';
import * as sjcl from 'sjcl';

export type InteralStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {
  _state: InteralStateType = { };

  constructor() {
    // set sessionStorage to app state
    _.forIn(window.sessionStorage, (value, key) => {
      this.set(key, value);
    });
  }

  // already return a clone of the current state
  get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }


  get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }


  private _clone(object: InteralStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }

  parseJwt(jwtToken) {
    const payload = jwtToken.split('.')[1];
    return JSON.parse(
      sjcl.codec.utf8String.fromBits(sjcl.codec.base64url.toBits(payload))
    );
  }
}
