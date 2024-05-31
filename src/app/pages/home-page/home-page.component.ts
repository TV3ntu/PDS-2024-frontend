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

  ngOnInit(){
    if(this.isAdmin()){
      this.router.navigate([`/admin`])
    }
  } 
  
  updateQuery(query: string) {
    this.query = query
  }

  isLogged(){
    return this.userService.isLogged()
  }

  goToSubscriptions(){
    this.router.navigate([`/suscripciones`])
  }

  isAdmin(){
    return this.userService.currentUser?.isAdmin
  }
}
