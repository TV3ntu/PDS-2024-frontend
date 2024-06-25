import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Course } from 'src/app/models/course'
import { path } from '../api.path'
import { HttpClient,HttpParams } from '@angular/common/http'
import { Assignment } from 'src/app/models/assignment'
import { ReviewRequest } from 'src/app/models/reviewRequest'
import {Review} from "../../models/review";

interface CourseResponse{
  id: string
  title: string
  description: string
  image: string
  category: string
  assignments: Assignment[]
  reviews: Review[]
  rating: number
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  path: string = path.local + '/api/courses'

  constructor(private http: HttpClient) {  }

  getById = (id: string): Observable<CourseResponse> => this.http.get<CourseResponse>(this.path + '/' + id, { withCredentials: true })

  getAll = (filter: String = ""): Observable<Course[]> => this.http.get<Course[]>(this.path + '?query=' + filter, { withCredentials: true } )

  getAllAdmin = (): Observable<Course[]> => this.http.get<Course[]>(this.path + '/admin', { withCredentials: true } )

  create = (course:Course,file:File):Observable<Course> => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', course.title)
    formData.append('description', course.description)
    formData.append('category', course.category)
    formData.append('institutionId', course.institutionId)

    return this.http.post<Course>(this.path,formData, { withCredentials: true } )
  }

  delete = (courseId:string) => this.http.delete<Course>(this.path + '/' + courseId, { withCredentials: true })

  deleteAll(courses: string[]): Observable<Course[]> {
    let params = new HttpParams();
    courses.forEach(course => {
    params = params.append('idCourses', course);
    });
    return this.http.delete<Course[]>(`${this.path}/api/courses`, { params });
  }

  getStatsById = (id: string): Observable<any> => this.http.get(this.path + '/' + id + '/stats', { withCredentials: true })

  addReview = (id: string, review: ReviewRequest) => this.http.post(this.path + '/' + id + '/review', {review}, {withCredentials:true})
}
