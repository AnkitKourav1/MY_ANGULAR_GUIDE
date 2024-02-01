import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<string>(''); // BehaviorSubject initializes with an empty string
  data$: Observable<string> = this.dataSubject.asObservable();

  getSharedData(): string {
    console.log(this.dataSubject.value);
    return this.dataSubject.value;
  }

  setSharedData(data: string): void {
    this.dataSubject.next(data);
  }
}
