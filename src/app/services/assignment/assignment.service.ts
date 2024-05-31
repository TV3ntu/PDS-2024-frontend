import { Injectable } from '@angular/core'
import {Observable } from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor() {  }

  //getById = (id:string):Observable<Assignment | undefined> => of(this.assignments.find(c => c.id == id))

  //getAll = ():Observable<Assignment[]> => of(this.assignments)
}
