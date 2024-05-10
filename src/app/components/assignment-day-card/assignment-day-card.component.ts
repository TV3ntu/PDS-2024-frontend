import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-assignment-day-card',
  templateUrl: './assignment-day-card.component.html',
  styleUrls: ['./assignment-day-card.component.css']
})
export class AssignmentDayCardComponent {
  @Input() times: {startTime: string, endTime: string, isActive:boolean}[] | undefined
  @Input() day: string = ''
  showDay: boolean = false

  constructor(private router:Router,private userService:UserService){}

  toggleShowDay() {
    this.showDay = !this.showDay
  }

  subscribe(){
    if(this.userService.isLogged()){

    }else{
      this.router.navigate(['/ingresar'])
    }
  }
  unsubscribe(){

  }
  ngOnInit(){
    console.log(this.times)
  }
}
