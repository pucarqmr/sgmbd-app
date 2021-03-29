import {Component, OnInit, Output} from '@angular/core';
import {LoginService} from '../service/login.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Login} from '../model/login.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.login(this.loginForm.value);
  }

  login(login: Login) {
    this.loginService.login(login)
      .subscribe(token => {
        window.localStorage.setItem('token_name', token);
        window.localStorage.setItem('user_name', login.username);
        this.router.navigate(['/home']);
      },
        (error) => {
          console.log(error);
          this.router.navigate(['/login']);
      })
  }

}
