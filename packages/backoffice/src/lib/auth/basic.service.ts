import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

/*
 * BasicAuth that just toggles state
 */
export class BasicAuth extends AuthService {
  private _authenticated: boolean = false;
  isAuthenticated(): Observable<boolean>  {
    return new Observable<boolean>(observer => {
      console.log('BasicAuth:isAuthenticated', this._authenticated);
      observer.next(this._authenticated);
      observer.complete();
    });
  }

  login(user: string, password: string): Observable<boolean> {
    console.log('BasicAuth:login user: ', user, ', password: ', password);
    return new Observable<boolean>(observer => {
      this._authenticated = true;
      observer.next(this._authenticated);
      observer.complete();
    });
  }

  completeChallenge(user, response): Observable<boolean> {
    return new Observable<boolean>(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  logout() {
    this._authenticated = false;
  }

  getAuthToken(): Observable<any> {
    return new Observable<any>(observer => {
      observer.next('authToken');
      observer.complete();
    });
  }

  public config: any;
}
