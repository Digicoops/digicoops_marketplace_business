import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService, Product } from '../../services/data.service';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-shop',
  imports: [RouterLink, CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  dataService = inject(DataService);
  allProducts: Product[] = this.dataService.getProducts();
  filteredProducts: Product[] = [];
  
  categories = [
    { name: 'Tous les produits', count: 145 },
    { name: 'Produits agricoles', count: 42 },
    { name: 'Services agricoles', count: 38 },
    { name: 'Matériel agricole', count: 65 }
  ];

  // Filtres
  selectedMainCategories: Set<string> = new Set();
  selectedSubCategories: Set<string> = new Set();
  subCategories: string[] = [];
  priceMin: number = 0;
  priceMax: number = 5000;
  currentPriceValue: number = 5000;
  inStockOnly: boolean = false;
  sortBy: string = 'pertinence';

  // Pagination
  currentPage = 1;
  itemsPerPage = 9;
  
  get totalItems(): number {
    return this.filteredProducts.length;
  }
  
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  ngOnInit(): void {
    // Initialiser le prix max basé sur le produit le plus cher
    this.priceMax = Math.max(...this.allProducts.map(p => p.price));
    this.currentPriceValue = this.priceMax;
    
    // Charger les sous-catégories
    this.subCategories = this.dataService.getSubCategories();
    
    // Appliquer les filtres initiaux
    this.applyFilters();
  }

  get products(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredProducts.slice(start, end);
  }

  get displayedRange(): string {
    const start = (this.currentPage - 1) * this.itemsPerPage + 1;
    const end = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
    return `${start}-${end}`;
  }

  get pages(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Méthodes de filtrage
  
  /**
   * Convertit le nom de catégorie affiché en valeur mainCategory
   */
  mapCategoryNameToValue(displayName: string): string {
    const mapping: { [key: string]: string } = {
      'Produits agricoles': 'produit agricole',
      'Services agricoles': 'service agricole',
      'Matériel agricole': 'materiel agricole'
    };
    return mapping[displayName] || displayName;
  }

  toggleMainCategory(category: string): void {
    if (category === 'Tous les produits') {
      this.selectedMainCategories.clear();
    } else {
      const categoryValue = this.mapCategoryNameToValue(category);
      if (this.selectedMainCategories.has(categoryValue)) {
        this.selectedMainCategories.delete(categoryValue);
      } else {
        this.selectedMainCategories.add(categoryValue);
      }
    }
    this.applyFilters();
  }

  toggleSubCategory(subCategory: string): void {
    if (this.selectedSubCategories.has(subCategory)) {
      this.selectedSubCategories.delete(subCategory);
    } else {
      this.selectedSubCategories.add(subCategory);
    }
    this.applyFilters();
  }

  onPriceChange(event: any): void {
    this.currentPriceValue = Number(event.target.value);
    this.applyFilters();
  }

  toggleInStockOnly(): void {
    this.applyFilters();
  }

  onSortChange(event: any): void {
    this.sortBy = event.target.value;
    this.applyFilters();
  }

  isCategorySelected(category: string): boolean {
    if (category === 'Tous les produits') {
      return this.selectedMainCategories.size === 0;
    }
    const categoryValue = this.mapCategoryNameToValue(category);
    return this.selectedMainCategories.has(categoryValue);
  }

  isSubCategorySelected(subCategory: string): boolean {
    return this.selectedSubCategories.has(subCategory);
  }

  applyFilters(): void {
    let filtered = [...this.allProducts];

    // Filtre par catégorie principale
    if (this.selectedMainCategories.size > 0) {
      filtered = filtered.filter(p => this.selectedMainCategories.has(p.mainCategory));
    }

    // Filtre par sous-catégorie
    if (this.selectedSubCategories.size > 0) {
      filtered = filtered.filter(p => this.selectedSubCategories.has(p.category));
    }

    // Filtre par prix
    filtered = filtered.filter(p => p.price <= this.currentPriceValue);

    // Filtre par stock
    if (this.inStockOnly) {
      filtered = filtered.filter(p => p.stock === 'En stock');
    }

    // Appliquer le tri
    filtered = this.applySorting(filtered);

    this.filteredProducts = filtered;
    
    // Réinitialiser à la page 1 quand les filtres changent
    this.currentPage = 1;
  }

  applySorting(products: Product[]): Product[] {
    const sorted = [...products];

    switch (this.sortBy) {
      case 'prix-croissant':
        return sorted.sort((a, b) => a.price - b.price);
      
      case 'prix-decroissant':
        return sorted.sort((a, b) => b.price - a.price);
      
      case 'nouveautes':
        return sorted.sort((a, b) => {
          // Produits "new" en premier
          if (a.isNew && !b.isNew) return -1;
          if (!a.isNew && b.isNew) return 1;
          return 0;
        });
      
      case 'meilleures-ventes':
        // Pour l'instant, tri par rating puis par prix
        return sorted.sort((a, b) => {
          const ratingA = a.rating || 0;
          const ratingB = b.rating || 0;
          if (ratingA !== ratingB) {
            return ratingB - ratingA;
          }
          return b.price - a.price;
        });
      
      case 'pertinence':
      default:
        return sorted; // Ordre par défaut
    }
  }

}
