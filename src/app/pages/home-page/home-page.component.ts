import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  query: string = ''

  constructor(private userService: UserService) {}

  updateQuery(query: string) {
    this.query = query
  }

  isLogged(){
    return this.userService.isLogged()
  }
}
