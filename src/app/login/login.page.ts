import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  fullName?: string;
  password?: string;
  username?: string;
  email?: string;
  confirmPassword?: string;
  

  constructor(private router: Router) { }

  redirectToLoader(){
    if (this.username === '' && this.password === '') {
      this.router.navigate(['/loader']);
      
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
        alert('User successfully logged in.');
      }, 2000);
    } else {
      alert('TA ERRADO SEU TROUXA!');
    }
  }
}

