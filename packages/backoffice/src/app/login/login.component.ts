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

  constructor(private appConfig: AppConfig, private userService: UserService, private authService: AuthService, private router: Router) {
    console.log('LoginComponent:ctor()');
  }

  onSubmit() {
    this.authService.login(this.credentials.username, this.credentials.password).subscribe(loggedIn => {
      if(loggedIn) {
        let redirectTo = localStorage.getItem('redirectTo');
        localStorage.removeItem('redirectTo');
        if(!redirectTo) redirectTo = '/platforms';
        this.router.navigate([redirectTo]);
      } else {
        alert('Failed to Login');
      }
    });
  }
}
