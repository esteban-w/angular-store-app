import { Component, OnInit } from '@angular/core';
import { CartService } from '../../checkout/services/cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    this.cartCount = this.cartService.cartCount$;
  }

  ngOnInit(): void {
  }

}
