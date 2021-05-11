import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly USER_SERVICE_BASE_URL = '/assets/templates';

  constructor(private readonly http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    const url = `${this.USER_SERVICE_BASE_URL}/user.json`;
    return this.http.get<User[]>(url);
  }

  public getUserData(userName: string, password: string): Observable<User> {
    return this.getAllUsers().pipe(
      map(items =>
        items.filter(item => item.userName === userName && item.password === password)[0]));
  }
}
