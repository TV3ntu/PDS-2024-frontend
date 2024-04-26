import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/models/course';
import {courses, institutions} from 'src/app/mocks/mocks'
import { InstitutionService } from '../institution/institution.service';
import { Institution } from 'src/app/models/institution';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[]
  institutions: Institution[]

  constructor() {
    this.courses = institutions.map(i => i.children).flat()
    this.institutions = institutions
  }

  getById = (id:string):Observable<Course | undefined> => of(this.courses.find(c => c.id == id))

  getAll = ():Observable<Course[]> => of(this.courses)

  getAllFromInstitution = (institutionID:string):Observable<Course[] | undefined> => of(this.institutions.find(i => i.id == institutionID)?.children)

  getByCategory = (category:string):Course[] => this.courses.filter(c => c.category == category)

}
