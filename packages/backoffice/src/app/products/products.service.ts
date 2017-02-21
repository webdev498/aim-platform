import { EventEmitter, Output, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import { ApiService } from '../api.service';
import { DynamicForm } from 'lib/dynamic-forms';

import { Data, DataType, Products } from 'lib/api';

@Injectable()
export class ProductsService {
  constructor(private apiService: ApiService) { }

  getProduct(productId: string): Observable<Data<Products.Product>> {
    return this.apiService.getByType<Data<Products.Product>>(Data, '/data/' + productId);
  }

  saveProduct(product: Data<Products.Product>) {
    this.apiService.put('/data/' + product.id, product);
  }

  getProducts(): Observable<Data<Products.Product>[]> {
    return this.apiService.getArrayByType<Data<Products.Product>>(Data, '/products');
  }

  getForm(model: Data<any>): Observable<DynamicForm> {
    return this.apiService.getForm(model);
  }
}
