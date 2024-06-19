import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Assignment } from 'src/app/models/assignment';
import { User } from 'src/app/models/user';
import { AssignmentService } from 'src/app/services/assignment/assignment.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-assignment-day-card',
  templateUrl: './assignment-day-card.component.html',
  styleUrls: ['./assignment-day-card.component.css'],
})
export class AssignmentDayCardComponent {
  @Input() assignment!: Assignment
  @Input() showDay: boolean = true

  showModal: boolean = false
  currentUser: User | null = null

  constructor(
    private router:Router,
    private userService:UserService,
    private cd: ChangeDetectorRef,
    private notificationService: NotificationService,
    private assignmentService: AssignmentService
  ){ }

  toggleShowDay() {
      this.showDay = !this.showDay
  }
  show = () => this.showDay

  toggleShowModal(){
    if(this.userService.isLogged()){
      this.showModal = !this.showModal
      this.currentUser = this.userService.getLoggedUser()
    }else{
      this.router.navigate(['/ingresar'])
    }
  }

  subscribe(){
    if(this.userService.isLogged()){
      this.showDay = false;
      console.log("Subscribed, showDay is now", this.showDay)
      this.assignmentService.subscribeAssigment(this.userService.getLoggedUser()!, this.assignment)
        .pipe(
          catchError((error) => {
            console.log(error)
            error.error.status = 401
            error.error.message = 'No se pudo actualizar usuario'
            return this.notificationService.handleError(error)
          })
        )
        .subscribe((data)=>{
          console.log(data)
          this.notificationService.notify(200, "Suscripción exitosa!")
      })
      this.cd.detectChanges()
    }else{
      this.router.navigate(['/ingresar'])
    }
  }

  unsubscribe(){
    this.showDay = true
    console.log("Unsubscribed, showDay is now", this.showDay)
    this.assignmentService.unsuscribeAssignment(this.userService.getLoggedUser()!, this.assignment)
    .pipe(
      catchError((error) => {
        console.log(error)
        error.error.status = 401
        error.error.message = 'No se pudo actualizar usuario'
        return this.notificationService.handleError(error)
      })
    )
    .subscribe((data)=>{
      console.log(data)
      this.notificationService.notify(200, "Desuscripción exitosa!")
    })
    this.cd.detectChanges()
  }

  ngOnInit(){
    if(this.showDay === undefined){
      this.showDay = true
    }
    console.log(this.showDay)
    console.log(this.assignment)
  }
}
