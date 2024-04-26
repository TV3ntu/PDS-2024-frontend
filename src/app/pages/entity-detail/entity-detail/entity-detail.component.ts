import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Entity } from 'src/app/models/entity';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})
export class EntityDetailComponent {
  entity: Entity | undefined
  mode: string = ''

  constructor(private courseService:CourseService, private route:ActivatedRoute){ }

  ngOnInit(){
    // Obtengo el modo de la entidad a mostrar
    this.route.data.subscribe((data) => {
      this.mode = data['mode']
    })

    if(this.mode === 'course') this.getCourse()

    if(this.mode === 'institution') this.getInstitution()

  }

  getCourse(): void {
    this.courseService.getById('1')
    .subscribe(data => {
      this.entity = data
    })
  }

  getInstitution():void{
    console.log('getInstitution')
  }
}
