import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CatalogModule { }
