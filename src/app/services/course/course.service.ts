import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/models/course';
import {courses} from 'src/app/mocks/mocks'
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[]

  constructor() {
    this.courses = courses
  }

  getById = (id:string):Observable<Course | undefined> => of(this.courses.find(c => c.id == id))

  getAll = ():Observable<Course[]> => of(this.courses)

  getByCategory = (category:string):Course[] => this.courses.filter(c => c.category == category)

}
