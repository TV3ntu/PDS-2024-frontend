import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  query: string = ''

  constructor(private userService: UserService, private router:Router) {}

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
