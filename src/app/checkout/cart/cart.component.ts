import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart';
import { Product } from '../../catalog/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  cartTotal: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    this.cartTotal = this.cartService.cartTotal$;
  }

  ngOnInit(): void {
    this.items = Object.values(this.cartService.getItems());
  }

  onSubmit(event: Event, product: Product, amount: string) {
    event.preventDefault();
    this.cartService.updateItem(product, parseInt(amount));
  }

}
