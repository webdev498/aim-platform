import 'rxjs/Operator';

import { BrowserModule } from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { ErrorComponent } from './error/error.component';
import {AppConfig} from "./app.config";
import { AppState, InteralStateType } from './app.service';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import {UsersService} from "./users.service";
import { PagesComponent } from './pages/pages.component';
import { CompaniesComponent } from './companies/companies.component';
import {ApiService} from "./api.service";

type StoreType = {
  state: InteralStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    ...APP_RESOLVER_PROVIDERS,
    ApiService,
    AppState,
    AppConfig,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
