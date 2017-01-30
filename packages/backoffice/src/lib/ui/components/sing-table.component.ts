import { Component, Input, OnInit, AfterContentInit, HostBinding, HostListener, ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList } from '@angular/core';
import * as _ from 'lodash';

import { Column } from './common';

declare var jQuery:any;

/*
USAGE:

<sing-table [value]=“arrayData” [striped]=“true” [hover]=“true” [border]=“true” [inversed]=“true” [headerInversed]=“true” [footerInversed]=“true” [widgetOverflow]=“true”>
  <column field=“lodash.path” header=“Title of Column” footer=“Footer Title for Column” classes=“table-success”></column>
  ...
</sing-table>

Due to inconsistencies with how Bootstrap 4 and Sing Styles work with various things, not all style attributes can be enabled at once.

`hover` = ‘table-hover’
`inversed` = ‘table-inverses’
`bordered` = `table-bordered`
`striped` = ‘table-striped’
`widgetOverflow` = ‘widget-table-overflow’ (sing specific)

*/
@Component({
  selector: 'sing-table',
  template: `
<table [ngClass]="tableClass">
  <thead *ngIf="headers" [ngClass]="tableHeaderClass">
    <tr>
      <th *ngFor="let h of headers">{{h}}</th>
    </tr>
  </thead>
  <tr *ngFor="let row of value">
    <td *ngFor="let col of columns" [ngClass]="col.classes">
      {{ col.display(row) }}
    </td>
  </tr>
  <tfoot *ngIf="footers" [ngClass]="tableFooterClass">
    <tr>
      <th *ngFor="let h of footers">{{h}}</th>
    </tr>
  </tfoot>
</table>
`
})
export class SingTable implements OnInit, AfterContentInit {
  @Input() value: Iterator<any>;

  @Input() striped:boolean = false;
  @Input() hover:boolean = false;
  @Input() bordered: boolean = true;
  @Input() inversed: boolean = false;
  @Input() headerInversed: boolean = false;
  @Input() footerInversed: boolean = false;
  @Input() widgetOverflow: boolean = false;
  public tableClass: any;
  public tableHeaderClass: any;
  public tableFooterClass: any;

  @Input() size: string; // xs, sm, md, lg, extra-small, small, medium, large

  @Input() style: any;
  @Input() tableStyleClass: string;
  @Input() tableStyle: string;
  @Input() containerWidth: string;

  @HostBinding('style.width') hostWidth: string = '100%';
  @HostBinding('style.max-width') hostMaxWidth: string = '100%';

  @ContentChildren(Column) cols: QueryList<Column>;
  public columns: Column[];
  public headers: string[];
  public footers: string[];

  ngOnInit() {
    console.log('Table value: ', this.value);

    // support either [striped]="true" or striped="true" attributes
    if(typeof this.striped === "string") this.striped = this.striped == 'true' ? true : false;
    if(typeof this.hover === "string") this.hover = this.hover == 'true' ? true : false;
    if(typeof this.bordered === "string") this.bordered = this.bordered == 'true' ? true : false;
    if(typeof this.inversed === "string") this.inversed = this.inversed == 'true' ? true : false;
    if(typeof this.headerInversed === "string") this.headerInversed = this.headerInversed == 'true' ? true : false;
    if(typeof this.footerInversed === "string") this.footerInversed = this.footerInversed == 'true' ? true : false;
    if(typeof this.widgetOverflow === "string") this.widgetOverflow = this.widgetOverflow == 'true' ? true : false;

    this.tableClass = {
      'table-striped': this.striped,
      'table-hover': this.hover,
      'table-bordered': this.bordered,
      'widget-table-overflow': this.widgetOverflow,
      'table-lg': this.size == 'lg' || this.size == 'large',
      'table-md': this.size == 'md' || this.size == 'medium',
      'table-sm': this.size == 'sm' || this.size == 'small',
      'table-xs': this.size == 'xs' || this.size == 'extra-small',
      'table-inverse': this.inversed,
      'table': true,
    }

    this.tableHeaderClass = {
      'thead-inverse': this.headerInversed,
    }
    this.tableFooterClass = {
      'thead-inverse': this.footerInversed,
    };

    console.log('Table class: ', this.tableClass);
  }

  ngAfterContentInit() {
    this.columns = this.cols.toArray();
    console.log('Table columns: ', this.columns);
    _.forEach(this.columns, (col, index) => {
      if(!_.isEmpty(col.header)) {
        if(!this.headers) this.headers = new Array(this.columns.length);
        this.headers.splice(index, 1, col.header);
      }
      if(!_.isEmpty(col.footer)) {
        if(!this.footers) this.footers = new Array(this.columns.length);
        this.footers.splice(index, 1, col.footer);
      }
    });
  }
}