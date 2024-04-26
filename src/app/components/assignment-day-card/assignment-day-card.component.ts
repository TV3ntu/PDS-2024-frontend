import { Component, Input } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';

@Component({
  selector: 'app-assignment-day-card',
  templateUrl: './assignment-day-card.component.html',
  styleUrls: ['./assignment-day-card.component.css']
})
export class AssignmentDayCardComponent {
  @Input() times: {startTime: string, endTime: string}[] | undefined
  @Input() day: string = ''
  showDay: boolean = false

  toggleShowDay() {
    this.showDay = !this.showDay
  }
}
