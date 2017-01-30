import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-site-template',
  templateUrl: './template.component.html',
  //styleUrls: ['template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
