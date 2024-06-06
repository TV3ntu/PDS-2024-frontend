import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  courses: Course[] = []

  constructor(private courseService: CourseService, private router:Router) { }

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
}
