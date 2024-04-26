import { Component, Input } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { Institution } from 'src/app/models/institution';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.css']
})
export class EntityCardComponent{
  @Input()entity?: Entity
}
