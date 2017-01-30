import { Component, Injector, Input, OnInit, Renderer, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

import { BaseComponent } from './base.component';
import { DynamicComponentDef, MultiValueItem } from '../models';

@Component({
  selector: 'div.form-group[radio-component]',
  template: `
  <label #labelControl class="control-label">{{title}}</label>
  <div #inputControl>
    <div *ngFor="let o of options.values" class="radio">
      <input type="radio" [checked]="o.value == value" [value]="o.value" [attr.id]="id + '-' + o.value"[name]="id" [(ngModel)]="value" />
      <label [attr.for]="id + '-' + o.value">{{o.title || o.value}}</label>
    </div>
  </div>
  <p #hintControl class="help-block" [innerHTML]="hint"></p>
`,
  //styleUrls: ['forms.component.scss']
})
export class RadioComponent extends BaseComponent {

  @ViewChild('labelControl', { read: ViewContainerRef })
  labelControl: ViewContainerRef;

  @ViewChild('inputControl', { read: ViewContainerRef })
  inputControl: ViewContainerRef;

  @ViewChild('hintControl', { read: ViewContainerRef })
  hintControl: ViewContainerRef;

  radioGroup: string = '';

  constructor(elementRef: ElementRef, renderer: Renderer) {
    super(elementRef, renderer);
  }

  configure(properties: Array<string>): Array<string> {
    properties['options'] = {
      type: 'TextAreaComponent',
      inputs: {
        id: 'options',
        label: 'Component Options',
        help: 'Each option should go on a separate line, each Value/Label should be delimited with a <kbd>|</kbd> [pipe]',
      }
    };
    return properties;
  }

  toString(inputDef: DynamicComponentDef) {
    let outputDef = JSON.parse(JSON.stringify(inputDef));
    Object.keys(inputDef).map(function(key, index) {
      switch(key) {
        case 'options': {
          let options = '';
          for(var i = 0; i < outputDef[key].length; i++) {
            options += outputDef[key][i].value + '|' + outputDef[key][i].value + "\n";
          }
          outputDef[key] = options;
        } break;
        default: {
          // do nothing
        }
      }
    });
    console.log('SelectComponent:toString', outputDef);
    return outputDef;
  }

  toObject(inputDef: DynamicComponentDef) {
    let outputDef = JSON.parse(JSON.stringify(inputDef));
    Object.keys(inputDef).map(function(key, index) {
      switch(key) {
        case 'options': {
          let options = [];
          let lines = outputDef[key].split("\n");
          for(var i = 0; i < lines.length; i++) {
            let option = lines[i].split('|');
            if(option.length > 1) {
              options.push({ value: option[0], label: option[1] });
            } else if(options.length == 1) {
              options.push({ value: option[0], label: option[0] });
            }
          }
          outputDef[key] = options;
        } break;
        default: {
          // do nothing
        } break;
      }
    });
    console.log('SelectComponent:toObject', outputDef);
    return outputDef;
  }
}
