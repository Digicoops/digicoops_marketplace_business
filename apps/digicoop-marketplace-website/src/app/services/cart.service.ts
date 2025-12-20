import { Injectable, computed, signal } from '@angular/core';

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  ref: string;
  inStock: boolean;
  category: string; 
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Initialiser avec des données mockées pour l'instant
  cartItems = signal<CartItem[]>([
    {
      id: '1',
      name: 'Semences de Blé Hiver - 50kg',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx1ZmCV35CsWUmCvPGYrBODPMz3xxRUFLKXY2Nc3ITk1pcBOdthzg5vuSoR0YyXfSApnvWx8RTf8aImZzAju0tZKqyB650zD5jtfBPYox-grHItvrlYBmlMf1EAicVbQaO-Dfu-pJP9wqW_CxemkDVD95seRuxjjSOXHWnysjqIkycIOk2rnuWJFM-uVK1QRsLqle7YRmdjsbihib4zzX3w6ruiLicbtR12SGcEhWQvzi4WYt7llr4VzCSFeqJkH4oniMMBh-BODM',
      price: 45,
      quantity: 2,
      ref: 'S-BLE-001',
      inStock: true,
      category: 'produit agricole'
    },
    {
      id: '2',
      name: 'Engrais Organique Bio',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFA5G7Zp1_V2pp700csosW-SL-5SkqdX_hJaXtI2x88HVcUaisKQrRK8GnKprGCf76s-R_fQXKasw2Y17UDXMKGuGqVJfMao9QWL7zF2MKP8YDUcPyMkoxZy2kWHNSVghfFFIV7pyAXqzikYrbzjeC4NS3gmWe4QLxz-iiRVzL1Cp_tEht_zKIg4AWaL4PPUsxPB81Oaai4m5B6pYl1s6KueNffW0o5nH-sz-0DsRfpnYFvqSLJBt4GDpPxDj-WNG0Yfc7VrPAEVM',
      price: 45,
      quantity: 5,
      ref: 'E-ORG-220',
      inStock: true,
      category: 'produit agricole'
    }
  ]);

  taxRate = 0.20;

  subtotal = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + (item.price * item.quantity), 0);
  });

  taxAmount = computed(() => this.subtotal() * this.taxRate);

  total = computed(() => this.subtotal() + this.taxAmount());

  addToCart(product: any) { // Type 'any' temporaire, mieux d'utiliser Product interface
    const currentItems = this.cartItems();
    const existingItem = currentItems.find(i => i.id === product.id);

    if (existingItem) {
      this.updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      this.cartItems.update(items => [...items, {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
        ref: product.ref || 'REF-UNK',
        inStock: product.stock !== 'Rupture de stock',
        category: product.category
      }]);
    }
  }

  removeFromCart(itemId: string) {
    this.cartItems.update(items => items.filter(item => item.id !== itemId));
  }

  updateQuantity(itemId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(itemId);
      return;
    }
    
    this.cartItems.update(items => 
      items.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
