import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl = 'http://localhost:8080'
  public static currentUser: User | null = null

  constructor(private http: HttpClient) {}

  unsuscribe(){}

  login(email: string, password: string): Observable<User> {
    const body = { email, password }
    return this.http.post<any>(this.serverUrl + '/api/users/login', body)
      .pipe( tap(user => UserService.currentUser = user) )
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.serverUrl}/api/users`, user)
      .pipe( tap(updatedUser => UserService.currentUser = updatedUser) )
  }
}
