import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { CurrencyService } from '../../../../core/services/currency.service';

@Component({
  selector: 'app-checkout-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-confirmation.component.html',
  styleUrls: ['./checkout-confirmation.component.scss']
})
export class CheckoutConfirmationComponent {
  private cartService = inject(CartService);
  private currencyService = inject(CurrencyService);

  cartItems = this.cartService.cartItems;
  
  subtotal = computed(() => this.currencyService.formatPrice(this.cartService.subtotal()));
  tax = computed(() => this.currencyService.formatPrice(this.cartService.taxAmount()));
  total = computed(() => this.currencyService.formatPrice(this.cartService.total()));

  // Helper to format price per item
  formatPrice(price: number) {
    return this.currencyService.formatPrice(price);
  }
}
