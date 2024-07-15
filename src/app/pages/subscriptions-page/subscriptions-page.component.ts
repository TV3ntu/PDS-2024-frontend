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

  subscriptionsList: Reserve[] = [ ]
  loading = false

  constructor(private userService:UserService, private notificationService:NotificationService) { 
    this.notificationService.notification$.subscribe(()=>{
      this.getSubscribedCourses()
    })
  }

  ngOnInit() {
    this.getSubscribedCourses()
  }

  filterByStatus = (status: string) => this.subscriptionsList.filter(elem => elem.status == status)

  isLogged = () => this.userService.isLogged()

  isAdmin = ()=>  this.userService.currentUser?.isAdmin

  getSubscribedCourses = () => {
    if(this.userService.isLogged()){
      this.loading = true
      this.userService.getSuscribedCourses(this.userService.currentUser?.id || '')
      .pipe(
        catchError((error) => {
          console.log(error)
          this.subscriptionsList = []
          this.loading = false
          return this.notificationService.handleError(error)
        })
      )
      .subscribe(
        (response) => {
          this.loading = false
          this.subscriptionsList = response
        }
      )
    }
  }
  hasSuscriptions = () => this.subscriptionsList.length > 0

}
