import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export function AuthorizationInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  // const loadingService = inject(LoadingService);
  // loadingService.startLoader();
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: 'new function interceptor',
    },
  });
  return next(clonedRequest).pipe(
    finalize(() => console.log('request completed'))
  );
}
