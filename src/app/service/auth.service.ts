import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;

  constructor() {}

  login(email: string, password: string): boolean {
    if (email === 'admin@gmail.com' && password === '12345') {
      this.isAuth = true;
      return true;
    } else {
      return false;
    }
  }



  isLoggedIn(): boolean {
    return this.isAuth;
  }
}
