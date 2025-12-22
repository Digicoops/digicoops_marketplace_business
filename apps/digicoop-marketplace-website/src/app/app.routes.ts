import { Route } from '@angular/router';
import { CartComponent } from './front-marketplace/cart/cart.component';
import { CategoriesComponent } from './front-marketplace/categories/categories.component';
import { CheckoutComponent } from './front-marketplace/checkout/checkout.component';
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
    path: 'register-success',
    loadComponent: () => import('./front-marketplace/register-success/register-success.component').then(m => m.RegisterSuccessComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./front-marketplace/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'forgot-password-confirmation',
    loadComponent: () => import('./front-marketplace/forgot-password-confirmation/forgot-password-confirmation.component').then(m => m.ForgotPasswordConfirmationComponent)
  },
  {
    path: 'change-password',
    loadComponent: () => import('./front-marketplace/change-password/change-password.component').then(m => m.ChangePasswordComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./back-marketplace/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./back-marketplace/home/dashboard-home.component').then(m => m.DashboardHomeComponent)
      },
      {
        path: 'order/:id',
        loadComponent: () => import('./back-marketplace/order-detail/order-detail.component').then(m => m.OrderDetailComponent)
      },
      {
        path: 'order/:id/invoice',
        loadComponent: () => import('./back-marketplace/order-detail/invoice/invoice.component').then(m => m.InvoiceComponent)
      },
      {
        path: 'invoices',
        loadComponent: () => import('./back-marketplace/invoices/invoice-list.component').then(m => m.InvoiceListComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./back-marketplace/orders/order-list.component').then(m => m.OrderListComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./back-marketplace/profile/profile.component').then(m => m.ProfileComponent)
      }
    ]
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
