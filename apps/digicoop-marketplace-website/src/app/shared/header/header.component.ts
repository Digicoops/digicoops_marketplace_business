import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { Currency, CurrencyService } from '../../core/services/currency.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currencyService = inject(CurrencyService);
  cartService = inject(CartService);
  currencies = this.currencyService.currencies;
  currentCurrency = this.currencyService.getCurrentCurrencyInfo();
  
  cartCount = computed(() => this.cartService.cartItems().length);
  
  ngOnInit(): void {
    // Initialiser la devise depuis localStorage
    this.currencyService.initializeFromStorage();
  }
  
  changeCurrency(currencyCode: Currency): void {
    this.currencyService.setCurrency(currencyCode);
    this.currentCurrency = this.currencyService.getCurrentCurrencyInfo();
  }
}
