import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'error',
  styleUrls: [ 'error.component.scss' ],
  templateUrl: 'error.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'error-page app'
  },
})
export class ErrorComponent {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  searchResult(): void {
    this.router.navigate(['/app', 'extra', 'search']);
  }
}
