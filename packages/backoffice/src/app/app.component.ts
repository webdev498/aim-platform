import { Component, Renderer, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RoutesRecognized, NavigationEnd, NavigationCancel } from '@angular/router';

import { AppConfig } from './app.config';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './scss/application.scss'
  ],
  template: `
  <router-outlet></router-outlet>
  <div class="loading-screen">
    <div class="ferry"><div class="chimney"></div><div class="waves"></div></div>
  </div>
`
})
export class AppComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appConfig: AppConfig,
    private renderer: Renderer,
    private elementRef: ElementRef,
  ) {

    this.router.events.subscribe((val) => {
      // TODO: This is just debug information and should be removed from production code
      console.log('Router.events, val: ', val);
      if(val instanceof NavigationStart) {
        // do nothing here?
      } else if(val instanceof NavigationEnd) {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'is-loading', false);
      } else if(val instanceof NavigationCancel) {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'is-loading', false);
      } else if(val instanceof RoutesRecognized) {
        this.renderer.setElementClass(this.elementRef.nativeElement, 'is-loading', true);
        let r: RoutesRecognized = val;
        console.log('Router.events, route: ', this.route);
        this.route.params.subscribe(params => {
          if(params['platformId']) {
            let platformId = params['platformId'];
            console.warn('Router.events, RoutesRecognized, platformId: ', platformId);
          }
        });
      }
    });
  }

  ngOnInit() {
    console.log('Initial App Config', this.appConfig);
  }
}
