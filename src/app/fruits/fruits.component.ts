import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  notification: string | null = null;

  constructor(private cartService: CartService){ }

  addToCart(fruit: { name: string, price: number }) {
    this.cartService.addItem(fruit);
    this.notification = `${fruit.name} added to cart!`;
    setTimeout(() => {
      this.notification = null;
    }, 2000);
  }

  fruits = [
    { name: 'Apples', image: '/assets/apples.jpg', price: 1.2 },
    { name: 'Avocados', image: '/assets/avocados.jpg', price: 2.5 },
    { name: 'Bananas', image: '/assets/banana.jpg', price: 1.1 },
    { name: 'Watermelons', image: '/assets/watermelon.jpg', price: 3.0 },
    { name: 'Pawpaw', image: '/assets/pawpaw.jpg', price: 1.8 },
    { name: 'Thornmelons', image: '/assets/thornmelon.jpg', price: 2.2 },
    { name: 'Mandarin/sandaras', image: '/assets/mandarin-sandara.jpg', price: 1.5 },
    { name: 'Oranges', image: '/assets/orange.jpg', price: 1.3 },
    { name: 'Tomokos', image: '/assets/tomoko.jpg', price: 2.0 },
    { name: 'Passion fruits', image: '/assets/passion fruit.jpg', price: 1.4 },
    { name: 'Mangoes', image: '/assets/mango.jpg', price: 2.7 },
  ];
}
