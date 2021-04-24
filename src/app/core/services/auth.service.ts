import { Injectable } from '@angular/core';

const USERNAME_KEY = 'AuthUserName';
const USERID_KEY = 'AuthUserId';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public signOut() {
    localStorage.clear();
  }

  public saveUsername(username: string) {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): any {
    return localStorage.getItem(USERNAME_KEY);
  }

  public getUserId(): any {
    return localStorage.getItem(USERID_KEY);
  }

  public saveUserId(username: string) {
    localStorage.removeItem(USERID_KEY);
    localStorage.setItem(USERID_KEY, username);
  }

  public isAuthenticated(): boolean {
    if (this.getUsername() !== null) {
      return true;
    }
    return false;
  }
}
