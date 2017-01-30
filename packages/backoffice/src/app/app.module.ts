import { NgModule, ApplicationRef, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { PlatformsModule } from './platforms/platforms.module';
import { LayoutModule } from './layout/layout.module';

// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS, AuthConfigResolver } from './app.resolver';
import { AppConfig } from './app.config';
import { ErrorComponent } from './error/error.component';

import { ApiService } from './api.service';
import { UserService } from './user.service';
import { AuthService, CognitoUtil, CognitoService, AuthGuard, LOGIN_ROUTE } from '../lib/auth';
import { DefaultApi, MockApi } from 'lib/api';
import { UiModule } from 'lib/ui';

export function authServiceFactory(authConfigResolver) {
  return new CognitoService(authConfigResolver);
}

export function httpServiceFactory(backend, options) {
  return new Http(backend, options);
}

export const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppConfig,
  AuthGuard,
  {
    // swap this out with whatever Auth Service you want to use
    provide: AuthService,
    //useClass: CognitoService,
    deps: [ AuthConfigResolver ],
    useFactory: authServiceFactory,
  },
  ApiService,
  UserService,
  {
    provide: LOGIN_ROUTE,
    useValue: '/login',
  },
  {
    provide: DefaultApi,
    useClass: MockApi,
  },
  MockBackend,
  BaseRequestOptions,
  {
    provide: Http,
    deps: [ MockBackend, BaseRequestOptions ],
    useFactory: httpServiceFactory,
  }
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    ErrorComponent,
    //Logout,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    UiModule,
    LoginModule,
    PlatformsModule,
    LayoutModule,
    AppRoutingModule,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
  ]
})
export class AppModule { }
