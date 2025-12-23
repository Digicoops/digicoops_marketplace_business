import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  categories = ['Tous les articles', 'Agritech', 'Mises à jour Produit', 'Réglementation', 'Témoignages'];
  activeCategory = signal('Tous les articles');

  selectCategory(category: string) {
    this.activeCategory.set(category);
  }
}
