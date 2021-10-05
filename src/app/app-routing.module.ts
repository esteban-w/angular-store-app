import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './catalog/products/products.component';
import { CartComponent } from './checkout/cart/cart.component';
import { ProductComponent } from './catalog/product/product.component';
import {OrderResultComponent} from './checkout/order-result/order-result.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'order/:id', component: OrderResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
