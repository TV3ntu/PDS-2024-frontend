import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entity } from 'src/app/models/entity';
import { Institution } from 'src/app/models/institution';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.css']
})
export class EntityCardComponent{
  @Input()entity?: Entity
  institutionId:string = ''
  courseId: string = ''
  mode: string = ''
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.institutionId = data.get('institutionId') || ''
      this.courseId = data.get('courseId') || ''
    })
    this.activatedRoute.data.subscribe((data) => {
      this.mode = data['mode']
    })
  }
  isInstitution = () => this.courseId === '' && this.mode === 'institution'

  navigateToDetail = (id:string|undefined) => {
    if(this.isInstitution()) this.router.navigate(['instituciones', this.entity?.id])
    if(!this.isInstitution()) this.router.navigate(['cursos', id])
  }
  goToButtonText=() => this.isInstitution() ? 'Ver cursos' : 'Más Detalles'
}
