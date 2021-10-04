import { Injectable } from '@angular/core';
import { Product } from '../../catalog/models/product';
import { Cart, CartItem } from '../models/cart';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = { items: {}, total: 0};
  cartItems$: Subject<object> = new Subject<object>();
  cartCount$: Subject<number> = new Subject<number>();

  constructor() {
    this.cartItems$.subscribe((items: object) => {
      let cartTotal = 0;
      let cartCount = 0;

      Object.values(items).forEach((item: CartItem) => {
        const itemTotal = item.product.price * item.amount;
        cartTotal += itemTotal;
        cartCount += item.amount;
      })

      this.cart.total = cartTotal;
      this.cartCount$.next(cartCount);
    })
  }

  getItems() {
    return this.cart.items;
  }

  getTotal() {
    return this.cart.total;
  }

  updateItem(product: Product, amount: number) {
    this.cart.items[product.id] = {product: product, amount: amount};
    this.cartItems$.next(this.cart.items);
    return this.cart.items[product.id];
  }

  addItem(product: Product, amount: number) {
    if (this.cart.items[product.id]) {
      this.cart.items[product.id].amount += amount;
      this.cartItems$.next(this.cart.items);
      return this.cart.items[product.id]
    }

    return this.updateItem(product, amount);
  }
}
