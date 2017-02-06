import { Resolve } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { AppConfig } from '../../app/app.config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

import { environment } from "../../environments/environment";

import * as AWS from 'aws-sdk';
import { CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails } from 'amazon-cognito-identity-js';
//declare var CognitoUser: any;
/*
 * Authentication via Amazon Cognito Service
 */
@Injectable()
export class CognitoService extends AuthService {

  private cognitoUtil: CognitoUtil;
  constructor(configResolver: any) {
    super(configResolver);

    let self = this;

    let configLoader = (authConfig: any) => {
      self.config = {
        type: authConfig.authType,
        value: authConfig.authConfig,
      }
    };

    if(typeof configResolver.resolve === 'function') {
      let resolved = configResolver.resolve(null, null);
      if(resolved instanceof Observable) {
        resolved.subscribe(config => {
          configLoader(config);
        });
      } else {
        configLoader(resolved);
      }
    } else if(configResolver) {
      configLoader(configResolver);
    }

    console.log('CognitoService, loaded', this);
    this.cognitoUtil = new CognitoUtil();

    // how do we wait until the AppConfig says it's finished loading?
    /*
    CognitoUtil._REGION = this.appConfig.auth['value']['region'];
    CognitoUtil._CLIENT_ID = this.appConfig.auth['value']['clientId'];
    CognitoUtil._IDENTITY_POOL_ID = this.appConfig.auth['value']['identityPoolID'];
    CognitoUtil._USER_POOL_ID = this.appConfig.auth['value']['poolId'];
    */
  }

  private _config: {
    type: string,
    value: {
      region: string,
      identityPoolId: string,
      userPoolId: string,
      clientId: string
    }
  } = null;
  get config(): any {
    return this._config;
  }
  set config(conf:any) {
    this._config = conf;
    CognitoUtil.config = this._config.value;
  }

  login(username: string, password: string, remember?: boolean): Observable<boolean> {
    if(undefined === remember) remember = false;
    return new Observable<boolean>(observer => {
      console.log("CognitoService: starting the authentication")
      // Need to provide placeholder keys unless unauthorised user access is enabled for user pool
      AWS.config.update({accessKeyId: 'anything', secretAccessKey: 'anything'})

      localStorage.setItem('CognitoService.rememberUser', remember ? 'true' : 'false');

      let authenticationData = {
        Username: username,
        Password: password,
      };
      let authenticationDetails = new AuthenticationDetails(authenticationData);

      let userData = {
        Username: username,
        Pool: this.cognitoUtil.getUserPool()
      };

      console.log("CognitoService: Params set...Authenticating the user");
      let cognitoUser = new CognitoUser(userData);
      console.log("CognitoService: config is ", AWS.config);
      // the <any> is a hack to fix an issue with the CognitoUser TypeScript typings in index.d.ts for the node_module
      cognitoUser.authenticateUser(authenticationDetails, <any>{
        onSuccess: function (result, userConfirmationNecessary) {
          var logins = {}
          logins['cognito-idp.' + CognitoUtil.config.region + '.amazonaws.com/' + CognitoUtil.config.userPoolId] = result.getIdToken().getJwtToken();

          // Add the User's Id Token to the Cognito credentials login map.
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: CognitoUtil.config.identityPoolId,
            Logins: logins
          });

          //console.log("CognitoService: set the AWS credentials - " + JSON.stringify(AWS.config.credentials));
          console.log("CognitoService: set the AWSCognito credentials - " + JSON.stringify(AWS.config.credentials));
          //callback.cognitoCallback(null, result);
          console.log('CognitoService, login onSuccess: ', result, userConfirmationNecessary);

          if(remember && userConfirmationNecessary !== false) {
            (cognitoUser as any).setDeviceStatusRemembered({
              onSuccess: (status) => {
                console.log('CognitoService, setDeviceStatusRemember ', status);
              },
              onFailure: (err) => {
                console.warn('CognitoService, setDeviceStatusRemember ', err);
              }
            })
          } else {
            (cognitoUser as any).setDeviceStatusNotRemembered({
              onSuccess: (status) => {
                console.log('CognitoService, setDeviceStatusRemember ', status);
              },
              onFailure: (err) => {
                console.warn('CognitoService, setDeviceStatusRemember ', err);
              }
            });
          }

          observer.next(true);
          observer.complete();
        },
        onFailure: function (err) {
          console.log('CognitoService, login onFailure: ', err);
          //callback.cognitoCallback(err.message, null);
          observer.next(false);
          observer.complete();
        },
        newPasswordRequired: function (userAttr:any, requiredAttr:any) {
          observer.error({
            type: 'newPassword',
            userAttr: userAttr,
            requiredAttr: requiredAttr,
            user: cognitoUser,
          });
          observer.complete();
        }
      });
    });
  }

  forgotPassword(username: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let userData = {
        Username: username,
        Pool: this.cognitoUtil.getUserPool()
      };

      let cognitoUser = new CognitoUser(userData);

      cognitoUser.forgotPassword({
        onSuccess: function (result) {
          observer.next(true);
          observer.complete();
        },
        onFailure: function (err) {
          //callback.cognitoCallback(err.message, null);
          observer.next(false);
          observer.complete();
        },
        inputVerificationCode() {
          //callback.cognitoCallback(null, null);
          observer.next(true);
          observer.complete();
        }
      });
    });
  }

  confirmNewPassword(email: string, verificationCode: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      let userData = {
        Username: email,
        Pool: this.cognitoUtil.getUserPool()
      };

      let cognitoUser = new CognitoUser(userData);

      cognitoUser.confirmPassword(verificationCode, password, {
        onSuccess: function () {
          //callback.cognitoCallback(null, result);
          observer.next(true);
          observer.complete();
        },
        onFailure: function (err) {
          //callback.cognitoCallback(err.message, null);
          observer.next(false);
          observer.complete();
        }
      });
    });
  }

  logout() {
    let user = this.cognitoUtil.getCurrentUser();
    console.log("CognitoService: Logging out: ", user);

    // this is done to prevent compiler errors
    if(user) {
      (user as any).signOut();
    }
  }

  isAuthenticated():Observable<boolean> {
    let o = new Observable<boolean>(observer => {
      let fn = () => {
        if(this.config) {
          let cognitoUser = this.cognitoUtil.getCurrentUser();
          if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
              if (err) {
                console.log("CognitoService: Couldn't get the session: " + err, err.stack);
                //callback.isLoggedIn(err, false);
                observer.next(false);
              }
              else {
                console.log("CognitoService: Session is " + session.isValid());
                //callback.isLoggedIn(err, session.isValid());
                observer.next(session.isValid());
              }
              observer.complete();
            });
          } else {
            console.log("CognitoService: can't retrieve the current user");
            //callback.isLoggedIn("Can't retrieve the CurrentUser", false);
            observer.next(false);
            observer.complete();
          }
        } else {
          console.log('CognitoService, no config');
          setTimeout(fn, 100);
        }
      };
      fn();

    });

    return o;
  }

  completeChallenge(cognitoUser:CognitoUser, newPassword:string):Observable<boolean> {
    return new Observable<boolean>(observer => {
      // the `as any` is a hack to fix an issue with the CognitoUser TypeScript typings in index.d.ts for the node_module
      (cognitoUser as any).completeNewPasswordChallenge(newPassword, null, {
        onSuccess: function (result) {
          var logins = {}
          logins['cognito-idp.' + CognitoUtil.config.region + '.amazonaws.com/' + CognitoUtil.config.userPoolId] = result.getIdToken().getJwtToken();

          // Add the User's Id Token to the Cognito credentials login map.
          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: CognitoUtil.config.identityPoolId,
            Logins: logins
          });

          //console.log("CognitoService: set the AWS credentials - " + JSON.stringify(AWS.config.credentials));
          console.log("CognitoService: set the AWSCognito credentials - " + JSON.stringify(AWS.config.credentials));
          //callback.cognitoCallback(null, result);
          console.log('CognitoService, login onSuccess: ', result);
          observer.next(true);
          observer.complete();
        },
        onFailure: (err) => {
          observer.error(err);
          observer.complete();
        }
      });
    });
  }

  getAuthToken(): Observable<any> {
    return this.cognitoUtil.getAccessToken();
  }

  destroy() {
    let remember: string|boolean = localStorage.getItem('CognitoService.rememberUser');
    if(undefined === remember) remember = true;
    if(remember !== 'true') remember = false;
    if(!remember)
      this.logout();
  }
}

export interface LoggedInCallback {
    isLoggedIn(message: string, loggedIn: boolean): void;
}

export interface Callback {
    callback(): void;
    callbackWithParam(result: any): void;
}

@Injectable()
export class CognitoUtil {

  private static _rememberUser: boolean = true;
  static set rememberUser(remember: boolean) {
    CognitoUtil._rememberUser = remember;
  }
  static get rememberUser() {
    return CognitoUtil._rememberUser;
  }

  private static _config: { region: string, identityPoolId: string, userPoolId: string, clientId: string } = null;
  static get config(): { region: string, identityPoolId: string, userPoolId: string, clientId: string } {
    return CognitoUtil._config;
  }
  static set config(conf: { region: string, identityPoolId: string, userPoolId: string, clientId: string }) {
    CognitoUtil._config = conf;
    CognitoUtil.poolData = {
      UserPoolId: this.config.userPoolId,
      ClientId: this.config.clientId,
    };
  }
  //public static _REGION = environment.cognito.region;
  //public static _IDENTITY_POOL_ID = environment.cognito.identityPoolId;
  //public static _USER_POOL_ID = environment.cognito.userPoolId;
  //public static _CLIENT_ID = environment.cognito.clientId;

  public static poolData = null;

  constructor() {}

  getUserPool() {
    return new CognitoUserPool(CognitoUtil.poolData);
  }

  getCurrentUser() {
    return this.getUserPool().getCurrentUser();
  }


  /* // why not just comment this bit out? :)
  getCognitoIdentity(): string {
    return AWS.config.credentials.identityId;
  }
  */

  getAccessToken(): Observable<any> {
    return new Observable<any>(observer => {
      // wait, indefinitely, for CognitoUtil to be set
      let fn = () => {
        //console.log('CognitoUtil.getAccessToken', CognitoUtil.config);
        if(CognitoUtil.config) {
          if (this.getCurrentUser() != null)
            this.getCurrentUser().getSession(function (err, session) {
              if (err) {
                console.log("CognitoUtil: Can't set the credentials:" + err);
                //callback.callbackWithParam(null);
                observer.next(null);
              }

              else {
                if (session.isValid()) {
                  //callback.callbackWithParam(session.getAccessToken().getJwtToken());
                  observer.next(session.getAccessToken().getJwtToken());
                }
              }
            });
          else {
            observer.next(null);
            //callback.callbackWithParam(null);
          }
        } else {
          setTimeout(fn, 1000);
        }
      }
      setTimeout(fn, 1000);
    });
  }

  getIdToken(callback: Callback): void {
    if (callback == null) {
      throw("CognitoUtil: callback in getIdToken is null...returning");
    }
    if (this.getCurrentUser() != null)
      this.getCurrentUser().getSession(function (err, session) {
        if (err) {
          console.log("CognitoUtil: Can't set the credentials:" + err);
          callback.callbackWithParam(null);
        }
        else {
          if (session.isValid()) {
            callback.callbackWithParam(session.getIdToken().getJwtToken());
          } else {
            console.log("CognitoUtil: Got the id token, but the session isn't valid");
          }
        }
      });
    else
      callback.callbackWithParam(null);
  }

  getRefreshToken(callback: Callback): void {
    if (callback == null) {
      throw("CognitoUtil: callback in getRefreshToken is null...returning");
    }
    if (this.getCurrentUser() != null)
      this.getCurrentUser().getSession(function (err, session) {
        if (err) {
          console.log("CognitoUtil: Can't set the credentials:" + err);
          callback.callbackWithParam(null);
        }

        else {
          if (session.isValid()) {
            callback.callbackWithParam(session.getRefreshToken());
          }
        }
      });
    else
      callback.callbackWithParam(null);
  }

  refresh(): void {
    this.getCurrentUser().getSession(function (err, session) {
      if (err) {
        console.log("CognitoUtil: Can't set the credentials:" + err);
      }

      else {
        if (session.isValid()) {
          console.log("CognitoUtil: refreshed successfully");
        } else {
          console.log("CognitoUtil: refreshed but session is still not valid");
        }
      }
    });
  }
}
