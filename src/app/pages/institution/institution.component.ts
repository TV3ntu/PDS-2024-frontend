import { Component, Input } from '@angular/core';
import { Institution } from 'src/app/models/institution';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent{
  @Input()institution?: Institution// = new Institution("1","title","subtitle","The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.","")
}
