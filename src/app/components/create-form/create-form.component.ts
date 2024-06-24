import { Institution } from 'src/app/models/institution'
import { CourseService } from 'src/app/services/course/course.service'
import { Component } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"
import { Course } from "../../models/course"
import {InstitutionService} from "../../services/institution/institution.service"
import { catchError } from 'rxjs'
import { NotificationService } from 'src/app/services/notification/notification.service'

interface CoruseInstitution{
  name: string
  id: string
}

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  isCourseForm: boolean = false
  institutions: CoruseInstitution[] = []
  form = {
    name: '',
    description: '',
    category: '',
    image: '',
    institution: ''
  }
  selectedFile: File | null = null

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
      course.institutionId = this.form.institution
      console.log(course)
      this.courseService.create(course, this.selectedFile!)
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
        this.router.navigate(['/admin'])
        this.notificationService.notify(200, "Curso creado exitosamente!")
      })
    } else {
      const inst = new Institution('', this.form.name, this.form.description, this.form.image, this.form.category, [])
      console.log(inst)
      this.institutionService.create(inst,this.selectedFile!)
      .pipe(
          catchError((error) => {
            console.log(error)
            error.error.status = 401
            error.error.message = 'No se pudo crear la institución'
            return this.notificationService.handleError(error)
          })
      )
      .subscribe((data)=>{
        console.log(data)
        this.router.navigate(['/admin'])
        this.notificationService.notify(200, "Institución creada exitosamente!")
      })
    }
  }
  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];
    }
  }

  getInstitutions(){
    this.institutionService.getAllAdmin()
      .pipe(
        catchError((error) => {
          console.log(error)
          error.error.status = 401
          return this.notificationService.handleError(error)
        })
      )
    .subscribe(institutions => {
        this.institutions = institutions.map(institution => {return {name:institution.name, id:institution.id}})
    })
  }
}
