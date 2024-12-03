import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cart);

  cart$ = this.cartSubject.asObservable();

  constructor() { }

  addItem(item: CartItem) {
    this.cart.push(item);
    this.cartSubject.next(this.cart);
  }

  removeItem(item: CartItem) {
    const index = this.cart.findIndex(i => i.name === item.name && i.price === item.price);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartSubject.next(this.cart);
    }
  }

  clearCart(): boolean {
    const confirmClear = window.confirm('Are you sure you want to clear the cart?');
    if (confirmClear) {
      this.cart = [];
      this.cartSubject.next(this.cart);
      return true; // Return true if cart was cleared
    }
    return false; // Return false if cart was not cleared
  }

  getItems(): CartItem[] {
    return this.cart;
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
