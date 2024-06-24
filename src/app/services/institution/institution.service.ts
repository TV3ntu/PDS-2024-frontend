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

  getAllAdmin = ():Observable<InstitutionResponse[]> => this.http.get<InstitutionResponse[]>(this.path + '/admin', { withCredentials: true })

  create = (institution:Institution,file:File):Observable<Institution> => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('name', institution.title)
    formData.append('description', institution.description)
    formData.append('category', institution.category)

    console.log(formData)

    return this.http.post<Institution>(this.path ,formData, { withCredentials: true } )
  }

  delete = (institutionId:string) => this.http.delete<Institution>(this.path +'/'+ institutionId, { withCredentials: true })
}
