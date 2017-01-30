import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-site-page',
  templateUrl: './page.component.html',
  //styleUrls: ['pages.component.scss']
})
export class PageComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
