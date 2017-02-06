import { ComponentRef } from '@angular/core';
import { Form, FieldGroupOptions } from './form.model';

/*export class DynamicComponentDef {
  id: string;
  type: string;
  inputs: DynamicComponentInputDef;
}

export class DynamicComponentInputDef {
*/
export class DynamicComponentDef {
  public id: string = null; // the id of the element, also maps to the components binding back to it's object
  public type?: string = null; // if components have different 'types' of displays, it would be set here
  public required?: boolean = false;
  public fieldGroupOptions?: FieldGroupOptions = null;

  // internal
  public value?: any; // used to set the value on the component when it's being used
  // this is set using the ComponentFactoryResolver later
  public component?: ComponentRef<any> = null; // a reference to the actual component created

  // external/public
  public title?: string = null;
  public background?: string = null;
  public transparent?: boolean = null;
  public size?: string = null;
  public border?: string = null;
  public hint?: string = null;
  public tooltip?: string = null;
  public disabled?: boolean = false;
  // attributes is mapped directly to the html elements attributes
  public attributes?: {[propName: string]: any}[]  = null;
  public data?: {
    source: string,
    cache: boolean,
  };
  public options?: {
    columns?: number,
    values?: MultiValueItem[],
    style?: string,
    layout?: string,
    mask?: string,
    autogrow?: boolean,
    editor?: {
      type?: string,
      source?: string,
      params?: {
        [propName: string]: any,
      },
    },
    append?: {
      text?: string,
      icon?: string,
      background?: string,
      [propName: string]: any,
    },
    prepend?: {
      text?: string,
      icon?: string,
      background?: string,
      [propName: string]: any,
    },
    autoComplete?: string,
    [propName: string]: any,
  } = null;

  /*
  name?: string;
  label?: string;
  defaultValue?: string = null;
  placeholder?: string;
  help?: string;
  */
  // additional optional parameters that could exist for advanced components

  //[propName: string]: any;
}

export class MultiValueItem {
  readonly value: string;
  readonly label?: string;
}
