import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CartService } from '../../checkout/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  onSubmit(event: Event, product: Product, amount: string) {
    event.preventDefault();
    this.cartService.addItem(product, parseInt(amount));
    if (window.confirm('Product added! Do you want to check your cart?')) {
      this.router.navigate(['/cart'])
    }
  }

}
