import { Component, Renderer, ElementRef, ViewChild, ViewContainerRef, Injector, Input, OnInit } from '@angular/core';

import { BaseComponent } from './base.component';

@Component({
  selector: 'div.form-group[text-component]',
  template: `
<label #labelControl class="form-control-label">{{title}}</label>
<div #inputControl class="checkbox abc-checkbox">
  <input type="checkbox" [attr.id]="id" [attr.name]="name" [(ngModel)]="value" />
  <label [attr.for]="id">{{options.placeholder}}</label>
</div>
<span #hintControl class="help-block" [innerHTML]="hint"></span>
`,
  //styleUrls: ['forms.component.scss']
  providers: [
    //ElementRef,
  ]
})
export class CheckboxComponent extends BaseComponent {

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
