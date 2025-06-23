import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  loginFailed = false;

  constructor(private authService: AuthserviceService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/coffeecloud']);
      },
      error: (err) => {
        console.error('Login failed', err);
        this.loginFailed = true;
      }
    });
  }
  closeModal() {
    this.loginFailed = false;
  }
  
}
