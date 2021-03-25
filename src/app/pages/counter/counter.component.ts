import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { decrement, increment, reset } from './store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnDestroy {
  count$: Observable<number>;
  private countSubscription: Subscription;

  count = 0;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');

    this.countSubscription = this
      .count$
      .subscribe(result => this.count = result);
  }

  increment(): void {
    this
      .store
      .dispatch(increment());
  }

  decrement(): void {
    this
      .store
      .dispatch(decrement());
  }

  reset(): void {
    this
      .store
      .dispatch(reset());
  }

  ngOnDestroy(): void {
    this
      .countSubscription
      .unsubscribe();
  }
}
