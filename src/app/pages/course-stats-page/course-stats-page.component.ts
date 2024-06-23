import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { catchError } from 'rxjs';
import { CourseStats } from 'src/app/models/courseStats';
import { AssignmentService } from 'src/app/services/assignment/assignment.service';
import { CourseService } from 'src/app/services/course/course.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import {BasicUser, User} from "../../models/user";

@Component({
  selector: 'app-course-stats-page',
  templateUrl: './course-stats-page.component.html',
  styleUrls: ['./course-stats-page.component.css']
})
export class CourseStatsPageComponent {
  courseId: string = ''
  courseStats!: CourseStats
  showModal = false;
  users: BasicUser[] = [];

  constructor(
    private route:ActivatedRoute,
    private courseService: CourseService,
    private router: Router,
    private assignmentService: AssignmentService,
    private notificationService: NotificationService
  ){ }

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

    this.assignmentService.delete(id)
    .pipe(
      catchError((error) => {
        console.log(error)
        error.error.status = 401
        /* error.error.message = 'No se pudieron obtener las clases del usuario' */
        return this.notificationService.handleError(error)
      })
    )
    .subscribe(() => {
      this.getCourse()
      this.notificationService.notify(200, "Se eliminó la clase exitosamente!")
    })
  }

  openModal(idAssignment: string) {
    // TODO: Llamar a la API para obtener los usuarios de la clase
    this.users = [
      new BasicUser("Jose", "Perez", "jperez@mail.com"),
      new BasicUser("Marta", "Gomez", "mgomez@mail.com"),
      new BasicUser("Luis", "Lopez", "llopez@mail.com"),
      new BasicUser("Ana", "Martinez", "amartinez@mail.com"),
      new BasicUser("Juan", "Garcia", "jgarcia@mail.com"),
      new BasicUser("Sofia", "Fernandez", "sfernandez@mail.com"),
      new BasicUser("Carlos", "Rodriguez", "crodriguez@mail.com"),
      new BasicUser("Elena", "Sanchez", "esanchez@mail.com"),
      new BasicUser("Miguel", "Diaz", "mdiaz@mail.com"),
      new BasicUser("Laura", "Torres", "ltorres@mail.com")
    ]
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
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
