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
  activeButton: string = '';


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
    this.activeButton = 'logOut';
    const email = this.user?.email || ''; // Assuming user object has an email property
    const password = ''; // You should securely obtain the password

    this.userService.logout(email, password).subscribe({
      next: () => {
        this.isLogged = false;
        this.notificationService.notify(200, 'Sesión cerrada');
        this.goTo("instituciones");
      },
      error: (err) => {
        console.error('Error during logout:', err);
        this.notificationService.notify(500, 'Error al cerrar la sesión');
      }
    });
  }



  isAdmin = () => this.userService.getLoggedUser()?.isAdmin
}
