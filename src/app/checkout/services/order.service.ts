import { Injectable } from '@angular/core';
import { OrderRegistry, Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: OrderRegistry = {};

  constructor() { }

  createOrder(order: Order) {
    const orderIds = Object.keys(this.orders);
    const latestId = orderIds[orderIds.length - 1] || '0';
    const newId = parseInt(latestId) + 1;
    order['id'] = newId;
    this.orders[newId] = order;

    return this.orders[newId];
  }

  getOrderById(id: number) {
    return this.orders[id];
  }
}
