import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Observable } from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  productAdded: number | undefined;

  constructor(
    private productService: ProductService
  ) {
    this.products$ = this.productService.products$;
  }

  ngOnInit(): void {
  }

}
