import { Component, Injector, Input, OnInit, Renderer, ElementRef, ViewContainerRef, ViewChild } from '@angular/core';

import { BaseComponent } from './base.component';

@Component({
  selector: 'div.form-group[textarea-component]',
  template: `
  <label #labelControl class="control-label" [attr.for]="id">{{title}}</label>
  <textarea #inputControl class="form-control" [attr.id]="id" [attr.name]="name" [attr.placeholder]="placeholder" [(ngModel)]="value"></textarea>
  <span #hintControl class="help-block" [innerHTML]="hint"></span>
`,
  //styleUrls: ['forms.component.scss']
})
export class TextAreaComponent extends BaseComponent {

  @ViewChild('labelControl', { read: ViewContainerRef })
  labelControl: ViewContainerRef;

  @ViewChild('inputControl', { read: ViewContainerRef })
  inputControl: ViewContainerRef;

  @ViewChild('hintControl', { read: ViewContainerRef })
  hintControl: ViewContainerRef;

  constructor(elementRef: ElementRef, renderer: Renderer) {
    super(elementRef, renderer);
  }
}
