import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Entity } from 'src/app/models/entity';
import { CourseService } from 'src/app/services/course/course.service'
import { InstitutionService } from 'src/app/services/institution/institution.service'
import { NotificationService } from 'src/app/services/notification/notification.service';
import {Review} from "../../models/review";

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})
export class EntityDetailComponent {
  entity: Entity | undefined
  courseReviews: Review[] = []
  courseRating: number = 0
  courseId: string = ''
  institutionId: string = ''
  showAssignmentsModal: boolean = false
  constructor(
    private courseService:CourseService,
    private institutionService: InstitutionService,
    private route:ActivatedRoute,
    private notificationService:NotificationService
  ){
    this.notificationService.notification$.subscribe(()=>{
      if(this.isInstitution()) this.getInstitution()
      if(!this.isInstitution()) this.getCourse()
    })
   }

  ngOnInit(){
    // Obtengo el modo de la entidad a mostrar

    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('courseId') || ''
      this.institutionId = params.get('institutionId') || ''
      console.log(this.isInstitution(),'courseId', this.courseId, 'institutionId', this.institutionId)
    })

    if(this.isInstitution()) this.getInstitution()

    if(!this.isInstitution()) this.getCourse()
  }

  isInstitution = () => this.institutionId !== '' && this.courseId === ''

  getCourse(): void {
    this.courseService.getById(this.courseId)
    .subscribe(course => {
      console.log(course)
      const transformedCourse = {
        ...course,
        title: course.title,
        name: '',
        children: course.assignments
      }
      this.entity = transformedCourse
      //this.courseReviews = transformedCourse.reviews
      //this.courseRating = transformedCourse.rating
      this.courseReviews = [ { id: '1', rating: 5, description: 'La experiencia en el curso fue increíble. Los materiales proporcionados fueron de alta calidad y el instructor siempre estuvo dispuesto a responder cualquier pregunta. La estructura del curso estaba bien organizada, lo que facilitó mucho el aprendizaje de los conceptos más complicados. Definitivamente, recomendaría este curso a cualquiera que quiera aprender sobre programación.', courseId: '1', name: 'Juan', lastName: 'Gomez' }, { id: '2', rating: 4, description: 'Este curso superó mis expectativas. No solo cubrió todos los aspectos fundamentales, sino que también incluyó proyectos prácticos que ayudaron a consolidar el conocimiento adquirido. La plataforma era fácil de usar y los recursos adicionales, como los foros de discusión y las sesiones de tutoría en vivo, fueron muy útiles. Un gran curso para cualquier persona interesada en mejorar sus habilidades en programación.', courseId: '1', name: 'Pedro', lastName: 'Perez'} ]
      this.courseRating = 3.7
    })
  }

  getInstitution():void{
    this.institutionService.getById(this.institutionId)
    .subscribe(institution => {
      const transformedInstitution = {
        ...institution,
        title: institution.name,
        children: institution.courses
      }
      this.entity = transformedInstitution
    })
  }
  hasChildren = () => {
    console.log(this.entity?.children)
    return this.entity?.children?.length > 0}

  openAssignmentsModal = () => {
    this.showAssignmentsModal = true
  }
  closeAssignmentsModal(){
    this.showAssignmentsModal = false
  }


}
