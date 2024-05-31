import { assignments } from './../../mocks/mocks';
import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Assignment} from "../../models/assignment";
import { HttpClient } from '@angular/common/http';
import { path } from '../api.path';


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  path: string = path.local
  assignments: Assignment[]

  constructor(private http: HttpClient) {
    this.assignments = assignments
  }

  getById = (id:string):Observable<Assignment | undefined> => of(this.assignments.find(c => c.id == id))

  getAll = ():Observable<Assignment[]> => of(this.assignments)

  create = (assignment:Assignment) => this.http.post<Assignment>(this.path+'/api/assignments',{assignment})

  delete = (assignment:Assignment) => this.http.delete<Assignment>(this.path+'/api/assignment/'+this.getById(assignment.id))

}
