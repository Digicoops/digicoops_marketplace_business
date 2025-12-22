import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyService } from '../../core/services/currency.service';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent {
  subtotal = input<number>(0);
  taxRate = input<number>(0.20); // 20% par défaut
  @Output() checkout = new EventEmitter<void>();

  private currencyService = inject(CurrencyService);

  // Calculs convertis
  convertedSubtotal = computed(() => {
    this.currencyService.currency();
    return this.currencyService.formatPrice(this.subtotal());
  });

  taxAmount = computed(() => this.subtotal() * this.taxRate());

  convertedTax = computed(() => {
    this.currencyService.currency();
    return this.currencyService.formatPrice(this.taxAmount());
  });

  total = computed(() => this.subtotal() + this.taxAmount());

  convertedTotal = computed(() => {
    // Force dependency on currency signal
    this.currencyService.currency();
    // Calculate total dynamically inside the computed to ensure reactivity with subtotal updates
    const currentSubtotal = this.subtotal(); // access value with ()
    const currentTax = currentSubtotal * this.taxRate(); // access value with ()
    const total = currentSubtotal + currentTax;
    return this.currencyService.formatPrice(total);
  });

  onCheckout() {
    this.checkout.emit();
  }
}
