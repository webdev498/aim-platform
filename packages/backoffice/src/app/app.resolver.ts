import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { JwtHelper } from 'angular2-jwt';

import { ApiService } from './api.service';
import { UserService } from './user.service';
import { AuthService } from 'lib/auth';
import { AppConfig } from './app.config';

@Injectable()
export class DataResolver implements Resolve<any> {
  constructor(private apiService: ApiService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|any {
    return Observable.of({ res: 'I am data'});
  }
}

@Injectable()
export class AuthConfigResolver implements Resolve<any> {
  constructor(private appConfig: AppConfig, private apiService: ApiService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|any {
    let self = this;
    console.log('AuthConfigResolver', route, state);
    if(self.appConfig.auth) {
      return self.appConfig.auth;
    } else {
      return new Observable<boolean>(observer => {
        this.apiService.get('/auth/config').subscribe(
          (authConfig) => {
            console.log('AuthConfigResolver auth: ', authConfig);
            self.appConfig.auth = authConfig;
            //self.authService.config = authConfig;
            observer.next(authConfig);
            observer.complete();
          },
          (err) => alert(err)
        );
      });
    }
  }
}

@Injectable()
export class PlatformResolver implements Resolve<any> {
  constructor(private apiService: ApiService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|any {
    let self = this;
    console.log('PlatformResolver ', route, state);
    if(route.params['platformId']) {
      let platformId = route.params['platformId'];
      return self.apiService.get('/platforms/' + platformId);
    }
    return Observable.throw('no platformId set');
  }
}

@Injectable()
export class UserResolver implements Resolve<any> {
  constructor(private userService: UserService, private authService: AuthService, private apiService: ApiService ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|any {
    if(this.userService.user) return this.userService.user;
    return new Observable<any>(observer => {
      this.authService.getAuthToken().subscribe(authToken => {
        // if we don't have an authToken, wait until we do
        if(!authToken) return; // TODO: should we error here?

        this.apiService.headers.set('Authorization', 'Bearer ' + authToken);

          // we have an auth token, let's go get our user profile
        let jwt = new JwtHelper();
        let decoded = jwt.decodeToken(authToken);
        console.log('decoded authToken: ', decoded);

        this.apiService.get('/users/' + decoded.username).subscribe(user => {
          console.log('user: ', user);
          this.userService.setUser(user);
          observer.next(user);
          observer.complete();
        });
      });
    });
  }
}

// an array of services to resolve routes with data
export const APP_RESOLVER_PROVIDERS = [
  DataResolver,
  AuthConfigResolver,
  PlatformResolver,
  UserResolver
];
