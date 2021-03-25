import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HIDE_LOADER, SHOW_LOADER } from '../shared/store/loader';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(private store: Store<{ isLoading: boolean }>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.dispatch(SHOW_LOADER());

    return next
      .handle(req)
      .pipe(tap(() => this.store.dispatch(HIDE_LOADER())));
  }
}
