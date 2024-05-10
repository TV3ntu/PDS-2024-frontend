import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assignment-day-card',
  templateUrl: './assignment-day-card.component.html',
  styleUrls: ['./assignment-day-card.component.css']
})
export class AssignmentDayCardComponent {
  @Input() times: {startTime: string, endTime: string, isActive:boolean}[] | undefined
  @Input() day: string = ''
  showDay: boolean = false

  toggleShowDay() {
    this.showDay = !this.showDay
  }
  ngOnInit(){
    console.log(this.times)
  }
}
