import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import {UserService} from "../../services/user/user.service";
import { NotificationService } from 'src/app/services/notification/notification.service';
import { catchError, Subscription } from 'rxjs';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css'],
})
export class BottomNavComponent {
  user = this.userService.getLoggedUser()
  private subscription: Subscription
  isLogged: boolean = false


  constructor(private router:Router, private userService: UserService,private notificationService: NotificationService) {
    this.subscription = this.notificationService.notification$.subscribe(()=>{
      this.checkUser()
    })
  }

  goTo(route: string){
    this.router.navigate([`/${route}`])
  }

  ngOnInit(): void {
    this.checkUser()
  }

  checkUser (){
    if(this.userService.isLogged()){
      this.isLogged = true
      this.userService.getUserLoggedData().subscribe(user => {
        this.user = user
      })
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  logOut() {
    this.goTo("instituciones")
    this.userService.logout()
    this.isLogged = false
    this.notificationService.notify(200, 'Sesión cerrada')
  }
}
