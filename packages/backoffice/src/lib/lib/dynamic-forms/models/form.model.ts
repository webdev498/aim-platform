import { DynamicComponentDef } from './dynamic-component.model';
import { FieldGroupComponent } from '../components';
import * as _ from 'lodash';

export class FieldGroup {
  id: any;
  title: string;
  description?: string;
  actions?: {
    save?: boolean,
    cancel?: boolean,
  };
  options?: FieldGroupOptions;
  fields: DynamicComponentDef[];
}

export class FieldGroupOptions {
  columns?: number = 3;
  layout?: string = 'vertical';
}

export class ModelSchemaProperty {
  type: string = null;
  [propName: string]: any;
}

export class ModelSchemaBase {
  title?: string = null;
  type: string = null;
  properties: {
    [propName: string]: ModelSchemaProperty,
  };
  required?: string[] = [];
}

export class ModelSchema extends ModelSchemaBase {

}

export class FormBase {
  id: any; // likely a guid of some sort ?
  platformId: any;
  type: string;
  content: {
    schema: ModelSchema,
    fieldDisplay?: {
      type?: string, // panel
      options?: {
        columns?: number,
        layout?: string,
      },
    },
    fieldGroups: FieldGroup[],
  }
}

export class Form extends FormBase {
  load(obj: Object, fields?: DynamicComponentDef[]) {
    if(!fields) {
      for(var i = 0; i < this.content.fieldGroups.length; i++) {
        this.load(obj, this.content.fieldGroups[i].fields);
      }
      return;
    }
    //console.log('Form:load', obj);
    for(var i = 0; i < fields.length; i++) {
      let field = fields[i];
      //console.log('Form:load, field', field);
      if(_.has(obj, field.id)) {
        //console.log('Form:load, field id', field.id);
        field.value = _.get(obj, field.id);
      }
      // sanity check?
      if(field.options && 'fields' in field.options) {
        //console.log('Form:load, recursive check', field.options['fields']);
        this.load(obj, field.options['fields']);
      }
    }
  }

  validate(propName?: string, value?: any) {
    // validate a specific property
    if(undefined !== propName && undefined !== value) {
      return false;
    }
    // validate the entire form, one property at a time
    return false;
  }
}
