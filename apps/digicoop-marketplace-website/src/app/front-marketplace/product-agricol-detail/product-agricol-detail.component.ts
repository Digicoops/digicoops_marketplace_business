import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyService } from '../../core/services/currency.service';
import { DataService, Product } from '../../core/services/data.service';
import { ProductRecommendationsComponent } from '../../shared/product-recommendations/product-recommendations.component';

@Component({
  selector: 'app-product-agricol-detail',
  imports: [RouterLink, CommonModule, ProductRecommendationsComponent],
  templateUrl: './product-agricol-detail.component.html',
  styleUrls: ['./product-agricol-detail.component.scss']
})
export class ProductAgricolDetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  dataService = inject(DataService);
  currencyService = inject(CurrencyService);
  
  product: Product | undefined;
  quantity = signal(1);
  selectedImage: string = '';
  activeTab: string = 'description';

  // Computed signals pour les prix convertis - réagissent au changement de devise
  convertedPrice = computed(() => {
    // Accède au signal currency pour déclencher la réactivité
    this.currencyService.currency();
    return this.product ? this.currencyService.formatPrice(this.product.price) : '';
  });

  convertedOldPrice = computed(() => {
    // Accède au signal currency pour déclencher la réactivité
    this.currencyService.currency();
    return this.product?.oldPrice ? this.currencyService.formatPrice(this.product.oldPrice) : null;
  });

  totalPrice = computed(() => {
    // Accède au signal currency pour déclencher la réactivité
    this.currencyService.currency();
    if (!this.product) return '';
    return this.currencyService.formatPrice(this.product.price * this.quantity());
  });

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.product = this.dataService.getProductById(id);
        if (this.product) {
          this.selectedImage = this.product.image;
        }
      }
    });
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  increment() {
    this.quantity.update(q => q + 1);
  }

  decrement() {
    this.quantity.update(q => q > 1 ? q - 1 : 1);
  }

  getProductSpecs() {
    return this.product?.specs || {};
  }

  getProductReviews() {
    return this.product?.reviews || [];
  }
}
