import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if (!this.auth.isAuthenticated()) {
      console.warn('No estas Logueado');
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
