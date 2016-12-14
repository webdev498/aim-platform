import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['site.component.scss']
})
export class SiteComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
