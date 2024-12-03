import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems: { name: string, price: number }[] = [];
  faShoppingCart = faShoppingCart;
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  removeFromCart(item: { name: string, price: number }) {
    this.cartService.removeItem(item);
    this.totalPrice = this.cartService.getTotalPrice();
  }

  checkout() {
    if (confirm(`Do you want to pay a total amount of $${this.totalPrice.toFixed(2)}?`)) {
      this.router.navigate(['/payment'], {
        queryParams: {
          cartItems: JSON.stringify(this.cartItems),
          totalPrice: this.totalPrice.toFixed(2)
        }
      });
    }
  }
}
