import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  public isAuthenticated(): boolean {
    let jwtHelper: JwtHelperService = new JwtHelperService();
    const token = window.localStorage.getItem('token_name');
    // Check whether the token is expired and return
    // true or false
    return !jwtHelper.isTokenExpired(token);
  }
}
