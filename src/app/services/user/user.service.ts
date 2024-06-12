import { Injectable } from '@angular/core'
import {HttpClient} from "@angular/common/http"
import { Observable, tap} from "rxjs"
import {NewUser, User} from "../../models/user"
import { Course } from 'src/app/models/course'
import { Assignment } from 'src/app/models/assignment'
import { Reserve } from 'src/app/models/reserve'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl = 'http://localhost:8080'
  public currentUser: User | null = null

  constructor(private http: HttpClient) {}

  getLoggedUser = () => this.currentUser

  login(email: string, password: string): Observable<User> {
    const body = { email, password }
    return this.http.post<any>(this.serverUrl + '/api/users/login', body)
    .pipe( tap(user => {
      localStorage.setItem('userId', user.id)
      this.currentUser = user
    }))
  }

  logout() {
    localStorage.removeItem('userId')
    localStorage.clear()
    this.currentUser = null
  }

  getUserLoggedData = (): Observable<User> => this.http.get<User>(this.serverUrl + '/api/users/' + localStorage.getItem('userId'))

  isLogged = (): boolean =>  localStorage.getItem('userId') != null

  getById = (id: string): Observable<User> => this.http.get<User>(this.serverUrl + '/api/users/' + id)

  updateUser = (user: User): Observable<User> => this.http.patch<User>(this.serverUrl + '/api/users/' + user.id, user)

  getSuscribedCourses = (id: string): Observable<Reserve[]> => this.http.get<Reserve[]>(this.serverUrl + '/api/users/' + id + '/subscriptions')

  create = (user:NewUser) => this.http.post<User>(this.serverUrl+'/api/users/register',user)

  delete = (user:User) => this.http.delete<User>(this.serverUrl+'/api/user/'+user.id)

  refreshUser = () => this.getUserLoggedData().subscribe(user => this.currentUser = user)

}
