import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { DataService, Product } from '../../core/services/data.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-recommendations',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-recommendations.component.html',
  styleUrls: ['./product-recommendations.component.scss']
})
export class ProductRecommendationsComponent implements OnInit {
  @Input() currentProductId!: string;
  @Input() category!: string;
  @Input() title: string = 'Vous pourriez avoir besoin de';
  @Input() maxProducts: number = 4;

  dataService = inject(DataService);
  recommendedProducts: Product[] = [];

  ngOnInit() {
    this.loadRecommendations();
  }

  loadRecommendations() {
    const allProducts = this.dataService.getProducts();
    
    // Filtrer les produits de la même catégorie, excluant le produit actuel
    this.recommendedProducts = allProducts
      .filter(p => 
        p.category === this.category && 
        p.id !== this.currentProductId
      )
      .slice(0, this.maxProducts);
  }
}
