import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {Observable } from "rxjs"
import { Assignment } from 'src/app/models/assignment'
import { path } from '../api.path'
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  path: string = path.local + '/api/courses'

  constructor(private http:HttpClient) {  }

  //getById = (id:string):Observable<Assignment | undefined> => of(this.assignments.find(c => c.id == id))

  //getAll = ():Observable<Assignment[]> => of(this.assignments)

  create = (assignment:Assignment) => this.http.post<Assignment>(this.path+'/api/assignments',{assignment})

  delete = (assignment:Assignment) => this.http.delete<Assignment>(this.path+'/api/assignment/'+assignment.id)

}
