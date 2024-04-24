import { Component } from '@angular/core';
import { Institution } from 'src/app/models/institution';
import { InstitutionComponent } from '../institution/institution.component';

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.css'],
})

export class InstitutionListComponent {

  institutions: Institution[] = [
    new Institution("1","title","subtitle","The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.","https://material.angular.io/assets/img/examples/shiba2.jpg"), 
    new Institution("2","title2","subtitle","The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.","https://material.angular.io/assets/img/examples/shiba2.jpg")
  ]

}
