import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  login(username: string, password: string): boolean {
    if (username === 'm' && password === 'm') {
      localStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('username');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('username');
  }
}

