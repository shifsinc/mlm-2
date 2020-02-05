import { Injectable } from '@angular/core';
import { AuthenticationStorageService } from './authentication-storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authenticate: AuthenticationStorageService, private router: Router, private http: HttpClient) { }

  canActivate(): boolean | Promise<boolean> {
    if (!this.authenticate.isAuthenticated()) {
      localStorage.clear();
      console.log('You are not authorised to view this page');
      this.redirectLogin();
      return false;
    }
    return true;
  }

  redirectLogin() {
    this.router.navigate(['/sign/login']);
  }
}
