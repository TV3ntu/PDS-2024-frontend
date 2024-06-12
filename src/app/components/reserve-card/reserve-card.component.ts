import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Reserve } from 'src/app/models/reserve';

@Component({
  selector: 'app-reserve-card',
  templateUrl: './reserve-card.component.html',
  styleUrls: ['./reserve-card.component.css']
})
export class ReserveCardComponent {
  @Input() reserve: Reserve | null | undefined = null

  constructor(private router:Router) { }

  getDayOfWeek(): string {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    const dayIndex = this.getDay()
    return days[dayIndex]
  }

  getDay = () => new Date(this.reserve!.date).getDay()+1

  getDayOnMonthFormat = () => {
    console.log(new Date(this.reserve!.date).getDate()+1)
    return new Date(this.reserve!.date).getDate()+1
  }


  goToCourse(){
    this.router.navigate([`/cursos/${this.reserve!.courseId}`])
  }
  getStatus = () => this.reserve?.status =='CONFIRMED'? 'CONFIRMADA' : 'FINALIZADA'
}
