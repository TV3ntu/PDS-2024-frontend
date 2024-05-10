import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user = new User('1','Carlos','Gonzalez','carlos@mail.com', '')

  constructor(private router:Router, private userService: UserService) { }

  goTo(route: string){
    this.router.navigate([`/${route}`])
  }

  isLogged = () => this.userService.isLogged()

  logOut() {
    this.goTo("instituciones")
    this.userService.logout()
  }
}
