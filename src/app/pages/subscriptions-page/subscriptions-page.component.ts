import { Component } from '@angular/core';
import { Reserve } from 'src/app/models/reserve';

@Component({
  selector: 'app-subscriptions-page',
  templateUrl: './subscriptions-page.component.html',
  styleUrls: ['./subscriptions-page.component.css']
})
export class SubscriptionsPageComponent {

  subscriptionsList: Reserve[] = [
    new Reserve("Sportclub", "a396426d-850c-45cc-8c53-01c3c4ed0847","Entrenamiento funcional", "12/07/2024", "18:00", "Confirmado"),
  new Reserve("Sportclub", "a396426d-850c-45cc-8c53-01c3c4ed0847", "Entrenamiento funcional", "12/07/2024", "18:00", "Finalizado")
  ]


  filterByStatus(status: string){
    return this.subscriptionsList.filter(elem => elem.status == status)
  }

}
