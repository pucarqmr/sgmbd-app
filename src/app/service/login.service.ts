import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {Login} from '../model/login.model';
import {LoginResponse} from '../model/login_response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    return this.http.post<any>(environment.login,
      {username: login.username, password: login.password },
      { headers: headers, observe: 'response' })
      .pipe(
        map((response) => this.token = response.headers.get('Authorization'))
      );
  }

}
