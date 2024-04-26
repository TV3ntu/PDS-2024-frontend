import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Assignment} from "../../models/assignment";

@Injectable({
  providedIn: 'root'
})
export class AssigmentService {
  assignments: Assignment[]

  constructor() {
    this.assignments = [
      new Assignment("1", "12:45", "13:45","12/12/2005",5, true, 12000),
      new Assignment("2", "12:45", "13:45","12/12/2005",5, true, 12000),
      new Assignment("3", "12:45", "13:45","12/12/2005",5, true, 12000),
      new Assignment("4", "12:45", "13:45","12/12/2005",5, true, 12000),
      new Assignment("5", "12:45", "13:45","12/12/2005",5, true, 12000)
    ]
  }

  getById = (id:string):Observable<Assignment | undefined> => of(this.assignments.find(c => c.id == id))

  getAll = ():Observable<Assignment[]> => of(this.assignments)
}
