import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, computed, inject, input } from '@angular/core';
import { CartItem } from '../../core/services/cart.service';
import { CurrencyService } from '../../core/services/currency.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  item = input.required<CartItem>();
  @Output() quantityChange = new EventEmitter<number>();
  @Output() remove = new EventEmitter<void>();

  private currencyService = inject(CurrencyService);

  // Prix unitaire converti
  convertedPrice = computed(() => {
    this.currencyService.currency(); // Dépendance au signal pour réactivité
    return this.currencyService.formatPrice(this.item().price);
  });

  // Prix total de la ligne converti
  convertedTotal = computed(() => {
    this.currencyService.currency(); // Dépendance au signal pour réactivité
    return this.currencyService.formatPrice(this.item().price * this.item().quantity);
  });

  increment() {
    this.quantityChange.emit(this.item().quantity + 1);
  }

  decrement() {
    if (this.item().quantity > 1) {
      this.quantityChange.emit(this.item().quantity - 1);
    }
  }

  onRemove() {
    this.remove.emit();
  }
}
