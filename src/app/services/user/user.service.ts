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
    return this.http.post<any>(this.serverUrl + '/api/users/login', body , { withCredentials: true })
    .pipe( tap(user => {
      localStorage.setItem('userId', user.id)
      this.currentUser = user
    }))
  }

  logout():Observable<any> {
    localStorage.removeItem('userId')
    localStorage.clear()
    this.currentUser = null
    return this.http.post<any>(this.serverUrl + '/api/users/logout',{}, { withCredentials: true })
  }

  getUserLoggedData = (): Observable<User> => this.http.get<User>(this.serverUrl + '/api/users/' + localStorage.getItem('userId'), { withCredentials: true })

  isLogged = (): boolean =>  localStorage.getItem('userId') != null

  getById = (id: string): Observable<User> => this.http.get<User>(this.serverUrl + '/api/users/' + id, { withCredentials: true })

  updateUser = (user: User): Observable<User> => {
    const userToUpdate = {
      name: user.name,
      lastName:user.lastName,
      email: user.email,
      image:user.image,
      isAdmin:user.isAdmin,
      credits: user.credits,
      id: user.id,
      nextClass: user.nextClass?.assignmentId,
    }
    return this.http.patch<User>(this.serverUrl + '/api/users/' + user.id, userToUpdate, { withCredentials: true })}

  getSuscribedCourses = (id: string): Observable<Reserve[]> => this.http.get<Reserve[]>(this.serverUrl + '/api/users/' + id + '/subscriptions', { withCredentials: true })

  create = (user:NewUser) => this.http.post<User>(this.serverUrl+'/api/users/register',user, { withCredentials: true })

  delete = (user:User) => this.http.delete<User>(this.serverUrl+'/api/users/'+user.id, { withCredentials: true })

  refreshUser = () => this.getUserLoggedData().subscribe(user => this.currentUser = user)

}
