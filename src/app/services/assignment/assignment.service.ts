import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {Observable } from "rxjs"
import { Assignment } from 'src/app/models/assignment'
import { path } from '../api.path'
import { User } from 'src/app/models/user'
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  path = 'http://localhost:8080/api/assignments'

  constructor(private http:HttpClient) {  }

  //getById = (id:string):Observable<Assignment | undefined> => of(this.assignments.find(c => c.id == id))

  //getAll = ():Observable<Assignment[]> => of(this.assignments)

  create = (assignment:Assignment) => this.http.post<Assignment>(this.path + '/create',{assignment})

  delete = (assignment:Assignment) => this.http.delete<Assignment>(this.path+'/api/assignment/'+assignment.id)

  subscribeAssigment = (user:User, assignment:Assignment): Observable<any> =>  this.http.post<any>(this.path + '/subscribe', {idUser:user.id, idAssignment: assignment.id})

  unsuscribeAssignment = (user:User, assignment:Assignment): Observable<any> => this.http.post<any>(this.path + '/unsubscribe', {idUser:user.id, idAssignment: assignment.id})

}
