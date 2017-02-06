import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { FormsService, DynamicForm, DynamicComponentDef } from '../';

import * as _ from 'lodash';

@Component({
  selector: 'dynamic-form',
  templateUrl: './form.component.html',
  //styleUrls: ['show.component.scss']
  providers: [
    FormsService,
  ],
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input()
  title: string;

  private _form: DynamicForm;
  @Input() set form(f: DynamicForm) {
    this._form = f;
    if(this._model) {
      this._form.load(this._model);
    }
  }
  get form(): DynamicForm {
    return this._form;
  }

  private _model: Object;
  @Input() set model(o: Object) {
    this._model = o;
    console.log('FormComponent:setModel o: ', o, ', form: ', this.form);
    if(this._form) {
      this._form.load(this._model);
    }
  }
  get model(): Object {
    return this._model;
  }

  constructor(private formsService: FormsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.formsService.componentChange.subscribe($event => {
      if(!this.model) {
        this.model = {}
      }
      //console.log('FormComponent:componentChange.subscribe', $event);
      _.set(this.model, $event.componentDef.id, $event.value);

      // we call form.load because lodash's set doesn't trigger the 'setter'
      if(this.form) {
        this.form.load(this.model);
      }
    },
    (err) => {
      console.warn('FormComponent:componentChange error', err);
    },
    () => {
      console.warn('FormComponent:componentChange complete', 'componentChange has completed?!');
    });
  }

  ngOnDestroy() {
    this.formsService.componentChange.unsubscribe();
    this._form = null;
    this._model = null;
  }

  get diagnostic() {
    return "Object: \n" + JSON.stringify(this.model, null, 2)
      + "\n\nForm: \n" + JSON.stringify(this.form, null, 2);
  }

  @Output()
  cancel = new EventEmitter();
  onCancel() {
    console.log('onCancel', this.model, this.form);
    if(confirm('Are you sure?')) {
      this.cancel.emit({
        model: this.model,
        form: this.form
      });
    }
  }

  @Output()
  submit = new EventEmitter();
  onSubmit() {
    console.log('onSubmit', this.model, this.form);
    this.submit.emit({
      model: this.model,
      form: this.form
    });
  }
}
