import { DynamicComponent } from './dynamic.component';
import { TextComponent } from './text.component';
import { TextAreaComponent } from './textarea.component';
import { SelectComponent } from './select.component';
import { RadioComponent } from './radio.component';
import { CheckboxComponent } from './checkbox.component';
import { FieldGroupComponent } from './field-group.component';
import { FieldSetComponent } from './field-set.component';

export * from './base.component';
export * from './dynamic.component';
export * from './select.component';
export * from './checkbox.component';
export * from './text.component';
export * from './radio.component';
export * from './textarea.component';
export * from './field-group.component';
export * from './field-set.component';

/* ALIAS EXPORTS */
export { TextComponent as text } from './text.component';
export { TextAreaComponent as textarea } from './textarea.component';
export { SelectComponent as select } from './select.component';
export { RadioComponent as radio } from './radio.component';
export { CheckboxComponent as checkbox } from './checkbox.component';
export { FieldGroupComponent as fieldgroup } from './field-group.component';
export { FieldSetComponent as fieldset } from './field-set.component';

// declare each component
export const DECLARATIONS = [
  DynamicComponent,
  SelectComponent,
  RadioComponent,
  CheckboxComponent,
  TextComponent,
  TextAreaComponent,
  FieldGroupComponent,
  FieldSetComponent,
]

// this is usually just a repeat of the above declarations,
// but if there are any special use-cases, place them here
export const ENTRY_COMPONENTS = [
  ...DECLARATIONS,
];

