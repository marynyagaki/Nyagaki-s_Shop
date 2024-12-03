import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  cartItems: { name: string, price: number }[] = [];
  totalPrice: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['cartItems']) {
        this.cartItems = JSON.parse(params['cartItems']);
        this.totalPrice = parseFloat(params['totalPrice']);
      }
    });
  }

  proceedToPayment() {
    // Simulate payment process
    alert('Payment successful!');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
}
