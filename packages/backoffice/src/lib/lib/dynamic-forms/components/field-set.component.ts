import { Component, Output, EventEmitter, Injector, Input, OnInit } from '@angular/core';

import { BaseComponent } from './base.component';

const MAX_COLUMNS = 3;
const BOOTSTRAP_COLUMNS = 12; // TODO: we should probably define layout consts somewhere consistent?
const defaultOptions = {
  columns: 3, // layout is considered to be 3 columns wide
}

@Component({
  selector: 'fieldset[field-set-component]',
  template: `
<legend *ngIf="title">{{title}}</legend>
<p *ngIf="description">{{description}}</p>
<div dynamic-component *ngFor="let field of options.fields;" [componentData]="field"  [fieldGroupOptions]="fieldGroupOptions" (^valueChange)="onValueChange($event)"></div>
`,
  //styleUrls: ['forms.component.scss']
})
export class FieldSetComponent extends BaseComponent {

  configure(properties: Array<string>): Array<string> {
    properties = super.configure(properties);
    properties['description'] = {
      type: 'text',
      id: 'description',
      label: 'Description',
      help: 'This description is applied to the fieldset below the legend above any components.'
    }
    return properties;
  }

  ngOnInit() {
    super.ngOnInit();
    //console.log('FieldSetComponent:ngOnInit, options', this.options);
    if(!this.options) this.options = defaultOptions;
    if(this.options.columns === undefined || this.options.columns === null) this.options.columns = defaultOptions.columns;
    if(this.options.columns < 0 || this.options.columns > MAX_COLUMNS) this.options.columns = 3;
    //this.addComponentClass();
    this.addComponentClass('col-md-' + ((BOOTSTRAP_COLUMNS / MAX_COLUMNS) * this.options.columns));
  }
}
