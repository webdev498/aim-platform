import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

import { FormsService } from '../forms.service';

function dynamicFormControlValidator(formsService: FormsService) {
  console.log('dynamicFormControlValidator loaded');
  return (c: FormControl) => {
    let error = {
      property: {
        valid: false,
      },
    };
    let isValid = false;
    return isValid ? null : error;
  };
}

@Directive({
  selector: '[dynamic-forms-validator][ngModel],[dfv][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DynamicFormValidator), multi: true }
  ]
})
export class DynamicFormValidator {
  validator: Function;
  constructor(formsService: FormsService) {
    this.validator = dynamicFormControlValidator(formsService);
  }
  validate(c: FormControl) {
    return this.validator(c);
  }
}
