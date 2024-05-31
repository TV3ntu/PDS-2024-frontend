import { Component, Input } from '@angular/core';
import { Reserve } from 'src/app/models/reserve';

@Component({
  selector: 'app-reserve-card',
  templateUrl: './reserve-card.component.html',
  styleUrls: ['./reserve-card.component.css']
})
export class ReserveCardComponent {
  @Input() reserve: Reserve = new Reserve("Nombre de la institucion","a396426d-850c-45cc-8c53-01c3c4ed0847", "Nombre del curso", "12/07/2024", "18:00", "Confirmado")

  constructor(private router:Router) { }

  getDayOfWeek(): string {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const dayIndex = this.getDay()
    return days[dayIndex];
  }

  getDay(){
    return new Date(this.reserve.date).getDay();
  }

  getMonth(){
    return new Date(this.reserve.date).getMonth();
  }
}
