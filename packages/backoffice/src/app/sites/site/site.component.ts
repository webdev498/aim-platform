import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { DynamicFormComponent, Form } from 'lib/dynamic-forms';

import { SitesService, Site } from '../sites.service';

import { DataTypeItem } from 'lib/api';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  //styleUrls: ['site.component.scss']
})
export class SiteComponent implements OnInit, OnDestroy {

  site: Site;
  dataType: DataTypeItem;
  form: Form;

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
          if(site.dataTypeId) {
            this.sitesService.getDataType(site).subscribe(dataType => {
              console.log('SiteComponent:ngOnInit, dataType: ', dataType);
              if(dataType['form']) {
                this.form = dataType['form'];
              }
              this.dataType = dataType;
              this.site = site;
              //this.form.model = this.site;
              this.initialized = true;
            },
            (err) => {
              // TODO: Display an error to the user
              console.warn(err);
            });
          }
        });
      } else {
        // create new site
        let site = new Site();
        this.dataType = this.sitesService.getDataType(site).subscribe(dataType => {
          if(dataType['form']) {
            this.form = dataType['form'];
          }
          this.dataType = dataType;
          this.site = site;
          this.initialized = true;
        },
        (err) => {
          // TODO: Display an error to the user
          console.warn(err);
        });
      }
    });
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }

  onSubmit(formData: {model: Site}) {
    console.log('SiteComponent, onSubmit, model: ', formData.model);
    this.sitesService.saveSite(this.site);
  }

  onCancel(formData: {model: Site}) {
    console.log('SiteComponent, onCancel, model: ', formData.model);
  }

}
