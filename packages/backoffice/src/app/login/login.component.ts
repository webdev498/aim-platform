import { Inject, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AppConfig } from 'app/app.config';
import { UserService } from 'app/user.service';
import { AuthService, LOGIN_ROUTE } from 'lib/auth';

@Component({
  selector: 'app-login',
  styleUrls: [ './login.component.scss' ],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'login-page app'
  }
})
export class LoginComponent {
  private credentials: {
    username: string,
    password: string,
  } = {
    username: null,
    password: null,
  };

  user: any;
  public errorMessage: string;
  public newPassword: string;
  public passwordMatch: string;
  requireNewPassword: boolean = false;

  constructor(private appConfig: AppConfig, private userService: UserService, private authService: AuthService, private router: Router) {
    console.log('LoginComponent:ctor()');
  }

  private _loggedIn(loggedIn) {
    if(loggedIn) {
      let redirectTo = localStorage.getItem('redirectTo');
      localStorage.removeItem('redirectTo');
      if(!redirectTo) redirectTo = '/platforms';
      this.router.navigate([redirectTo]);
    } else {
      alert('Failed to Login');
    }
  }

  onSubmit() {
    let self = this;
    this.authService.login(this.credentials.username, this.credentials.password).subscribe(
      (loggedIn) => self._loggedIn(loggedIn),
      (err) => {
        debugger;
        console.warn('Login Error', err)
        
        if(!('type' in err)) throw err;
        switch(err.type) {
          case 'newPassword': {
            self.user = err.user;
            self.requireNewPassword = true;
          } break;
          default: throw err;
        }
      }
    );
  }

  onNewPassword() {
    let self = this;
    if (this.newPassword == null || this.passwordMatch == null) {
      this.errorMessage = "All fields are required";
      return;
    }
    if (this.newPassword !== this.passwordMatch) {
      this.errorMessage = "Passwords must match";
      return;
    }
    this.errorMessage = null;
    this.requireNewPassword = false;
    this.authService.completeChallenge(self.user, self.newPassword).subscribe(
      (loggedIn) => self._loggedIn(loggedIn),
      (err) => {
        self.errorMessage = err;
      }
    );
  }
}
