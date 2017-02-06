/*
 * The format of this file comes from the way @angular/common is exported
 */

import { NgModule } from '@angular/core';
import { Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { WidgetDirective } from './directives/widget.directive';
import { MessengerDirective } from './directives/messenger.directive';
import { TableComponent } from './components/table.component';
import { TimeAgoPipe } from './pipes/time-ago';
import { KeyMapPipe } from './pipes/key-map';

import { SingTable } from './components/sing-table.component';
import { Column } from './components/common';

export {
  TableComponent,
  TimeAgoPipe,
  KeyMapPipe,
  WidgetDirective,
  MessengerDirective,
  SingTable,
  Column, 
};

export const UI_COMPONENTS = [
  TableComponent,
  SingTable,
  Column, 
];

export const UI_DIRECTIVES = [
  WidgetDirective,
  MessengerDirective,
];

export const UI_PIPES = [
  TimeAgoPipe,
  KeyMapPipe,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
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
  ]
})
export class UiModule {

}
