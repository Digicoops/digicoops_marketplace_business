import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Event, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  showGlobalHeader = signal(true);

  ngOnInit() {
    // Initial check
    this.checkVisibility(this.router.url);

    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkVisibility(event.urlAfterRedirects);
    });
  }

  private checkVisibility(url: string) {
    const hiddenRoutes = ['/login', '/register', '/forgot-password', '/forgot-password-confirmation', '/change-password', '/dashboard'];

    const currentUrl = url.split('?')[0];
    const isHiddenRoute = hiddenRoutes.includes(currentUrl) || currentUrl.startsWith('/dashboard');
    this.showGlobalHeader.set(!isHiddenRoute);
  }
}