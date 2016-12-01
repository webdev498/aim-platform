import {Component, ViewEncapsulation} from '@angular/core';
import {AppState} from "./app.service";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./scss/application.scss']
})
export class AppComponent {
  constructor(
    public appState: AppState) {
  }
}
