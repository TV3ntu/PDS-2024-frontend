import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl = 'http://localhost:8080'
  public currentUser: User | null = null

  constructor(private http: HttpClient) {}

  unsuscribe(){}
  getLoggedUser = () => this.currentUser

  login(email: string, password: string): Observable<User> {
    const body = { email, password }
    return this.http.post<any>(this.serverUrl + '/api/users/login', body)
      .pipe( tap(user => {
        localStorage.setItem('userId', user.id)
        this.currentUser = user
        console.log(user.id)
      }))
  }

  logout() {
    localStorage.removeItem('userId')
    localStorage.clear()
    this.currentUser = null
    console.log('logged out')
  }
  getUserLoggedData(): Observable<User> {
    return this.http.get<User>(this.serverUrl + '/api/users/' + localStorage.getItem('userId'))
  }

  isLogged = (): boolean => {
    console.log(localStorage.getItem('userId'),(localStorage.getItem('userId')==null || localStorage.getItem('userId') == undefined ))
    return localStorage.getItem('userId') != null
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(this.serverUrl + '/api/users/' + id)
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(this.serverUrl + '/api/users/' + user.id, user)
  }
}
