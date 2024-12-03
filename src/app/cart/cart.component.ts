import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

interface CartItem {
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.items.reduce((acc, item) => acc + item.price, 0);
  }

  clearCart(): void {
    const cartCleared = this.cartService.clearCart();
    if (cartCleared) {
      this.items = []; // Clear local items array
      this.total = 0; // Reset total
      alert('Cart cleared successfully!');
    } else {
      alert('Cart clear canceled.');
    }
  }
}
