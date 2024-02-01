// src/app/counter/counter.component.ts

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as appActions from '../state/app.actions';


@Component({
  selector: 'app-counter',
  standalone:true,
  template: `
    <div>
      <p>Counter: {{ counter.subscribe.call  }}</p>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset</button>
      <button (click)="setCounter(10)">Set to 10</button>
    </div>
  `,
})
export class CounterComponent {
  // Change the selector to match your state structure
  counter = this.store.select((state) => state.counter);

  constructor(private store: Store<AppState>) {}

  increment() {
    this.store.dispatch(appActions.increment());
  }

  decrement() {
    this.store.dispatch(appActions.decrement());
  }

  reset() {
    this.store.dispatch(appActions.reset());
  }

  setCounter(value: number) {
    this.store.dispatch(appActions.set({ value }));
  }
}