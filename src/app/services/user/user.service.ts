import { Injectable } from '@angular/core'
import {HttpClient} from "@angular/common/http"
import { Observable, tap} from "rxjs"
import {NewUser, User} from "../../models/user"
import { Course } from 'src/app/models/course'

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
      console.log(user.id)
    }))
  }

  logout() {
    localStorage.removeItem('userId')
    localStorage.clear()
    this.currentUser = null
    console.log('logged out')
  }

  getUserLoggedData = (): Observable<User> => this.http.get<User>(this.serverUrl + '/api/users/' + localStorage.getItem('userId'))

  isLogged = (): boolean => {
    console.log(localStorage.getItem('userId'),(localStorage.getItem('userId')==null || localStorage.getItem('userId') == undefined ))
    return localStorage.getItem('userId') != null
  }

  getById = (id: string): Observable<User> => this.http.get<User>(this.serverUrl + '/api/users/' + id)

  //subscribe = (user:User, assignment:Assignment): Observable<User> => this.http.post<User>(this.serverUrl + '/api/users/subscribe', {user, assignment})

  //unsuscribe = (user:User, assignment:Assignment): Observable<User> => this.http.post<User>(this.serverUrl + '/api/users/unsubscribe', {user, assignment})

  updateUser = (user: User): Observable<User> => this.http.patch<User>(this.serverUrl + '/api/users/' + user.id, user)

  getSuscribedCourses = (id: string): Observable<Course> => this.http.get<Course>(this.serverUrl + '/api/users/' + id + '/courses')

  create = (user:NewUser) => this.http.post<User>(this.serverUrl+'/api/users/register',user)

  delete = (user:User) => this.http.delete<User>(this.serverUrl+'/api/user/'+user.id)

}
