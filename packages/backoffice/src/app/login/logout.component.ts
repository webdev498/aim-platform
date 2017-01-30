import { Inject, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, LOGIN_ROUTE } from 'lib/auth';

@Component({
  selector: 'logout',
  encapsulation: ViewEncapsulation.None,
  template: `
<div>Logging out ...</div>
  `,
  host: {
    class: 'logout-page appp',
  }
})
export class LogoutComponent implements OnInit {
  constructor(@Inject(LOGIN_ROUTE) private loginRoute: string, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate([this.loginRoute]);
  }
}
