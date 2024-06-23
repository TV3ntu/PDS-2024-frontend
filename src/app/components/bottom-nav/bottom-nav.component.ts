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
  activeButton: string = '';

  constructor(private router:Router, private userService: UserService,private notificationService: NotificationService) {
    this.subscription = this.notificationService.notification$.subscribe(()=>{
      this.checkUser()
    })
  }

  goTo(route: string){
    this.activeButton = route;
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
    this.activeButton = 'logOut';
    this.goTo("instituciones")
    this.userService.logout()
    .pipe(
      catchError((error) => {
        error.error.status = 401
        error.error.message = 'No se pudo cerrar sesión'
        return this.notificationService.handleError(error)
      })
    )
    .subscribe(() => this.notificationService.notify(200, 'Sesión cerrada'))
    this.isLogged = false
  }

  isActive(route: string){
    return this.activeButton === route
  }

  isAdmin = () => this.userService.getLoggedUser()?.isAdmin
}
