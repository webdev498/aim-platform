import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent }    from './products.component';
import { ProductComponent }  from './product/product.component';

export const routes = [
  { path: '', component: ProductsComponent, pathMatch: 'full' },
  { path: 'create', component: ProductComponent },
  { path: ':productId', component: ProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
