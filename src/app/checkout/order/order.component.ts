import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { CartItem } from '../models/cart';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  name: string = '';
  email: string = '';
  address: string = '';
  card: string = '';
  @Input() items: CartItem[] | null = null;
  @Input() total: number | null = null;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.items && this.items.length && this.total) {
      const order: Order = {
        address: this.address,
        card: this.card,
        email: this.email,
        items: this.items,
        name: this.name,
        total: this.total
      };
      const newOrder = this.orderService.createOrder(order);
      this.cartService.emptyCart();
      this.router.navigate([`/order/${newOrder.id}`]);
    }
  }

}
