import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
        if (err.status === 404) {
            // auto logout if 401 response returned from api
            // console.log('404 occured');
            // alert('Some files are missing, Please Check!!');
            this.router.navigateByUrl('/error');
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
    }));
}
}
