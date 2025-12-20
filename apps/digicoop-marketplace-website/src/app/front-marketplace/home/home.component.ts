import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  dataService = inject(DataService);
  products = this.dataService.getProducts();
  
  categories = [
    { name: 'Semences & Plants', icon: 'grass' },
    { name: 'Engrais & Fertilisants', icon: 'compost' },
    { name: 'Matériel Agricole', icon: 'agriculture' },
    { name: 'Phytosanitaire', icon: 'pest_control' },
    { name: 'Services AgTech', icon: 'smart_toy' }
  ];
}
