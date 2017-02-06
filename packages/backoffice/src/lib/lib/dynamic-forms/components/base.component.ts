import { Component, Renderer, ElementRef, Injector, Input, Output, EventEmitter, OnInit, ViewContainerRef, ViewChild } from '@angular/core';

import { DynamicComponentDef } from '../models';

declare var jQuery:any;

@Component({
  selector: 'div[base-component]',
  template: `
<div class="form-group">
  <label #labelControl class="form-control-label"></label>
  <input #inputControl class="form-control" />
  <span #hintControl class="help-block"></span>
</div>
`,
  providers: [
    ElementRef,
  ]
  //styleUrls: ['forms.component.scss']
})
export abstract class BaseComponent extends DynamicComponentDef implements OnInit {
  static _id: number = 0; // keep track of the component instances (_id++)

  // when the component's value (if any) changes, it emit's this with the changed value
  @Output()
  valueChange = new EventEmitter();

  // this allows the component to emit css classes to be applied to the root element
  @Output()
  classesChange = new EventEmitter();

  protected _value: any = null;
  //get accessor
  get value(): any {
    return this._value;
  };

  @Input() set value(v: any) {
    if(v !== this._value) {
      this._value = v;
      let e = {
        value: this._value,
      };
      //console.log('BaseComponent:valueChange.emit', e);
      this.valueChange.emit(e);
    }
  }

  protected _classes: {[propName: string]: any;} = {};
  get componentClasses() {
    return this._classes;
  }

  set componentClasses(v: {[propName: string]: any;}) {
    if(v !== this._classes) {
      this._classes = v;
      //console.log('BaseComponent:classesChange', this._classes);
      this.classesChange.emit(this._classes);
    }
  }

  addComponentClass(key: string) {
    this._classes[key] = true;
    this.classesChange.emit(this._classes);
  }

  removeComponentClass(key: string) {
    if(key in this._classes) {
      this._classes[key] = false;
    }
  }

  toggleComponentClass(key: string) {
    if(key in this._classes) {
      this._classes[key] = !this._classes[key];
    } else {
      this.addComponentClass(key);
    }
  }

  toString(inputDef: DynamicComponentDef) {
    return inputDef;
  }

  toObject(inputDef: DynamicComponentDef) {
    console.log('BaseComponent:toObject', inputDef);
    return inputDef;
  }

  // TODO: rethink this entire process - come up with a way to build a "component editor"
  protected _properties = {
    id: { type: 'TextComponent', inputs: { id: 'id', title: 'Component ID', } },
    title: { type: 'TextComponent', inputs: { id: 'title', title: 'Component Label', } },
    name: { type: 'TextComponent', inputs: { id: 'name', title: 'Component Name', } },
    placeholder: { type: 'TextComponent', inputs: { id: 'placeholder', title: 'Component Placeholder', } },
    help: { type: 'TextComponent', inputs: { id: 'help', title: 'Component Help', } },
    value: { type: 'TextComponent', inputs: { id: 'value', title: 'Component Value', } },
  };
  //['id','title','name','placeholder','value'];

  constructor(protected elementRef: ElementRef, protected renderer: Renderer) {
    super(); // cause we have too ... *sigh*

    this.configure(this._properties);

    BaseComponent._id++;

    if(undefined === this.id) {
      this.id = 'id-' + BaseComponent._id;
    }
  }

  configure(properties: any): any {
    return properties;
  }

  @ViewChild('labelControl', { read: ViewContainerRef })
  labelControl: ViewContainerRef = undefined;

  @ViewChild('inputControl', { read: ViewContainerRef })
  inputControl: ViewContainerRef = undefined;

  @ViewChild('hintControl', { read: ViewContainerRef })
  hintControl: ViewContainerRef = undefined;

  ngOnInit() {
    //console.log('BaseComponent:ngOnInit, inputControl', this.inputControl);

    if(this.renderer) {
      if(this.labelControl && this.labelControl.element.nativeElement) {
        if(this.fieldGroupOptions.layout == 'horizontal') {
          this.renderer.setElementClass(this.labelControl.element.nativeElement, 'col-md-4', true);
          this.renderer.setElementClass(this.labelControl.element.nativeElement, 'text-md-right', true);
        }
      }
      if(this.inputControl && this.inputControl.element.nativeElement) {
        var el: HTMLElement = this.inputControl.element.nativeElement;
        var p = jQuery(el).parent();

        if(this.tooltip) {
          jQuery(el).tooltip({
            placement: 'top',
            title: this.tooltip,
          });
        }

        if(this.required) {
          jQuery(el).attr('required', true);
        }

        if(this.disabled) {
          jQuery(el).attr('disabled', 'disabled');
        }

        if(this.attributes) {
          jQuery(el).attr(this.attributes)
        }

        if(this.fieldGroupOptions.layout == 'horizontal') {
          if(this.labelControl && this.labelControl.element.nativeElement) {
            jQuery(this.labelControl.element.nativeElement, p).after(jQuery('<div class="col-md-8"></div>').append(el));
          }
          p.addClass('row');
        }
      }
      if(this.hintControl && this.hintControl.element.nativeElement) {
        var el: HTMLElement = this.hintControl.element.nativeElement;
        if(this.inputControl && this.inputControl.element.nativeElement) {
          if(this.fieldGroupOptions.layout == 'horizontal') {
            var l: HTMLElement = this.inputControl.element.nativeElement;
            jQuery(l).after(el);
          }
        }
        if(!this.hint) {
          jQuery(el).hide();
        }
      }
    }
  }

  get supports() {
    return this._properties;
  }

  set supports(properties: any) {
    this._properties = properties;
  }
}
