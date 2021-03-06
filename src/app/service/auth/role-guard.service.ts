import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {decode} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = window.localStorage.getItem('Authorization');
    // decode the token to get its payload
    const tokenPayload = decode(token);
    if (
      !this.auth.isAuthenticated() ||
      tokenPayload.role !== expectedRole
    ) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
