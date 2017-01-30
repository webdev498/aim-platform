import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-site-pages',
  templateUrl: './pages.component.html',
  //styleUrls: ['pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
