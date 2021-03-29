import {Component, Input, OnInit, Output} from '@angular/core';
import {Login} from '../model/login.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  @Output() username: String;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(window.localStorage.getItem('user_name') !== null) {
      this.username = window.localStorage.getItem('user_name');
    }
  }

  logout() {
    window.localStorage.clear()
    this.router.navigate(['/login']);
  }

}
