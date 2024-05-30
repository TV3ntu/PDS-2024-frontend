import { Component } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router"
import { Course } from "../../models/course";
import { Institution } from "../../models/institution";
import {InstitutionService} from "../../services/institution/institution.service";

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

  constructor(private http: HttpClient, private router: Router, private institutionService: InstitutionService) {}

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
