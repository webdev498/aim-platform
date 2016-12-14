import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['sites.component.scss']
})
export class SitesComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

}
