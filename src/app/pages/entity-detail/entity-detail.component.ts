import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Entity } from 'src/app/models/entity';
import { CourseService } from 'src/app/services/course/course.service'
import { InstitutionService } from 'src/app/services/institution/institution.service'
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})
export class EntityDetailComponent {
  entity: Entity | undefined
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
        children: course.assignments
      }
      this.entity = transformedCourse
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
