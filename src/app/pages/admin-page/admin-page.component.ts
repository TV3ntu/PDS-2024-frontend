import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Course } from 'src/app/models/course';
import { Institution } from 'src/app/models/institution';
import { CourseService } from 'src/app/services/course/course.service';
import { InstitutionService } from 'src/app/services/institution/institution.service';
import { NotificationService } from 'src/app/services/notification/notification.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  courses: Course[] = []
  institutions: Institution[]=[]
  loading = false

  constructor(
    private courseService: CourseService,
    private router:Router,
    private notificationService: NotificationService,
    private institutionService: InstitutionService
  ) {
    this.notificationService.notification$.subscribe(()=>{
      this.getCourses()
      this.getInstitutions()
    })
   }

  ngOnInit(){
    this.getCourses()
    this.getInstitutions()
  }

  getCourses(){
    this.loading = true
    this.courseService.getAllAdmin()
    .subscribe(courses => {
      this.courses = courses
      this.loading = false
    })
    console.log(this.courses)
  }

  getInstitutions(){
    this.loading = true
    this.institutionService.getAllAdmin()
    .subscribe(institutions => {
      const transformedInstitutions = institutions.map(institution => {
        return {
            ...institution,  // Copia todas las propiedades existentes
            title: institution.name,
            averageRating: 0
        }
      })
      this.institutions = transformedInstitutions;
      this.loading = false
    })
  }

  goToStats(id: string){
    this.router.navigate([`/admin/curso/${id}`])
    this.scrollToTop()
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  }

  deleteCourse(idCourse: string | undefined) {
      this.courseService.delete(idCourse!)
      .pipe(
        catchError((error) => {
          console.log(error)
          error.error.status = 401
          return this.notificationService.handleError(error)
        })
      )
        .subscribe(() => {
          this.notificationService.notify(200, 'Curso eliminado exitosamente')
          this.getCourses()
        })
  }

  deleteInstitution(idInstitution: string | undefined) {
      this.institutionService.delete(idInstitution!)
      .pipe(
        catchError((error) => {
          console.log(error)
          error.error.status = 401
          return this.notificationService.handleError(error)
        })
      )
        .subscribe(() => {
          this.notificationService.notify(200, 'Institución eliminada exitosamente')
          this.getInstitutions()
        })
  }

  hasCourses = () => this.courses.length > 0
  hasInstitutions = () => this.institutions.length > 0
}
