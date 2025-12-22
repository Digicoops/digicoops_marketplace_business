import { CommonModule } from '@angular/common';
import { Component, Input, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { CurrencyService } from '../../core/services/currency.service';
import { Product } from '../../core/services/data.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  
  private router = inject(Router);
  private currencyService = inject(CurrencyService);
  private cartService = inject(CartService);

  // Computed signals pour les prix convertis
  convertedPrice = computed(() => {
    return this.currencyService.formatPrice(this.product.price);
  });

  convertedOldPrice = computed(() => {
    return this.product.oldPrice ? this.currencyService.formatPrice(this.product.oldPrice) : null;
  });

  /**
   * Retourne le chemin de route pour afficher les détails d'un produit
   * basé sur sa catégorie principale
   */
  getProductRoute(): string[] {
    if (this.product.mainCategory === 'produit agricole') {
      return ['/product-agricol-detail', this.product.id];
    }
    return ['/product-custom-services', this.product.id];
  }

  /**
   * Navigue vers la page de détail du produit
   */
  navigateToProduct() {
      this.router.navigate(this.getProductRoute());
  }

  addToCart(event: Event) {
    event.stopPropagation();
    this.cartService.addToCart(this.product);
    // Optional: Show notification
  }

  buyNow(event: Event) {
    event.stopPropagation();
    this.cartService.addToCart(this.product);
    this.router.navigate(['/checkout']);
  }

  /**
   * Empêche la propagation de l'événement de clic
   */
  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
