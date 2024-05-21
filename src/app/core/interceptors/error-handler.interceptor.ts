import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMesage = '';
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMesage = `An error occurred: ${error.error}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        errorMesage = `Backend returned code ${error.status}, body was: ${error.message}`;
      }
      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later: ' + errorMesage));
    })
  );
};
