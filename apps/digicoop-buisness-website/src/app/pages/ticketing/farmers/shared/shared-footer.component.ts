import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-background-dark text-white pt-16 pb-8 px-6">
      <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <div class="size-10 text-primary">
              <svg class="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold tracking-tight">DIGICOOPS</h2>
          </div>
          <p class="text-white/60 text-sm leading-relaxed">
            Propulser l'agriculture de demain avec des solutions numériques innovantes et solidaires.
          </p>
          <div class="flex gap-4">
            <a href="#" class="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" class="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <h3 class="text-lg font-bold">Solutions</h3>
          <nav class="flex flex-col gap-3">
            <a href="#" class="text-white/60 hover:text-primary text-sm transition-colors">Logiciel Coopérative</a>
            <a href="#" class="text-white/60 hover:text-primary text-sm transition-colors">Application Agriculteur</a>
            <a href="#" class="text-white/60 hover:text-primary text-sm transition-colors">Analyse de Données</a>
            <a href="#" class="text-white/60 hover:text-primary text-sm transition-colors">Objets Connectés</a>
          </nav>
        </div>

        <div class="flex flex-col gap-6">
          <h3 class="text-lg font-bold">Entreprise</h3>
          <nav class="flex flex-col gap-3">
            <a href="#" class="text-white/60 hover:text-primary text-sm transition-colors">À propos</a>
            <a href="#" class="text-white/60 hover:text-primary text-sm transition-colors">Notre Vision</a>
            <a href="#" class="text-white/60 hover:text-primary text-sm transition-colors">Carrières</a>
            <a href="#" class="text-white/60 hover:text-primary text-sm transition-colors">Contact</a>
          </nav>
        </div>

        <div class="flex flex-col gap-6">
          <h3 class="text-lg font-bold">Newsletter</h3>
          <p class="text-white/60 text-sm">Recevez l'actualité de l'AgriTech chaque mois.</p>
          <div class="flex gap-2">
            <input type="email" placeholder="Votre email" class="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary">
            <button class="bg-primary hover:bg-primary-dark p-2 rounded-lg transition-colors">
              <span class="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>

      <div class="max-w-[1200px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
        <p>© 2024 DIGICOOPS. Tous droits réservés.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors">Mentions Légales</a>
          <a href="#" class="hover:text-white transition-colors">Confidentialité</a>
          <a href="#" class="hover:text-white transition-colors">CGU</a>
        </div>
      </div>
    </footer>
  `
})
export class SharedFooterComponent {}
