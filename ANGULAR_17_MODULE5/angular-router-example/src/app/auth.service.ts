import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    // Add your authentication logic here
    const isAuthenticated = true; // For example, set to true for simplicity
    return isAuthenticated;
  }
}
