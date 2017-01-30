import { Component, Input, OnInit, ElementRef, Renderer } from '@angular/core';

import * as _ from 'lodash';
declare var jQuery:any;

@Component({
  selector: 'data-table',
  template: `
<table class="table">
  <thead>
    <tr>
      <th *ngFor="let heading of columns">{{heading.title}}</th>
    </tr>
  </thead>
  <tr *ngFor="let data of data;">
    <td *ngFor="let col of columns">
      <span *ngIf="col.route">
        <a [routerLink]="[]">{{ get(data, col.column) }}</a>
      </span>
      <span *ngIf="!col.route">
        {{ get(data, col.column) }}
      </span>
    </td>
    <td *ngIf="actions">
      <button *ngFor="let action of actions" class="btn btn-sm" [routerLink]="[get(data, action.id)]">{{action.title}}</button>
    </td>
  </tr>
</table>
`
})
export class TableComponent implements OnInit {

  @Input()
  data: Iterable<any>;

  @Input()
  columns: { title: string, column: string, route?: string }[]

  @Input()
  actions: { title: string, style: string, route: string, id: string, }[]

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    console.warn('TableComponent:ctor');
  }

  ngOnInit() {
    console.warn('TableComponent:ngOnInit');
    if(!this.data) {
      console.warn('TableComponent, data empty');
    }

    if(!this.columns) {
      console.warn('TableComponent, columns empty');
    }
  }

  get(object, path) {
    //debugger;
    if(_.has(object, path)) {
      return _.get(object, path);
    }
    return null;
  }
}
