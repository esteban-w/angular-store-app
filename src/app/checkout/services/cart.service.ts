import { Injectable } from '@angular/core';
import { Product } from '../../catalog/models/product';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = { items: {}, total: 0};

  constructor() { }

  getItems() {
    return this.cart.items;
  }

  getTotal() {
    return this.cart.total;
  }

  updateItem(product: Product, amount: number) {
    this.cart.items[product.id] = {product: product, amount: amount};
    return this.cart.items[product.id];
  }

  addItem(product: Product, amount: number) {
    if (this.cart.items[product.id]) {
      this.cart.items[product.id].amount += amount;
      return this.cart.items[product.id]
    }

    return this.updateItem(product, amount);
  }
}
