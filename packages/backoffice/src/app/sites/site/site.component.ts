import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { DynamicFormComponent, DynamicForm } from 'lib/dynamic-forms';

import { SitesService } from '../sites.service';

import { Data, DataType, Sites } from 'lib/api';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  //styleUrls: ['site.component.scss']
})
export class SiteComponent implements OnInit, OnDestroy {

  site: Data<Sites.Site>;
  dataType: Data<DataType>;
  form: DynamicForm;

  initialized: boolean = false;

  constructor(private sitesService: SitesService, private route: ActivatedRoute, private router: Router) {}

  private routeParamSubscription: any;
  ngOnInit() {
    this.routeParamSubscription = this.route.params.subscribe(params => {
      let siteId = params['siteId'];

      if(siteId) {
        console.log('SiteComponent:ngOnInit, siteId: ', siteId);
        this.sitesService.getSite(siteId).subscribe(site => {
          console.log('SiteComponent:ngOnInit, site: ', site);
          this.sitesService.getForm(site).subscribe(form => {
            this.site = site;
            this.form = form;
            this.initialized = true;
          });
        });
      } else {
        // create new company
        let site = new Data<Sites.Site>();
        this.sitesService.getForm(site).subscribe(form => {
          this.site = site;
          this.form = form;
          this.initialized = true;
        });
      }
    });
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }

  onSubmit(formData: {model: Data<Sites.Site>}) {
    console.log('SiteComponent, onSubmit, model: ', formData.model);
    this.sitesService.saveSite(this.site);
  }

  onCancel(formData: {model: Data<Sites.Site>}) {
    console.log('SiteComponent, onCancel, model: ', formData.model);
  }

}
