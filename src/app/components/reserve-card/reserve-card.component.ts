import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Reserve } from 'src/app/models/reserve';
import { AssignmentService } from 'src/app/services/assignment/assignment.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-reserve-card',
  templateUrl: './reserve-card.component.html',
  styleUrls: ['./reserve-card.component.css']
})
export class ReserveCardComponent {
  @Input() reserve: Reserve | null | undefined = null

  constructor(private router:Router, private userService: UserService, private cd: ChangeDetectorRef,
    private assignmentService: AssignmentService, private notificationService: NotificationService) { }

  getDayOfWeek(): string {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const dayIndex = this.getDay()
    return days[dayIndex]
  }

  getDay = () => new Date(this.reserve!.date).getDay()+1

  getDayOnMonthFormat = () => {
    console.log(new Date(this.reserve!.date).getDate()+1)
    return new Date(this.reserve!.date).getDate()+1
  }


  goToCourse(){
    this.router.navigate([`/cursos/${this.reserve!.courseId}`])
  }

  getStatus = () => this.reserve?.status =='CONFIRMED'? 'CONFIRMADA' : 'FINALIZADA'

  unsubscribe(event: Event){
    event.stopPropagation();
    this.assignmentService.unsuscribeAssignment(this.userService.getLoggedUser()!.id, this.reserve!.assignmentId)
    .pipe(
      catchError((error) => {
        console.log(error)
        error.error.status = 401
        error.error.message = 'No se pudo actualizar usuario'
        return this.notificationService.handleError(error)
      })
    )
    .subscribe((data)=>{
      this.notificationService.notify(200, "Desuscripción exitosa!")
    })
    this.cd.detectChanges()
  }
}
