import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const body = { username, password }
    return this.http.post<any>(this.serverUrl + '/login', body, { headers: { 'Content-Type': 'application/json' } })
  }
}
