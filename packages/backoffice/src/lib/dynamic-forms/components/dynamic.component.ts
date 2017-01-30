import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, Renderer, ElementRef, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver} from '@angular/core';
import { FormsService } from '../forms.service';
import * as models from '../models';
import * as components from './index';

@Component({
  selector: 'div[dynamic-component]',
  template: `
    <div #dynamicComponentContainer></div>
  `,
  providers: [
  ],
})
export class DynamicComponent implements OnDestroy, OnInit {
  public currentComponent = null;

  public componentDef: models.DynamicComponentDef = null;

  @Output()
  valueChange = new EventEmitter();

  private _value: any = null;
  //get accessor
  get value(): any {
    return this._value;
  };

  @Input() set value(v: any) {
    if(v !== this._value) {
      this._value = v;
      let e = {
        value: this._value,
        componentDef: this.componentDef,
      };
      //console.log('DynamicComponent:valueChange.emit', e);
      this.valueChange.emit(e);
      this.formsService.emit(e);
    }
  }

  constructor(private formsService: FormsService, private renderer: Renderer, private elemenetRef: ElementRef, private resolver: ComponentFactoryResolver) { }

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  dynamicComponentContainer: ViewContainerRef;

  @Input()
  fieldGroupOptions: models.FieldGroupOptions;

  // component: Class for the component you want to create
  // inputs: An object with key/value pairs mapped to input name/input value
  @Input() set componentData(data: models.DynamicComponentDef) {
    //console.log('dynamic-component', data);

    if(!(data.type in components)) {
      // TODO: throw not found exception
      console.error('Unknown type ', data.type, ' requested', data);
      return;
    }

    this.componentDef = data;
    if(this.fieldGroupOptions) {
      this.componentDef.fieldGroupOptions = this.fieldGroupOptions;
    } else {
      this.componentDef.fieldGroupOptions = { columns: 3, layout: 'vertical', };
    }

    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(this.componentDef).map((inputName) => {
      //console.log('inputProviders', inputName, this.componentDef[inputName]);
      return {provide: inputName, useValue: this.componentDef[inputName]};
    });

    inputProviders.push({ provide: 'ElementRef', useValue: ElementRef });
    inputProviders.push({ provide: 'Renderer', useValue: Renderer });
    inputProviders.push({ provide: 'FormsService', useValue: FormsService });

    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

    let componentReference = components[this.componentDef.type];

    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(componentReference);

    //console.log('DynamicComponent:componentData, injector', injector);
    let component = this.dynamicComponentContainer.createComponent(factory, null, injector);


    if(undefined !== this.componentDef.value) {
      (component.instance as components.BaseComponent).value = this.componentDef.value;
    }

    //var def = new DynamicComponentDef();
    //console.log('BaseComponent:constructor, def', def);
    for(var propertyName in this.componentDef) {
      try {
        var propertyValue = this.componentDef[propertyName]
        component.instance[propertyName] = propertyValue;
      } catch(e) {
        console.warn('DynamicComponent:componentData, error setting component.instance[propertyName]', propertyName, e);
      }
    }

    (component.instance as components.BaseComponent).valueChange.subscribe(event => this.onValueChange(event));
    (component.instance as components.BaseComponent).classesChange.subscribe(event => this.onClassesChange(event));

    this.currentComponent = component;
  }

  get componentData() {
    return this.currentComponent;
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if(this.currentComponent) this.currentComponent.destroy()
  }

  onValueChange(e) {
    //console.log('DynamicComponent:onValueChange', e);
    this.value = e.value;
    this.componentDef.value = e.value;
  }

  onClassesChange(e: {[propName: string]: any;}) {
    for(var key in e) {
      this.renderer.setElementClass(this.elemenetRef.nativeElement, key, e[key]);
    }
  }
}
