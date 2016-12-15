import { Component, ViewEncapsulation } from '@angular/core';
import {AppState} from "../app.service";

@Component({
  selector: '[profile]',
  templateUrl: 'profile.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['profile.style.scss']
})
export class Profile {
  style: string;
  constructor(protected state: AppState) {

  }
  ngOnInit() {

  }
  changeStyle(e) {
    const style = e.target.value;
    $('body').removeClass(this.state.get('app_style'));
    this.state.set('app_style', style);
    window.sessionStorage.setItem('app_style', style);
    $('body').addClass(style);
  }
}
