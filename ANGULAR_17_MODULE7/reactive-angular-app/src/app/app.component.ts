// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone:true,
  template: `
    <h1>Reactive Programming with Angular</h1>
    <button (click)="start()">Start Observable</button>
    <div NgIf="data$ | async as data">
      <p>Data: {{ data$ }}</p>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  data$!: Observable<number>;
  data: number | undefined; // Declare the data property


  ngOnInit() {
    // Example 1: Creating a simple observable with interval
    this.data$ = interval(1000).pipe(take(5));
  }

  // Example 2: Handling asynchronous operations with observables
  start() {
    const customObservable = new Observable<number>(observer => {
      let count = 0;
      const intervalId = setInterval(() => {
        observer.next(count++);
        if (count === 5) {
          observer.complete();
          clearInterval(intervalId);
        }
      }, 1000);
    });

    customObservable.subscribe({
      next: value => console.log('Custom Observable:', value),
      complete: () => console.log('Custom Observable: Completed')
    });
  }
}
