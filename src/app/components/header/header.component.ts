import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import {UserService} from "../../services/user/user.service";
import { NotificationService } from 'src/app/services/notification/notification.service';
import { catchError, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
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
    } else{
      this.isLogged=false
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  logOut() {
    this.goTo("instituciones")
    this.isLogged = false
    this.userService.logout()
    .pipe(
      catchError((error) => {
        error.error.status = 401
        error.error.message = 'No se pudo cerrar sesión'
        return this.notificationService.handleError(error)
      })
    )
    .subscribe(() => this.notificationService.notify(200, 'Sesión cerrada'))
  }
  isAdmin = () => this.userService.getLoggedUser()?.isAdmin
}
