import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Event, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <!-- Header -->
      <header *ngIf="showGlobalHeader()" class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-[#28392f] bg-[#102217]/95 backdrop-blur-md px-6 py-3 lg:px-10">
        <div class="flex items-center gap-8">
          <a routerLink="/" class="flex items-center gap-4 text-white group cursor-pointer">
            <div class="size-8 text-primary group-hover:scale-110 transition-transform">
              <span class="material-symbols-outlined text-4xl">agriculture</span>
            </div>
            <h2 class="text-white text-xl font-bold tracking-tight">DIGICOOPS</h2>
          </a>
          <!-- Desktop Search -->
          <div class="hidden lg:flex flex-col min-w-40 h-10 w-[300px] xl:w-[400px]">
            <div class="flex w-full flex-1 items-stretch rounded-full h-full bg-[#28392f] border border-[#28392f] focus-within:border-primary transition-colors">
              <div class="text-[#9db9a8] flex items-center justify-center pl-4 rounded-l-full">
                <span class="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input class="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full bg-transparent text-white focus:outline-0 focus:ring-0 border-none h-full placeholder:text-[#9db9a8] px-4 text-sm" placeholder="Rechercher..." />
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4 lg:gap-8">
          <nav class="hidden lg:flex items-center gap-6">
            <a routerLink="/" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: true}" class="text-white hover:text-primary transition-colors text-sm font-medium">Accueil</a>
            <a routerLink="/shop" routerLinkActive="text-primary" class="text-white hover:text-primary transition-colors text-sm font-medium">Boutique</a>
            <a routerLink="/support" routerLinkActive="text-primary" class="text-white hover:text-primary transition-colors text-sm font-medium">Services</a>
            <a routerLink="/dashboard" routerLinkActive="text-primary" class="text-white hover:text-primary transition-colors text-sm font-medium">Mon Compte</a>
          </nav>
          <div class="flex gap-3">
            <a routerLink="/login" class="flex items-center justify-center size-10 rounded-full bg-[#28392f] hover:bg-secondary hover:text-primary text-white transition-all cursor-pointer">
              <span class="material-symbols-outlined text-[20px]">person</span>
            </a>
            <a routerLink="/cart" class="relative flex items-center justify-center size-10 rounded-full bg-[#28392f] hover:bg-secondary hover:text-primary text-white transition-all cursor-pointer">
              <span class="material-symbols-outlined text-[20px]">shopping_cart</span>
              <span class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-black">3</span>
            </a>
            <button class="lg:hidden flex items-center justify-center size-10 rounded-full bg-[#28392f] text-white">
              <span class="material-symbols-outlined text-[20px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer *ngIf="showGlobalHeader()" class="bg-[#0b100d] border-t border-[#28392f] text-white pt-12 pb-8 px-4 mt-auto">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-3">
                <div class="size-8 text-primary">
                  <span class="material-symbols-outlined text-3xl">agriculture</span>
                </div>
                <h2 class="text-xl font-bold tracking-tight">DIGICOOPS</h2>
              </div>
              <p class="text-gray-400 text-sm leading-relaxed">
                La plateforme de référence pour l'agriculture connectée. Matériels, semences, services et innovation.
              </p>
            </div>
            <div>
              <h4 class="text-white font-bold mb-4">Boutique</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li><a class="hover:text-primary transition-colors" href="#">Produits</a></li>
                <li><a class="hover:text-primary transition-colors" href="#">Matériels</a></li>
                <li><a class="hover:text-primary transition-colors" href="#">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-bold mb-4">Aide</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li><a class="hover:text-primary transition-colors" routerLink="/support">Centre d'aide</a></li>
                <li><a class="hover:text-primary transition-colors" href="#">Livraison</a></li>
                <li><a class="hover:text-primary transition-colors" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-bold mb-4">Newsletter</h4>
              <div class="flex flex-col gap-3">
                <input type="email" placeholder="Votre email" class="w-full bg-[#1a2c20] border-none rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary text-sm" />
                <button class="w-full bg-primary hover:bg-primary-hover text-[#102217] font-bold py-2.5 rounded-lg transition-colors text-sm">S'abonner</button>
              </div>
            </div>
          </div>
          <div class="border-t border-[#28392f] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© 2024 DIGICOOPS. Tous droits réservés.</p>
            <div class="flex gap-4">
              <a href="#" class="hover:text-white">Confidentialité</a>
              <a href="#" class="hover:text-white">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  showGlobalHeader = signal(true);

  ngOnInit() {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showGlobalHeader.set(!event.urlAfterRedirects.includes('/login') && !event.urlAfterRedirects.includes('/register'));
    });
  }
}