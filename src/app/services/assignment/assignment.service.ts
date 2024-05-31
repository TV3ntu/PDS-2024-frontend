import { assignments } from './../../mocks/mocks';
import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Assignment} from "../../models/assignment";
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  assignments: Assignment[]

  constructor() {
    this.assignments = assignments
  }

  getById = (id:string):Observable<Assignment | undefined> => of(this.assignments.find(c => c.id == id))

  getAll = ():Observable<Assignment[]> => of(this.assignments)

  create = (quota:number,price:number) => new Assignment("100","09:00","10:00","lunes",quota,false,price)

  delete = {}
}
