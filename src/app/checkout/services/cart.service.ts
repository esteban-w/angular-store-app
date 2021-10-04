import { Injectable } from '@angular/core';
import { Product } from '../../catalog/models/product';
import { Cart, CartItem } from '../models/cart';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = { items: {}, total: 0};
  cartItems$: BehaviorSubject<object> = new BehaviorSubject<object>({});
  cartCount$: Subject<number> = new Subject<number>();
  cartTotal$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

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
      this.cartTotal$.next(this.cart.total);
      this.cartCount$.next(cartCount);
    })
  }

  updateItem(product: Product, amount: number) {
    if (amount === 0) {
      return this.removeItem(product);
    }

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

  removeItem(product: Product) {
    if (this.cart.items[product.id]) {
      delete this.cart.items[product.id];
      this.cartItems$.next(this.cart.items);
    }
  }

}
