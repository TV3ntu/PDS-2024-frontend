import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Institution } from 'src/app/models/institution';
import { institutions } from 'src/app/mocks/mocks';
import { path } from '../api.path';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/models/course';
interface InstitutionResponse{
  title:string
  id:string
  name: string
  description: string
  image: string
  category: string
  children: Course[]
  courses: Course[]
}
@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  path: string = path.local + '/api/institutions'
  institutions: Institution[]

  constructor(private http: HttpClient) {
    this.institutions = institutions
  }

  getById = (id:string):Observable<InstitutionResponse> => this.http.get<InstitutionResponse>(`${this.path}/${id}`)

  getAll = ():Observable<InstitutionResponse[]> => this.http.get<InstitutionResponse[]>(this.path)

  create = (institution:Institution) => this.http.post<Institution>(this.path+'/api/courses',{institution})

  delete = (institution:Institution) => this.http.delete<Institution>(this.path+'/api/courses/'+institution.id)
  
}
