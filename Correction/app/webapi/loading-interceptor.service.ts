import { Injectable } from '@angular/core';
import { SpinnerService } from '../spinner.service';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private readonly spinner: SpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.spinner.displaySpinner();
      return next.handle(req)
          .pipe(finalize(() => {
              this.spinner.hideSpinner();
          }));
  }
}
