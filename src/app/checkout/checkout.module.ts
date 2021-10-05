import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { OrderResultComponent } from './order-result/order-result.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    CartComponent,
    OrderComponent,
    OrderResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class CheckoutModule { }
