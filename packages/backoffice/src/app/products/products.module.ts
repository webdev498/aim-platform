import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';


import { UiModule } from 'lib/ui';
import { DynamicFormsModule } from 'lib/dynamic-forms';

import { RouterModule } from '@angular/router';

import { ProductsService } from "./products.service";

import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';

import { ProductsRoutingModule } from './products-routing.module';

import { DataTableModule, MessagesModule, SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule, MessagesModule, SharedModule,
    UiModule,
    DynamicFormsModule,
    ProductsRoutingModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ProductsService,
  ],
  declarations: [
    ProductComponent,
    ProductsComponent
  ]
})
export class ProductsModule {
}

