import { Injectable, signal } from '@angular/core';

export type Currency = 'XOF' | 'EUR' | 'USD';

export interface CurrencyInfo {
  code: Currency;
  symbol: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  // Signal pour la devise actuelle
  private currentCurrencySignal = signal<Currency>('XOF');
  
  // Liste des devises disponibles
  currencies: CurrencyInfo[] = [
    { code: 'XOF', symbol: 'CFA', name: 'Franc CFA' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'USD', symbol: '$', name: 'Dollar US' }
  ];
  
  // Taux de conversion depuis XOF vers les autres devises
  // 1 unité de la devise = X XOF
  private exchangeRates: Record<Currency, number> = {
    XOF: 1,           // 1 XOF = 1 XOF
    EUR: 655.957,     // 1 EUR = 655.957 XOF
    USD: 600          // 1 USD = 600 XOF
  };

  /**
   * Retourne la devise actuelle
   */
  getCurrentCurrency(): Currency {
    return this.currentCurrencySignal();
  }

  /**
   * Retourne les infos de la devise actuelle
   */
  getCurrentCurrencyInfo(): CurrencyInfo {
    const code = this.currentCurrencySignal();
    return this.currencies.find(c => c.code === code)!;
  }

  /**
   * Change la devise actuelle
   */
  setCurrency(currency: Currency): void {
    this.currentCurrencySignal.set(currency);
    // Sauvegarder dans localStorage pour persistance
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedCurrency', currency);
    }
  }

  /**
   * Convertit un prix depuis XOF vers la devise actuelle
   */
  convertPrice(priceInXOF: number): number {
    const currentCurrency = this.currentCurrencySignal();
    const rate = this.exchangeRates[currentCurrency];
    return priceInXOF / rate;
  }

  /**
   * Formate un prix dans la devise actuelle
   */
  formatPrice(priceInXOF: number): string {
    const convertedPrice = this.convertPrice(priceInXOF);
    const currencyInfo = this.getCurrentCurrencyInfo();
    
    // Formatage selon la devise
    if (currencyInfo.code === 'XOF') {
      // XOF : pas de décimales, espace avant le symbole
      return `${Math.round(convertedPrice).toLocaleString('fr-FR')} ${currencyInfo.symbol}`;
    } else if (currencyInfo.code === 'EUR') {
      // EUR : 2 décimales, symbole après
      return `${convertedPrice.toFixed(2)} ${currencyInfo.symbol}`;
    } else {
      // USD : 2 décimales, symbole avant
      return `${currencyInfo.symbol} ${convertedPrice.toFixed(2)}`;
    }
  }

  /**
   * Initialise la devise depuis localStorage
   */
  initializeFromStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedCurrency = localStorage.getItem('selectedCurrency') as Currency;
      if (savedCurrency && this.currencies.some(c => c.code === savedCurrency)) {
        this.currentCurrencySignal.set(savedCurrency);
      }
    }
  }

  /**
   * Retourne le signal en lecture seule pour réactivité
   */
  get currency() {
    return this.currentCurrencySignal.asReadonly();
  }
}
