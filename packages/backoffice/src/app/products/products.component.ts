import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { AppConfig } from 'app/app.config';
import { ProductsService } from './products.service';
import { Data, Products } from 'lib/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  @Input()
  products: Data<Products.Product>[];

  columns: any[];

  actions: { title: string, style: string, route: string, id: string, }[];

  messages: Message[];

  constructor(private appConfig: AppConfig, public productsService: ProductsService) {
    this.messages = [];
    let s = new Products.Product();
    this.columns = [
      {
        header: 'Title',
        field: 'title',
      }
    ];

    this.actions = [
      {
        title: 'Edit',
        style: 'success',
        route: '',
        id: 'id',
      }
    ]
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products as Data<Products.Product>[];
      console.log('ProductsComponent:ngOnInit, products: ', this.products);
    });
  }

  postMessage(severity: string) {
    if(!severity) severity = 'info';
    let m = {
      severity: severity,
      summary: 'Summary of Message',
      detail: 'Lorem ipsum dolor set ... amet',
    };
    this.appConfig.postMessage(m);
    this.messages = [];
    this.messages.push(m);
  }
}
