
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-site-templates',
  templateUrl: './templates.component.html',
  //styleUrls: ['templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
