import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usernameSource = new BehaviorSubject<string | null>(null);
   // watch username for changes so other components can subscribe to it and see changes
  username = this.usernameSource.asObservable(); 

  setUsername(username: string): void {
    // set global username var.  on login it gets a new string value
    this.usernameSource.next(username);
  }

  clearUsername(): void {
    // on logout, clear global username value
    this.usernameSource.next(null);
  }

  // read server api domain from env var
  serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { this.checkAuthStatus(); }

  register(user: any) {
    return this.http.post(`${this.serverUrl}/api/v1/users/register`, user);
  };

  // must pass credentials to hold jwt cookie that comes back from api
  login(user: any) {
    return this.http.post(`${this.serverUrl}/api/v1/users/login`, user, { withCredentials: true });
  };

  // must pass credentials so api can remove jwt cookie
  logout() {
    return this.http.get(`${this.serverUrl}/api/v1/users/logout`, { withCredentials: true });
  }
  
  // call api to check for jwt as client can't read httponly cookie
  checkAuthStatus() {
    return this.http.get(`${this.serverUrl}/api/v1/users/verify`, { withCredentials: true });
  }
}
