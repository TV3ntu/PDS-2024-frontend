import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/models/course';
import {courses, institutions} from 'src/app/mocks/mocks'
import { InstitutionService } from '../institution/institution.service';
import { Institution } from 'src/app/models/institution';
import { path } from '../api.path';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  path: string = path.local + '/api/courses'

  courses: Course[]
  institutions: Institution[]

  constructor(private http: HttpClient) {
    this.courses = institutions.map(i => i.children).flat()
    this.institutions = institutions
  }

  getById(id: string): Observable<Course|undefined> {
    return this.http.get<Course>(this.path + '/api/courses/' + id)
  }
 // getById = (id:string):Observable<Course | undefined> => of(this.courses.find(c => c.id == id))

  getAll = ():Observable<Course[]> => this.http.get<Course[]>(this.path)

  getAllFromInstitution = (institutionID:string):Observable<Course[] | undefined> => of(this.institutions.find(i => i.id == institutionID)?.children)

  getByCategory = (category:string):Course[] => this.courses.filter(c => c.category == category)

}
