import { Component, ViewEncapsulation } from '@angular/core';
import { AppConfig } from '../app.config';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Dashboard {
  config: any;
  month: any;
  year: any;

  constructor(config: AppConfig) {
    this.config = config.getConfig();
  }

  ngOnInit(): void {
    let now = new Date();
    this.month = now.getMonth() + 1;
    this.year = now.getFullYear();
  }
}
