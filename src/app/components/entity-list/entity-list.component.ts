import { InstitutionService } from 'src/app/services/institution/institution.service';
import { ActivatedRoute } from '@angular/router';
import {Component, Input} from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css'],
})

export class EntityListComponent {

  entityList: Entity[] | undefined = [ ]
  mode: string = ''
  institutionId: string = ''
  @Input() filter: string = ''
  loading = false

  constructor(private courseService: CourseService,private institutionService: InstitutionService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.mode = data['mode']
      this.institutionId = data['institutionId']
    })

    if(this.mode === 'course') this.getCourses()

    if(this.mode === 'institution') this.getInstitutions()

  }

  ngOnChanges(){
    if (this.filter != '') {
      if(this.mode === 'course') this.getCourses()
      if(this.mode === 'institution') this.getInstitutions()
    }
  }

  getCourses(){
    this.loading = true
    this.courseService.getAll(this.filter)
    .subscribe(courses => {
      const transformedCourses = courses.map(course => {
        return {
            ...course,  // Copia todas las propiedades existentes
            averageRating: course.averageRating,
        }})

      this.entityList = transformedCourses
      this.loading = false
    })
  }

  getInstitutions(){
    this.loading = true
    this.institutionService.getAll(this.filter)
    .subscribe(institutions => {
      const transformedInstitutions = institutions.map(institution => {
        return {
            ...institution,  // Copia todas las propiedades existentes
            title: institution.name,
            averageRating: 0
        }
      })
      this.entityList = transformedInstitutions;
      this.loading = false
    })
  }

  onEntityDeleted(): void {
    if (this.mode === 'course') this.getCourses();
    if (this.mode === 'institution') this.getInstitutions();
  }
}
