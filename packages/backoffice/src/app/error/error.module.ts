import { CommonModule } from '@angular/common';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorComponent } from './error.component';

export const routes = [
  { path: '', component: ErrorComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ngFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ErrorModule {
  static routes = routes;
}
