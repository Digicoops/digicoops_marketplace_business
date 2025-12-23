import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './faq.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  categories = ['Général', 'Intégration Technique', 'Abonnement', 'Sécurité des données'];
  activeCategory = signal('Général');

  selectCategory(category: string) {
    this.activeCategory.set(category);
  }
}
