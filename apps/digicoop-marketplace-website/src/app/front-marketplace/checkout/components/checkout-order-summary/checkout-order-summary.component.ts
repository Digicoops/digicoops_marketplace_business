import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, computed, inject } from '@angular/core';
import { CartService } from '../../../../core/services/cart.service';
import { CurrencyService } from '../../../../core/services/currency.service';

@Component({
  selector: 'app-checkout-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-order-summary.component.html',
  styleUrls: ['./checkout-order-summary.component.scss']
})
export class CheckoutOrderSummaryComponent {
  @Input() actionLabel: string = 'Continuer vers le paiement';
  @Output() action = new EventEmitter<void>();

  cartService = inject(CartService);
  currencyService = inject(CurrencyService);

  cartItems = this.cartService.cartItems;
  subtotal = this.cartService.subtotal;
  taxAmount = this.cartService.taxAmount;
  total = this.cartService.total;

  // Computed signals pour les prix convertis
  convertedSubtotal = computed(() => {
    this.currencyService.currency();
    return this.currencyService.formatPrice(this.subtotal());
  });

  convertedTax = computed(() => {
    this.currencyService.currency();
    return this.currencyService.formatPrice(this.taxAmount());
  });

  convertedTotal = computed(() => {
    this.currencyService.currency();
    return this.currencyService.formatPrice(this.total());
  });

  getConvertedPrice(price: number): string {
    // Cette méthode est utilisée dans le template pour les items individuels
    // Note: Dans un template *ngFor, computed ne marche pas directement pour chaque item, 
    // donc on appelle le service directement. Pour la réactivité fine, il faudrait un sous-composant item.
    // Mais ici le changement de devise déclenchera la détection de changement Angular.
    return this.currencyService.formatPrice(price);
  }
  
  getConvertedItemTotal(item: any): string {
     return this.currencyService.formatPrice(item.price * item.quantity);
  }
}
