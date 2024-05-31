import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Course } from 'src/app/models/course'
import { path } from '../api.path'
import { HttpClient } from '@angular/common/http'

interface CourseResponse{
  id: string
  title: string
  description: string
  image: string
  category: string
  assignments: any[]
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  path: string = path.local + '/api/courses'

  constructor(private http: HttpClient) {  }

  getById = (id: string): Observable<CourseResponse> => this.http.get<CourseResponse>(this.path + '/' + id)

  getAll = (filter: String = ""): Observable<Course[]> => this.http.get<Course[]>(this.path + '?query=' + filter)

}
