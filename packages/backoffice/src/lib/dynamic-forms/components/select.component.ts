import { Component, Injector, Input, OnInit, Renderer, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

import { BaseComponent } from './base.component';
import { DynamicComponentDef, MultiValueItem } from '../models';

@Component({
  selector: 'div.form-group[select-component]',
  template: `
  <label #labelControl class="control-label" [attr.for]="id">{{title}}</label>
  <select #inputControl class="form-control" [attr.id]="id" [attr.name]="name" [attr.placeholder]="placeholder" [(ngModel)]="value">
    <option *ngIf="placeholder !== ''" disabled="true">{{placeholder}}</option>
    <option *ngFor="let o of options.values" [ngValue]="o.value">{{o.title}}</option>
  </select>
  <p #hintControl class="help-block" [innerHTML]="hint"></p>
`,
  //styleUrls: ['forms.component.scss']
})
export class SelectComponent extends BaseComponent {

  @ViewChild('labelControl', { read: ViewContainerRef })
  labelControl: ViewContainerRef;

  @ViewChild('inputControl', { read: ViewContainerRef })
  inputControl: ViewContainerRef;

  @ViewChild('hintControl', { read: ViewContainerRef })
  hintControl: ViewContainerRef;

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
