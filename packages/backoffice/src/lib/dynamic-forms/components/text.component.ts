import { Component, Renderer, ElementRef, ViewChild, ViewContainerRef, Injector, Input, OnInit } from '@angular/core';

import { BaseComponent } from './base.component';

@Component({
  selector: 'div.form-group[text-component]',
  template: `
  <label #labelControl class="form-control-label" [attr.for]="id">{{title}}</label>
  <input #inputControl type="text" class="form-control" [attr.id]="id" [attr.name]="id" [attr.placeholder]="placeholder" [(ngModel)]="value" dfv />
  <span #hintControl class="help-block" [innerHTML]="hint"></span>
`,
  //styleUrls: ['forms.component.scss']
  providers: [
    //ElementRef,
  ]
})
export class TextComponent extends BaseComponent {

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
