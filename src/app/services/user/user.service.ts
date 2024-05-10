import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl = 'http://localhost:8080'
  public currentUser: User | null = null

  constructor(private http: HttpClient) {}

  unsuscribe(){}
  getUser = () => this.currentUser

  login(email: string, password: string): Observable<User> {
    const body = { email, password }
    return this.http.post<any>(this.serverUrl + '/api/users/login', body)
      .pipe( tap(user => this.currentUser = user) )
  }

  logout() {
    this.currentUser = null
  }

  isLogged = () => this.currentUser != null

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(this.serverUrl + '/api/users/' + user.id + '/detail', user)
      .pipe( tap(updatedUser => this.currentUser = updatedUser) )
    // FIXME: El servicio al que le pega funciona bien pero desde Angular tira CORS error
  }
}
