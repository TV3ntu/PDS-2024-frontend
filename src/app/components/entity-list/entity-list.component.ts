import { InstitutionService } from 'src/app/services/institution/institution.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { Institution } from 'src/app/models/institution';
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
  constructor(private courseService: CourseService,private institutionService: InstitutionService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.mode = data['mode']
      this.institutionId = data['institutionId']
    })

    if(this.mode === 'course') this.getCourses()

    if(this.mode === 'institution') this.getInstitutions()

  }
  getCourses(){
    this.courseService.getAll()
    .subscribe(courses => {
      this.entityList = courses
    })
  }
  getInstitutions(){
    this.institutionService.getAll()
    .subscribe(institutions => {
      this.entityList = institutions
    })
  }
}
