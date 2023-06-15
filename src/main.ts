import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app/routes';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { AuthorizationInterceptor } from './app/auth/http-interceptor.service';

if (environment.production) {
  enableProdMode();
}

// Bootstrap using component
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    // provideHttpClient(withInterceptors([AuthorizationInterceptor])),
  ],
}).catch((err) => console.error(err));

//Interceptor
// This function takes as parameter an array of interceptors function and returns an HttpFeature of type interceptor.
// This type of return is very useful because it allows later to call this function in the provideHttpClient function.

// We can also use the old format with the help of withInterceptorsFromDi
// The withInterceptorsFromDi function is intended to add the interceptors registered in the old format:

// { provide: HTTP_INTERCEPTORS,
//   useClass: AuthorizationInterceptorDI
//   multi: true
// }

//Lazy loading of interceptors
// The HTTP_INTERCEPTORS provider token is reset when a lazy loaded module imports another module which imports the HttpClientModule by itself.
// What if i want HTTP_INTERCEPTORS from the parent injector should be used?

// ANgular 15 HttpClientModule can be replaced by
// providers: [provideHttpClient()]

// WIth XSRF token Protection

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideHttpClient(
//       withXsrfConfiguration({
//         cookieName: 'TOKEN', // default is 'XSRF-TOKEN'
//         headerName: 'X-TOKEN', // default is 'X-XSRF-TOKEN'
//       })
//     ),
//   ],
// });

// Disabled XSRF token Protection

// providers: [provideHttpClient(withNoXsrfProtection())];

// withInterceptors;
// withInterceptorsFromDi;
// withXsrfConfiguration;
// withNoXsrfProtection;
// withJsonpSupport;
// withRequestsMadeViaParent;

// Bootstrap using module
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

// Advanced Topics

// Environment injectors
// Directive composition API
// The Angular forwardRef() function creates an indirect reference that Angular can resolve later.
// For example, this situation happens when a standalone parent component imports a standalone child component and vice-versa. You can resolve this circular dependency issue by using the forwardRef function.
