import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { AppConfig } from 'app/app.config';
import { CompaniesService, Company } from './companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  //styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  @Input()
  companies: Company[];

  columns: any[];

  actions: { title: string, style: string, route: string, id: string, }[];

  messages: Message[];

  constructor(private appConfig: AppConfig, public companiesService: CompaniesService) {
    this.messages = [];
    let s = new Company();
    this.columns = [
      {
        header: 'Title',
        field: 'title',
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
    this.companiesService.getCompanies().subscribe(companies => {
      debugger
      this.companies = companies as Company[];
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
