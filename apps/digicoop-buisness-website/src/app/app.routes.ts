import { Routes } from '@angular/router';
import { LoginComponent } from './pages/ticketing/auth/login/login.component';
import { ContactFormComponent } from './pages/ticketing/farmers/pages/contact-form/contact-form.component';
import { TicketDashboardComponent } from './pages/ticketing/farmers/pages/ticket-dashboard/ticket-dashboard.component';
import { TicketDetailComponent } from './pages/ticketing/farmers/pages/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './pages/ticketing/farmers/pages/ticket-list/ticket-list.component';
import { AboutComponent } from './pages/website/about/about.component';
import { BlogComponent } from './pages/website/blog/blog.component';
import { ContactComponent } from './pages/website/contact/contact.component';
import { FaqComponent } from './pages/website/faq/faq.component';
import { HomeComponent } from './pages/website/home/home.component';
import { ServicesComponent } from './pages/website/services/services.component';
import { SupportComponent } from './pages/website/support/support.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, title: 'DIGICOOPS - Accueil' },
  { path: 'services', component: ServicesComponent, title: 'Nos Services - DIGICOOPS' },
  { path: 'faq', component: FaqComponent, title: 'FAQ - DIGICOOPS' },
  { path: 'about', component: AboutComponent, title: 'À propos - DIGICOOPS' },
  { path: 'blog', component: BlogComponent, title: 'Blog - DIGICOOPS' },
  { path: 'support', component: SupportComponent, title: 'Support - DIGICOOPS' },
  { path: 'contact', component: ContactComponent, title: 'Contact - DIGICOOPS' },
  {
    path: 'tickets',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: TicketDashboardComponent, title: 'Dashboard - DIGICOOPS' },
      { path: 'list', component: TicketListComponent, title: 'Tickets - DIGICOOPS' },
      { path: 'detail/:id', component: TicketDetailComponent, title: 'Détail Ticket - DIGICOOPS' },
      { path: 'new', component: ContactFormComponent, title: 'Nouveau Ticket - DIGICOOPS' },
      {
        path: 'auth',
        children: [
          { path: 'login', component: LoginComponent, title: 'Connexion - DIGICOOPS' },
        ]
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
