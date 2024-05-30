import { Component } from '@angular/core';
import { Reserve } from 'src/app/models/reserve';

@Component({
  selector: 'app-subscriptions-page',
  templateUrl: './subscriptions-page.component.html',
  styleUrls: ['./subscriptions-page.component.css']
})
export class SubscriptionsPageComponent {

  subscriptionsList: Reserve[] = [
    new Reserve("Nombre de la institucion", "Nombre del curso", "12/07/2024", "18:00", "Confirmado"),
  new Reserve("Nombre de la institucion", "Nombre del curso", "12/07/2024", "18:00", "Finalizado")
  ]


  filterByStatus(status: string){
    return this.subscriptionsList.filter(elem => elem.status == status)
  }

}
