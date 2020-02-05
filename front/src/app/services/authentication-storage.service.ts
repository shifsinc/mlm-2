import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStorageService {

  constructor() { }

  public isAuthenticated(): boolean {
    //return this.getToken() == '1';
    if (!this.getToken()) {
      return false;
    } else {
      return true;
    }
  }

  storeToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("userType");
  }

  removeToken() {
    return localStorage.removeItem("token");
  }
}