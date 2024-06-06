import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
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

  constructor(
    private courseService: CourseService,
    private router:Router,
    private notificationService: NotificationService,
    private institutionService: InstitutionService
  ) { }

  ngOnInit(){
    this.getCourses()
  }

  getCourses(){
    this.courseService.getAll()
    .subscribe(courses => {
      this.courses = courses
    })
  }

  goToStats(id: string){
    this.router.navigate([`/admin/curso/${id}`])
  }

  isAdmin = () => true

  deleteEntity(idEntity: string | undefined) {
    /* if (this.isInstitution()) {
      this.institutionService.delete(idEntity!)
        .subscribe(() => {
          this.notificationService.notify(200, 'Institución eliminada exitosamente');
        })
    } else { */
      this.courseService.delete(idEntity!)
        .subscribe(() => {
          this.notificationService.notify(200, 'Curso eliminado exitosamente')
          this.getCourses()
        })
  }
}
