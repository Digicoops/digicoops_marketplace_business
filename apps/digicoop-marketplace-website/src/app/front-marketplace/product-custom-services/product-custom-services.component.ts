import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyService } from '../../services/currency.service';
import { ProductRecommendationsComponent } from '../../shared/product-recommendations/product-recommendations.component';

@Component({
  selector: 'app-product-custom-services',
  imports: [RouterLink, CommonModule, FormsModule, ProductRecommendationsComponent],
  templateUrl: './product-custom-services.component.html',
  styleUrls: ['./product-custom-services.component.scss']
})
export class ProductCustomServicesComponent implements OnInit {
  route = inject(ActivatedRoute);
  currencyService = inject(CurrencyService);
  
  quantity = signal(1);
  selectedImage: string = '';
  activeTab: string = 'description';

  // Mock service data - in real app this would come from a service
  service = {
    id: '1',
    name: 'Analyse de Sols par Drone - Pack Gold',
    category: 'Services',
    price: 450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8oykIKFAtUCog7vAplb6Vu1Qh4DpvA4L6qFUIw5S_-03Sw4xoFpsCTagdeWdiGnsav5FLMChXxU7Ev0yrS98BxAmiiv8FVTu5qCqA8RS2IP3KjkrUnSrDrj9061m_wtntENsEJOjbR0Buc9XIyKMswhTkHSb1EnxB5HN5gYlryCKZflYxb9xfvBtC1k1EYEbxvk9L9izfuluydkQHyqtVr_KbP1f7LZjoLfvFfmJJFBQBP_0CkjMelnZbbWykNyCfJ-5fDPTSSAU',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8oykIKFAtUCog7vAplb6Vu1Qh4DpvA4L6qFUIw5S_-03Sw4xoFpsCTagdeWdiGnsav5FLMChXxU7Ev0yrS98BxAmiiv8FVTu5qCqA8RS2IP3KjkrUnSrDrj9061m_wtntENsEJOjbR0Buc9XIyKMswhTkHSb1EnxB5HN5gYlryCKZflYxb9xfvBtC1k1EYEbxvk9L9izfuluydkQHyqtVr_KbP1f7LZjoLfvFfmJJFBQBP_0CkjMelnZbbWykNyCfJ-5fDPTSSAU',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqywsXaWy5zic37glLvocxYlw1MqZg6cuKQSnCtQoGAVP9dBNr_jbkF3bzDr75Uj-JGrEMAwe8belzzTGaoSsN6uIkpjefTuHhx_Of5QQylJOlzlhRTzWL6b9xzmVetRO7tttO_wX_F1RPQ8lr-fLJA5yk6K95K3bFPX8x-ZCczNkLrX0D8VaZ2xVhyH4fTFoba6K2-Vv_5c-3W0Bcbet8DD9RzU2obBrCZvHzzkqOzgcUJwpbr7gQG_oCjzjO7dZPLvnn9nvK-CM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC15CLOeSPUpjjqqBCRiIyf92Npx0rQI1ctTdzJIe8M-YigHUM0vRHoGm71DqBNRLpapVQLoQpgtwep8SRj5ewvjVmpFvek7eTuia_GGwXl3cAEUlDO7AtBpjetzbsli-h99Z4yb7rdL9mdgSac8kwmYPdNqrZdsP1kC81zc8PH_pZyvFNoJ575PFdkhyELbqwKfdnxP4r1FTvWWa-IZ2r5vZw75y7VXOPFtOA0zrW11_NSLwvgr42eHro_M8Z-_23dJGmi9t6O1_g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDZns_XludvH8XU3SiMJbXqEJy2q3G54WknnXnYGQgIT1KU5VpFiM2_YJ29y_nSd0CnfRBUv-AlduDlVQpEiqouyEqt_S4WIx43TORfTCk55EJu7AzYciRWKCv2Jhh5ay448j24prLlc7W_MKr76YQnJUBMvZnBCuKqV4hdOzb7LMhUI_IRG8qfzvQWxXmHTJfehDGoQS4fpRy3hlCqOQNW4MOXdSR4xny1NjIOD8VuSjFZXyuDgMuUsu6OAlfAIMwcuYQZKBGdTo'
    ],
    rating: 4.9,
    reviews: 124,
    isPopular: true,
    description: "Le Pack Gold d'analyse de sols par drone utilise la technologie multispectrale la plus avancée pour cartographier la santé de vos parcelles. En identifiant précisément les zones de stress hydrique, les carences en nutriments et les foyers de maladies, nous vous permettons d'agir de manière ciblée.",
    provider: {
      name: 'AgriTech Solutions',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo7-VD06QX6xSv7HLGgi-18s6Ylg1CmxDYo39yzZA85nU6OgwEFzO2d1QYlFWQPfkgem37ct7DB3tvUD3ofL6tMIe_6EgF6-qpQZ5mONSeevUlESRe88uJFJFCrGOLowQSJgsPoD-IB-9yqw3WHk8dOsh7xeQG8d2h-MRz3JVfBXVNkTd-JzurAoROpaHNPq8YgigN7d_vYDJjXsVOndtLbK31noYtilVde6Jp6SgQpmVbsHnQZHFPCqoy4m7rWewcl4LwU2aY-tk',
      location: 'Bordeaux, FR',
      responseTime: 'Réponse < 2h',
      experience: 'Expert en agriculture de précision depuis 2015. Plus de 5000ha analysés dans la région.',
      isVerified: true
    },
    features: [
      'Cartographie NDVI haute résolution (5cm/px)',
      'Analyse de la teneur en azote et chlorophylle',
      'Rapport agronomique détaillé avec préconisations'
    ],
    conditions: [
      'Déplacement inclus dans un rayon de 50km',
      'Rapport PDF remis sous 48h après vol',
      'Météo : report sans frais si pluie/vent > 30km/h'
    ]
  };

  // Form data
  surface = signal(10);
  selectedDate = signal('Lun, 14 Oct');

  // Computed signals pour les prix convertis - réagissent au changement de devise
  convertedPrice = computed(() => {
    // Accède au signal currency pour déclencher la réactivité
    this.currencyService.currency();
    return this.currencyService.formatPrice(this.service.price);
  });

  convertedTotalPrice = computed(() => {
    // Accède au signal currency pour déclencher la réactivité
    this.currencyService.currency();
    return this.currencyService.formatPrice(this.getTotalPrice());
  });

  ngOnInit() {
    this.selectedImage = this.service.image;
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

  getTotalPrice(): number {
    return this.service.price * this.surface();
  }

  getStars(): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(this.service.rating) ? 1 : 0);
  }
}
