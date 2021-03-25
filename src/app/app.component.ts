import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ILoaderState } from './shared/store/loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-state';

  private loader$: Observable<boolean>;
  loader = false;

  constructor(private store: Store<{ isLoading: boolean }>) {}

  ngAfterViewInit(): void {
    this.subInLoaderStore();
  }

  private subInLoaderStore(): void {
    this.loader$ = this.store.select('isLoading');

    this.loader$
      .pipe(delay(0))
      .subscribe({
        next: result => this.loader = result,
        error: () => {}
      });
  }


}
