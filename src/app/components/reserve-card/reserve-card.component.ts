import { Component, Input } from '@angular/core';
import { Reserve } from 'src/app/models/reserve';

@Component({
  selector: 'app-reserve-card',
  templateUrl: './reserve-card.component.html',
  styleUrls: ['./reserve-card.component.css']
})
export class ReserveCardComponent {
  @Input() reserve: Reserve = new Reserve("Nombre del curso", "Nombre de la institucion", "12/07/2024", "18:00", "Confirmado")

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
