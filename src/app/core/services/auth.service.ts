import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { logindetails } from '../models/logindetails.model';

const USERNAME_KEY = 'AuthUserName';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoginSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor() { }

  public signOut() {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.clear();
    this.isLoginSubject.next(false);
  }

  public saveUsername(username: string) {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): any {
    return localStorage.getItem(USERNAME_KEY);
  }

  public isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  public login(user: logindetails): Observable<string> {
    this.saveUsername(user.username);
    this.isLoginSubject.next(true);
    return of("User Logged in Successfully.");
  }

  public isAuthenticated(): boolean {
    if (this.getUsername() !== null) {
      return true;
    }
    return false;
  }
}
