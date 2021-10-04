import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../../checkout/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event, amount: string) {
    event.preventDefault();
    if (this.product) {
      this.cartService.addItem(this.product, parseInt(amount));
      if (window.confirm('Product added! Do you want to check your cart?')) {
        this.router.navigate(['/cart'])
      }
    }
  }

}
