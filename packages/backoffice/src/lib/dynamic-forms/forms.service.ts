import { EventEmitter, Output, Injectable } from '@angular/core';
import { DynamicComponentDef } from './models';
import { Observable } from 'rxjs';

@Injectable()
export class FormsService {
  @Output()
  componentChange = new EventEmitter();

  // used to emit changes to a component
  // value: the value of the component
  // componentDef: the DynamicComponentDef that was changed
  emit($event: { value: any, componentDef: DynamicComponentDef }) {
    this.componentChange.emit($event);
  }
}
