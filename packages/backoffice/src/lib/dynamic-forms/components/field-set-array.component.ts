import { Component, ElementRef, Renderer, Output, EventEmitter, Injector, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from './base.component';

declare var jQuery:any;

const MAX_COLUMNS = 3;
const BOOTSTRAP_COLUMNS = 12; // TODO: we should probably define layout consts somewhere consistent?
const defaultOptions = {
  columns: 3, // layout is considered to be 3 columns wide
}

@Component({
  selector: 'fieldsetarray[field-set-array-component]',
  styles: [`
    .addBtn {
      float: right;
    }
    .glyphicon-plus-sign, .glyphicon-remove {
      cursor: pointer;
    }
  `],
  template: `
<legend>{{title}}&nbsp;<i class="pull-right glyphicon glyphicon-plus-sign" (click)="onAddNewItem()"></i></legend>
<p *ngIf="description">{{description}}</p>
<div [formGroup]="myForm">
   <div formArrayName="addresses" >
      <div *ngFor="let address of myForm.controls.addresses.controls; let i=index" class="panel panel-default">
      <div class="panel-heading">
        <span>Address {{i + 1}}</span>
        <span class="glyphicon glyphicon-remove pull-right" *ngIf="myForm.controls.addresses.controls.length > 1" (click)="removeAddress(i)"></span>
      </div>
      <div class="panel-body">
        <div dynamic-component *ngFor="let field of options.fields;" [componentData]="field"  [fieldGroupOptions]="fieldGroupOptions" (^valueChange)="onValueChange($event)"></div>
      </div>
    </div>
  </div>
</div>
`
  //styleUrls: ['forms.component.scss']
})
export class FieldSetArrayComponent extends BaseComponent {
  public myForm: FormGroup;
  constructor(private elRef:ElementRef, protected renderer: Renderer, private _fb: FormBuilder) {
    super(elRef, renderer);
  }

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

    this.myForm = this._fb.group({
      addresses: this._fb.array([
        this.initAddress()
      ])
    });
  }

  initAddress() {
    return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  onAddNewItem() {
    console.log('onAddNewItem');
    const control = <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress (i: number) {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }
}
