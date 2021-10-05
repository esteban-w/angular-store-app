import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(
    private http: HttpClient
  ) {
    this.products$.subscribe((products) => {
      if (products.length === 0) {
        this.http.get<Product[]>('assets/product-data.json', {responseType: 'json'}).pipe(
          catchError(err => {
            console.error(err);
            return throwError('Something went wrong, please try again')
          })
        ).subscribe(products => {
          this.products$.next(products);
        })
      }
    })
  }

}
