import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  query: string = ''

  constructor(private userService: UserService, private router:Router,private notificationService:NotificationService) {
    this.notificationService.notification$.subscribe(()=>{
      if (this.userService.isLogged()) {
        this.userService.refreshUser()
      }
    })

  }

  updateQuery(query: string) {
    this.query = query
  }

  goToSubscriptions(){
    this.router.navigate([`/suscripciones`])
  }

  isLogged = () => this.userService.isLogged()
  isAdmin = ()=>  this.userService.currentUser?.isAdmin

  nextReserve = () => {
    if(this.userService.isLogged()){
      console.log(this.userService.currentUser)
      return this.userService.currentUser?.nextClass
    }
    return null
  }
  hasReserve = () => this.nextReserve() != null

}
