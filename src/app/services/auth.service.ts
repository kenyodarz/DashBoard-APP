import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ILogin } from '../models/interfaces/ilogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLogged: boolean;

  constructor(private afauth: AngularFireAuth, private router: Router) {
    this.isLogged = false;
    this.afauth.authState.subscribe((user) => {
      if (user) this.isLogged = true;
      this.router.navigate(['/resume']);
    });
  }

  login(infoLogin: ILogin) {
    return this.afauth.auth.signInWithEmailAndPassword(
      infoLogin.email,
      infoLogin.password
    );
  }

  logout() {
    this.afauth.auth.signOut();
    // localStorage.removeItem('logged');
    this.isLogged = false;
    this.router.navigate(['/login']);
  }

  public set isLogged(value: boolean) {
    this._isLogged = value;
  }

  isAuthenticated() {
    return this.isLogged;
    // return localStorage.getItem('logged');
  }
}
