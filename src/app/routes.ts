import {
  provideHttpClient,
  withRequestsMadeViaParent,
  withInterceptors,
} from '@angular/common/http';
import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AuthorizationInterceptor } from './auth/http-interceptor.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'products',
    loadChildren: () => import('./product-route').then((m) => m.ADMIN_ROUTES),
    // RouterModule.forChild no need
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
];
