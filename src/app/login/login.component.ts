import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../core/auth.service';
import {TokenStorage} from '../core/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage) {
  }

  username: string;
  password: string;

  login(): void {
    console.log(this.username);
    console.log(this.password);

    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.token.saveToken(data.token);
        this.router.navigate(['user']);
      }
    );
  }

}

