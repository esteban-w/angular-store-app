import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    CartComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CheckoutModule { }
