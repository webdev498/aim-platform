export * from './models';
export * from './components';
export * from './forms.service';
export * from './form/form.component';

import { NgModule } from '@angular/core';
//import { FormsModule } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './form/form.component';
import { DynamicFormValidator } from './models';

//import { BuilderComponent } from './builder/builder.component';

import * as components from './components';

export {
  DynamicFormComponent,
  DynamicFormValidator
};

export const UI_COMPONENTS = [
  DynamicFormComponent,
  ...components.DECLARATIONS
];

export const UI_DIRECTIVES = [
  DynamicFormValidator
];

export const UI_PIPES = [
];

export const UI_ENTRY_COMPONENTS = [
  ...components.ENTRY_COMPONENTS
]

import { UiModule } from 'lib/ui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
  ],
  declarations: [
    ...UI_COMPONENTS,
    ...UI_DIRECTIVES,
    ...UI_PIPES,
  ],
  exports: [
    ...UI_COMPONENTS,
    ...UI_DIRECTIVES,
    ...UI_PIPES,
  ],
  entryComponents: [
    ...UI_ENTRY_COMPONENTS,
  ]
})
export class DynamicFormsModule {
  constructor() {}
}
