import {
  provideHttpClient,
  withRequestsMadeViaParent,
  withInterceptors,
} from '@angular/common/http';
import { Routes } from '@angular/router';
import { AuthorizationInterceptor } from './auth/http-interceptor.service';
import { ProductsComponent } from './pages/products/products.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    providers: [
      provideHttpClient(
        withRequestsMadeViaParent(),
        withInterceptors([AuthorizationInterceptor])
      ),
    ],
    children: [{ path: '', component: ProductsComponent }],
  },
];
