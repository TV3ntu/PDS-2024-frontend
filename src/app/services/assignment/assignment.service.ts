import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {Observable } from "rxjs"
import { Assignment } from 'src/app/models/assignment'
import { path } from '../api.path'
import {BasicUser, User} from 'src/app/models/user'
import environment from 'src/environment'


@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  path = `${environment.apiUrl}/api/assignments`

  constructor(private http:HttpClient) {  }

  //getById = (id:string):Observable<Assignment | undefined> => of(this.assignments.find(c => c.id == id))

  //getAll = ():Observable<Assignment[]> => of(this.assignments)

  create = (assignment:Assignment,courseId:string) => {
    const newAssignment = {
      quotas: assignment.quantityAvailable,
      isActive: assignment.isActive,
      price: assignment.price,
      schedule: assignment.schedule,
      idCourse: courseId
    }
    console.log(newAssignment)
    return this.http.post<Assignment>(this.path,newAssignment, { withCredentials: true })}

  delete = (assignmentId:string) => this.http.delete<Assignment>(this.path+'/'+assignmentId, { withCredentials: true })

  subscribeAssigment = (user: User, assignment: Assignment): Observable<any> => { return this.http.post<any>( this.path + '/subscribe', { idUser: user.id, idAssignment: assignment.id }, { withCredentials: true })}

  unsuscribeAssignment = (userId:String, assignmentId:String): Observable<any> => this.http.post<any>(this.path + '/unsubscribe', {idUser:userId, idAssignment: assignmentId}, { withCredentials: true })

  getUsersByAssignmentId = (assignmentId: String): Observable<BasicUser[]> => this.http.get<BasicUser[]>(this.path + '/' + assignmentId + '/admin', { withCredentials: true } )
}
