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

  entityList: Entity[] = [ ]

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll()
    .subscribe(courses => {
      this.entityList = courses
    })
  }

}
