import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Observable, combineLatest } from "rxjs";
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product$: Observable<Product | undefined>;
  productAdded: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product$ = combineLatest([this.productService.products$, this.route.params]).pipe(
      map(([products, params]) => {
        return products.find(product => product.id == params.id)
      })
    );
  }

  ngOnInit(): void {
  }

  setProductAdded(id: number) {
    this.productAdded = id;
  }

}
