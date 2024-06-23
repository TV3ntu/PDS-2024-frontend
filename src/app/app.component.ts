import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from './services/user/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeekBook'

  constructor(private router: Router,private userService:UserService){}

  ngOnInit(){
    this.router.navigate(['/instituciones'])
    if(this.userService.isLogged() && this.userService.currentUser == null) {
      this.userService.getUserLoggedData().subscribe(user => {
        this.userService.currentUser = user
      })
    }
  }

}
