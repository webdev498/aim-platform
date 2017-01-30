import { Component, Output, EventEmitter, Input, OnInit, Renderer, ElementRef } from '@angular/core';
import { BaseComponent } from './base.component';
import { DynamicComponentDef, FieldGroup } from '../models';

const MAX_COLUMNS = 3;
const BOOTSTRAP_COLUMNS = 12; // TODO: we should probably define layout consts somewhere consistent?
const defaultOptions = {
  columns: 3, // layout is considered to be 3 columns wide
}

@Component({
  selector: 'div[field-group-component]',
  template: `
<section class="widget" widget>
<header>
  <h5>
    {{fieldGroup.title}}
  </h5>
  <div class="widget-controls">
    <a data-widgster="expand" title="Expand" href="#"><i class="glyphicon glyphicon-chevron-up"></i></a>
    <a data-widgster="collapse" title="Collapse" href="#"><i class="glyphicon glyphicon-chevron-down"></i></a>
    <a href="javascript: void();"><i class="glyphicon glyphicon-cog"></i></a>
  </div>
</header>
<div class="widget-body">
  <p class="lead" *ngIf="fieldGroup.description">{{fieldGroup.description}}</p>
  <div class="row">
    <div dynamic-component *ngFor="let field of fieldGroup.fields;" [componentData]="field" [fieldGroupOptions]="fieldGroup.options" (^valueChange)="onValueChange($event)"></div>
  </div>
  <div class="form-actions" *ngIf="fieldGroup.actions && (fieldGroup.actions.save || fieldGroup.actions.cancel)">
    <div class="row">
      <div class="offset-md-4 col-md-7">
        <button *ngIf="fieldGroup.actions.save" type="submit" class="btn btn-primary" (click)="onSubmit()">Save Changes</button>
        <button *ngIf="fieldGroup.actions.cancel" type="button" class="btn btn-inverse" (click)="onCancel()">Cancel</button>
      </div>
    </div>
  </div>
</div>
</section>
`,
  //styleUrls: ['forms.component.scss']
})
export class FieldGroupComponent implements OnInit {

  @Input()
  fieldGroup: FieldGroup;

  get horizontal() {
    return this.fieldGroup.options.layout == 'horizontal';
  }

  constructor(private renderer: Renderer, private elementRef: ElementRef) {
  }

  ngOnInit() {
    //console.log('FieldGroupComponent:ngOnInit', this.components);
    if(!this.fieldGroup.options) this.fieldGroup.options = defaultOptions;
    if(!this.fieldGroup.options.columns) this.fieldGroup.options.columns = defaultOptions.columns;
    if(this.fieldGroup.options.columns < 0 || this.fieldGroup.options.columns > MAX_COLUMNS) this.fieldGroup.options.columns = 3;
    //this.addComponentClass();
    this.renderer.setElementClass(this.elementRef.nativeElement, 'col-md-' + ((BOOTSTRAP_COLUMNS / MAX_COLUMNS) * this.fieldGroup.options.columns), true);
  }

  @Output('cancel')
  cancelEvent: EventEmitter<any> = new EventEmitter();

  @Output('submit')
  submitEvent: EventEmitter<any> = new EventEmitter();

  onSubmit() {
    this.submitEvent.emit(this.fieldGroup);
  }

  onCancel() {
    this.cancelEvent.emit(this.fieldGroup);
  }
}
