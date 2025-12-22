import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { CartItemComponent } from '../../shared/cart-item/cart-item.component';
import { CartSummaryComponent } from '../../shared/cart-summary/cart-summary.component';
import { ProductRecommendationsComponent } from '../../shared/product-recommendations/product-recommendations.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule, CartItemComponent, CartSummaryComponent, ProductRecommendationsComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartService = inject(CartService);
  private router = inject(Router);

  // Expose signals from service
  cartItems = this.cartService.cartItems;
  subtotal = this.cartService.subtotal;

  updateQuantity(itemId: string, newQuantity: number) {
    this.cartService.updateQuantity(itemId, newQuantity);
  }

  removeItem(itemId: string) {
    this.cartService.removeFromCart(itemId);
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
