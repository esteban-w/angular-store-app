import { Injectable } from '@angular/core';
import { Product } from '../../catalog/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = {};

  constructor() { }

  getItems() {
    return this.items;
  }

  updateItem(product: Product, amount: number) {
    this.items[product.id] = {item: product, amount: amount};
    return this.items[product.id];
  }

  addItem(product: Product, amount: number) {
    if (this.items[product.id]) {
      this.items[product.id].amount += amount;
      return this.items[product.id]
    }

    return this.updateItem(product, amount);
  }
}
