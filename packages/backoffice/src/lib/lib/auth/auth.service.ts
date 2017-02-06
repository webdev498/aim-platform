import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
/*
 * Abstract representation of what an AuthService should look like
 */
export abstract class AuthService {
  constructor(private configResolver: any) {}
  abstract login(user: string, password: string, remember?: boolean): Observable<boolean>;
  abstract logout(): void;
  abstract completeChallenge(user, response): Observable<boolean>;
  abstract isAuthenticated(): Observable<boolean>;
  abstract getAuthToken(): Observable<any>;
  abstract destroy(): void;
  public config: any;
}
