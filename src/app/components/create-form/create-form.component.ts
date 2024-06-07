import { CourseService } from 'src/app/services/course/course.service';
import { Component } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"
import { Course } from "../../models/course";
import { Institution } from "../../models/institution";
import {InstitutionService} from "../../services/institution/institution.service";
import { catchError } from 'rxjs';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  isCourseForm: boolean = false
  institutions: string[] = [];
  form = {
    name: '',
    description: '',
    category: '',
    image: '',
    institution: ''
  }

  constructor(private http: HttpClient, private router: Router, private institutionService: InstitutionService,private courseService:CourseService,private notificationService:NotificationService) {}

  ngOnInit() {
    const currentUrl = this.router.url
    if (currentUrl.includes('curso')) {
      this.isCourseForm = true
      this.getInstitutions()
    }
  }

  onSubmit() {
    if ( this.isCourseForm ) {
      const course = new Course('', this.form.name, this.form.description, this.form.image, this.form.category, [])
      course.institution = this.form.institution
      console.log(course)
      this.courseService.create(course)
      .pipe(
          catchError((error) => {
            console.log(error)
            error.error.status = 401
            error.error.message = 'No se pudo crear el curso'
            return this.notificationService.handleError(error)
          })
      )
      .subscribe((data)=>{
        console.log(data)
        this.notificationService.notify(200, "Curso creado exitosamente!")
      })
      // TODO: Llamar al servicio de creación de cursos
    } else {
      const inst = new Institution('', this.form.name, this.form.description, this.form.image, this.form.category, [])
      console.log(inst)
      // TODO: Llamar al servicio de creación de instituciones
    }
  }

  getInstitutions(){
    this.institutionService.getAll()
      .subscribe(institutions => {
        this.institutions = institutions.map(institution => institution.name)
      })
  }
}
