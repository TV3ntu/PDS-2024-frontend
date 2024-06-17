import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CourseStats } from 'src/app/models/courseStats';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-course-stats-page',
  templateUrl: './course-stats-page.component.html',
  styleUrls: ['./course-stats-page.component.css']
})
export class CourseStatsPageComponent {
  courseId: string = ''
  courseStats!: CourseStats

  constructor(private route:ActivatedRoute, private courseService: CourseService, private router: Router){ }

  ngOnInit(){
    this.route.paramMap.subscribe((params: any) => {
      this.courseId = params.get('courseId') || ''
      this.getCourse()
    })
  }

  getCourse(): void {
    this.courseService.getStatsById(this.courseId)
    .subscribe(course => {
      console.log(course)
      this.courseStats = course
    })
  }

  translateDay(days: string): string {
    // Dividir la cadena de entrada en un array de días
    const daysArray = days.split(',');

    // Traducir cada día individualmente
    const translatedDaysArray = daysArray.map(day => {
      const trimmedDay = day.trim(); // Eliminar espacios adicionales
      const translatedDay = daysTranslationMap[trimmedDay.toUpperCase()];
      return translatedDay ? translatedDay : "Día no válido";
    });

    // Unir las traducciones en una sola cadena separada por comas
    return translatedDaysArray.join(', ');
  }

  goToCreateAssignment() {
    this.router.navigate([`/admin/${this.courseId}/clase/agregar`])
  }

  deleteAssignment(id: string){ 
    console.log('borra assignment: ', id)
  }
}

const daysTranslationMap: { [key: string]: string } = {
  "MONDAY": "LUNES",
  "TUESDAY": "MARTES",
  "WEDNESDAY": "MIÉRCOLES",
  "THURSDAY": "JUEVES",
  "FRIDAY": "VIERNES",
  "SATURDAY": "SÁBADO",
  "SUNDAY": "DOMINGO"
};
