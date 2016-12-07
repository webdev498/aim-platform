import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'login',
  styleUrls: [ 'login.component.scss' ],
  templateUrl: 'login.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'login-page app'
  }
})
export class Login {
  constructor() {

  }
}
