import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Course } from 'src/app/models/course';
import { Institution } from 'src/app/models/institution';
import { CourseService } from 'src/app/services/course/course.service';
import { InstitutionService,InstitutionResponse } from 'src/app/services/institution/institution.service';
import { NotificationService } from 'src/app/services/notification/notification.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  courses: Course[] = []
  institutions: InstitutionResponse[]=[]

  constructor(
    private courseService: CourseService,
    private router:Router,
    private notificationService: NotificationService,
    private institutionService: InstitutionService
  ) { }

  ngOnInit(){
    this.getCourses()
    this.getInstitutions()
  }

  getCourses(){
    this.courseService.getAll()
    .subscribe(courses => {
      this.courses = courses
    })
    console.log(this.courses)
  }

  getInstitutions(){
    this.institutionService.getAll()
    .subscribe(institutions=>{
      this.institutions = institutions})
  }

  goToStats(id: string){
    this.router.navigate([`/admin/curso/${id}`])
  }

  isAdmin = () => true

  deleteCourse(idCourse: string | undefined) {
    /* if (this.isInstitution()) {
      this.institutionService.delete(idEntity!)
        .subscribe(() => {
          this.notificationService.notify(200, 'Institución eliminada exitosamente');
        })
    } else { */
      this.courseService.delete(idCourse!)
      .pipe(
        catchError((error) => {
          console.log(error)
          error.error.status = 401
          /* error.error.message = error.menssage */
          return this.notificationService.handleError(error)
        })
      )
        .subscribe(() => {
          this.notificationService.notify(200, 'Curso eliminado exitosamente')
          this.getCourses()
        })
  }

  deleteInstitution(idInstitution: string | undefined) {
    /* if (this.isInstitution()) {
      this.institutionService.delete(idEntity!)
        .subscribe(() => {
          this.notificationService.notify(200, 'Institución eliminada exitosamente');
        })
    } else { */
      this.institutionService.delete(idInstitution!)
      .pipe(
        catchError((error) => {
          console.log(error)
          error.error.status = 401
          /* error.error.message = error.menssage */
          return this.notificationService.handleError(error)
        })
      )
        .subscribe(() => {
          this.notificationService.notify(200, 'Institución eliminada exitosamente')
          this.getInstitutions()
        })
  }

}
