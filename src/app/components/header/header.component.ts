import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import {UserService} from "../../services/user/user.service";
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user = this.userService.getUser()
  private subscription: Subscription


  constructor(private router:Router, private userService: UserService,private notificationService: NotificationService) {
    this.subscription = this.notificationService.notification$.subscribe(()=>{
      if (this.userService.isLogged()) {
        this.user = this.userService.getUser()
      }
    })
  }

  goTo(route: string){
    this.router.navigate([`/${route}`])
  }
  ngOnInit(): void {
    if (this.userService.isLogged()) {
      this.user = this.userService.getUser()
    }
  }

  ngOnChanges(): void {
    if (this.userService.isLogged()) {
      this.user = this.userService.getUser()
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  isLogged = () => this.userService.isLogged()

  logOut() {
    this.goTo("instituciones")
    this.userService.logout()
  }
}
