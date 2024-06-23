import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { path } from '../api.path'
import { HttpClient } from '@angular/common/http'
import { Course } from 'src/app/models/course'
import { Institution } from 'src/app/models/institution'
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

  constructor(private http: HttpClient) {  }

  getById = (id:string):Observable<InstitutionResponse> => this.http.get<InstitutionResponse>(`${this.path}/${id}`, { withCredentials: true })

  getAll = (filter: String = ""):Observable<InstitutionResponse[]> => this.http.get<InstitutionResponse[]>(this.path + '?query=' + filter, { withCredentials: true })

  create = (institution:Institution):Observable<Institution> => {
    const institutionToCreate = {
      name: institution.title,
      description: institution.description,
      category: institution.category,
      image: institution.image,
    }
    console.log(institutionToCreate)
    return this.http.post<Institution>(this.path ,institutionToCreate, { withCredentials: true } )
  }

  delete = (institutionId:string) => this.http.delete<Institution>(this.path +'/'+ institutionId, { withCredentials: true })
}
