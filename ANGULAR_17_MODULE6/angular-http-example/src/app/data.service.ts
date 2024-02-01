// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com'; // Using a sample JSONPlaceholder API

  constructor(private http: HttpClient) {}

  // Example GET request
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/1`);
  }

  // Example POST request with data
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, data);
  }
}
