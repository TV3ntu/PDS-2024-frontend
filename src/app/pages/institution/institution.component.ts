import { Component } from '@angular/core';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent {
    name = "title"
    category = "subtitle"
    image = "https://material.angular.io/assets/img/examples/shiba2.jpg"
    description = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."

}
