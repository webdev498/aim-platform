import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Message } from 'primeng/primeng';

import { AppConfig } from 'app/app.config';
import { SitesService } from './sites.service';

import { Data, Sites } from 'lib/api';

@Component({
  selector: 'app-site',
  templateUrl: './sites.component.html',
  //styleUrls: ['site.component.scss']
})
export class SitesComponent implements OnInit {

  @Input()
  sites: Data<Sites.Site>[];

  columns: any[];

  actions: { title: string, style: string, route: string, id: string, }[];

  messages: Message[];

  constructor(private appConfig: AppConfig, public sitesService: SitesService) {
    this.messages = [];
    let s = new Data<Sites.Site>();
    this.columns = [
      {
        header: 'Title',
        field: 'title',
      },
      {
        header: 'URL',
        field: 'content.url',
      }
    ];

    this.actions = [
      {
        title: 'Edit',
        style: 'success',
        route: '',
        id: 'id',
      }
    ]
  }

  ngOnInit() {
    this.sitesService.getSites().subscribe(sites => {
      this.sites = sites as Data<Sites.Site>[];
    });
  }

  postMessage(severity: string) {
    if(!severity) severity = 'info';
    let m = {
      severity: severity,
      summary: 'Summary of Message',
      detail: 'Lorem ipsum dolor set ... amet',
    };
    this.appConfig.postMessage(m);
    this.messages = [];
    this.messages.push(m);
  }
}
