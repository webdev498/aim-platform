import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

export let LOGIN_ROUTE = new OpaqueToken('login_route');

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(@Inject(LOGIN_ROUTE) private loginRoute: string, private authService: AuthService, private router: Router) {
    console.log('AuthGuard, authService: ', this.authService);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let self = this;
    return new Observable<boolean>(observer => {
      let url = state.url;
      console.log('AuthGuard:canActivate, url: ', url);
      if(url == self.loginRoute) {
        console.log('AuthGuard, canActivate: ', true);
        observer.next(true);
        observer.complete();
      } else {
        let loggedIn = self.authService.isAuthenticated().subscribe(loggedIn => {
          console.log('AuthGuard, canActivate: ', loggedIn);
          observer.next(loggedIn)
          observer.complete();
          if(!loggedIn) {
            localStorage.setItem('redirectTo', url);
            self.router.navigate([self.loginRoute]);
          }
        },
        (err) => {
          console.warn('AuthGuard:canAcativate, isAuthenticated error: ', loggedIn, err);
        },
        () => {
          console.log('AuthGuard:canActivate, isAuthenticated completed', loggedIn);
        });
      }
    });
  }
}
