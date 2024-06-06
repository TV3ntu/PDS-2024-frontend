import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Course } from 'src/app/models/course'
import { path } from '../api.path'
import { HttpClient,HttpParams } from '@angular/common/http'
import { Assignment } from 'src/app/models/assignment'

interface CourseResponse{
  id: string
  title: string
  description: string
  image: string
  category: string
  assignments: Assignment[]
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  path: string = path.local + '/api/courses'

  constructor(private http: HttpClient) {  }

  getById = (id: string): Observable<CourseResponse> => this.http.get<CourseResponse>(this.path + '/' + id)

  getAll = (filter: String = ""): Observable<Course[]> => this.http.get<Course[]>(this.path + '?query=' + filter)

  create = (course:Course) => this.http.post<Course>(this.path+'/api/courses',{course})

  delete = (courseId:string) => this.http.delete<Course>(this.path + '/' + courseId)

  deleteAll(courses: string[]): Observable<Course[]> {
    let params = new HttpParams();
    courses.forEach(course => {
    params = params.append('idCourses', course);
    });


    return this.http.delete<Course[]>(`${this.path}/api/courses`, { params });
  }

  getStatsById = (id: string): Observable<any> => this.http.get(this.path + '/' + id + '/stats')  

}
