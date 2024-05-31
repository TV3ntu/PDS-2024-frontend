import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from 'src/app/models/assignment';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-assignment-day-card',
  templateUrl: './assignment-day-card.component.html',
  styleUrls: ['./assignment-day-card.component.css'],
})
export class AssignmentDayCardComponent {
  @Input() assignment!: Assignment
  showDay: boolean = true

  constructor(private router:Router,private userService:UserService,private cd: ChangeDetectorRef){ }

  toggleShowDay() {
    this.showDay = !this.showDay
  }
  show = () => this.showDay

  subscribe(){
    if(this.userService.isLogged()){
      this.showDay = false;
      console.log("Subscribed, showDay is now", this.showDay)
      this.cd.detectChanges()
    }else{
      this.router.navigate(['/ingresar'])
    }
  }

  unsubscribe(){
    this.showDay = true
    console.log("Unsubscribed, showDay is now", this.showDay)
    this.cd.detectChanges()
  }

  ngOnInit(){
    if(this.showDay === undefined){
      this.showDay = true
    }
    console.log(this.showDay)
    console.log(this.assignment)
  }
}
