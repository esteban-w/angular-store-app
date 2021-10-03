import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CartService } from '../../checkout/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = {id:-1, description: "", name: "", price: 0, url: ""};

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.product = this.productService.getProductById(params.id);
    })
  }

  onSubmit(event: Event, product: Product, amount: string) {
    event.preventDefault();
    this.cartService.addItem(product, parseInt(amount));
  }

}
