import { Route } from '@angular/router';
import { CartComponent } from './front-marketplace/cart/cart.component';
import { CategoriesComponent } from './front-marketplace/categories/categories.component';
import { CheckoutComponent } from './front-marketplace/checkout/checkout.component';
import { DashboardComponent } from './front-marketplace/dashboard/dashboard.component';
import { HomeComponent } from './front-marketplace/home/home.component';
import { LoginComponent } from './front-marketplace/login/login.component';
import { ProductAgricolDetailComponent } from './front-marketplace/product-agricol-detail/product-agricol-detail.component';
import { ProductCustomServicesComponent } from './front-marketplace/product-custom-services/product-custom-services.component';
import { ShopComponent } from './front-marketplace/shop/shop.component';


export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'boutique',
    children: [
      {
        path: '',
        component: CategoriesComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      }
    ]
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'product/:id',
    component: ProductAgricolDetailComponent
  },
  {
    path: 'product-agricol-detail/:id',
    component: ProductAgricolDetailComponent
  },
  {
    path: 'product-custom-services/:id',
    component: ProductCustomServicesComponent
  },
  {
    path: 'service/:id',
    component: ProductCustomServicesComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    loadComponent: () => import('./front-marketplace/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'faq',
    loadComponent: () => import('./front-marketplace/faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./front-marketplace/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./front-marketplace/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
