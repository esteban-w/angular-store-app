import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  cartTotal: number = 0;
  customerName: string = '';
  customerEmail: string = '';
  customerAddress: string = '';
  customerCreditCard: string = '';

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = Object.values(this.cartService.getItems());
    this.cartTotal = this.cartService.getTotal();
  }

  onSubmit() {
    // create order
  }

}
