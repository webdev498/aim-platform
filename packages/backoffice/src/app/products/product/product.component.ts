import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { DynamicFormComponent, DynamicForm } from 'lib/dynamic-forms';

import { ProductsService} from '../products.service';
import { Data, Products } from 'lib/api';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

  product: Data<Products.Product>;
  form: DynamicForm;

  initialized: boolean = false;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) {}

  private routeParamSubscription: any;
  ngOnInit() {
    this.routeParamSubscription = this.route.params.subscribe(params => {
      let productId = params['productId'];

      if(productId) {
        console.log('ProductComponent:ngOnInit, productId: ', productId);
        this.productsService.getProduct(productId).subscribe(product => {
          console.log('ProductComponent:ngOnInit, product: ', product);
          this.productsService.getForm(product).subscribe(form => {
            this.product = product;
            this.form = form;
            this.initialized = true;
          });
        });
      } else {
        // create new product
        let product = new Data<Products.Product>();
        this.productsService.getForm(product).subscribe(form => {
          this.product = product;
          this.form = form;
          this.initialized = true;
        });
      }
    });
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }

  onSubmit(formData: {model: Products.Product}) {
    console.log('ProductComponent, onSubmit, model: ', formData.model);
    this.productsService.saveProduct(this.product);
  }

  onCancel(formData: {model: Products.Product}) {
    console.log('ProductComponent, onCancel, model: ', formData.model);
  }

}
