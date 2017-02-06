import { Component, Input, OnInit, AfterContentInit, HostBinding, HostListener, ViewChild, ViewChildren, ContentChild, ContentChildren, QueryList } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'column',
  template: ``
})
export class Column implements OnInit {
  @Input() row: any;
  @Input() field: string;
  @Input() header: string;
  @Input() footer: string;
  @Input() classes: string;

  ngOnInit() {
    console.log('Column row: ', this.row);
  }

  display(row: any) {
    if(_.has(row, this.field)) {
      return _.get(row, this.field);
    }
    return null;
  }
}