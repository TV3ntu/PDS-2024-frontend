import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { Reserve } from 'src/app/models/reserve';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-subscriptions-page',
  templateUrl: './subscriptions-page.component.html',
  styleUrls: ['./subscriptions-page.component.css']
})
export class SubscriptionsPageComponent {

  subscriptionsList: Reserve[] = [
    new Reserve("Sportclub", "a396426d-850c-45cc-8c53-01c3c4ed0847","Entrenamiento funcional", "12/07/2024", "18:00", "Confirmado"),
  new Reserve("Sportclub", "a396426d-850c-45cc-8c53-01c3c4ed0847", "Entrenamiento funcional", "12/07/2024", "18:00", "Finalizado")
  ]

  constructor(private userService:UserService,private notificationService:NotificationService) { }

  ngOnInit() {
    this.getSubscribedCourses()
  }

  filterByStatus = (status: string) => this.subscriptionsList.filter(elem => elem.status == status)

  isLogged = () => this.userService.isLogged()

  isAdmin = ()=>  this.userService.currentUser?.isAdmin

  getSubscribedCourses = () => {
    if(this.userService.isLogged()){
      this.userService.getSuscribedCourses(this.userService.currentUser?.id || '')
      .pipe(
        catchError((error) => {
          console.log(error)
          this.subscriptionsList = []
          return this.notificationService.handleError(error)
        })
      )
      .subscribe(
        (response) => {
          console.log(response)
          this.subscriptionsList = response
        }
      )
    }
  }
  hasSuscriptions = () => this.subscriptionsList.length > 0

}
