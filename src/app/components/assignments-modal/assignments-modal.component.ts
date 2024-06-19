import { NotificationService } from './../../services/notification/notification.service';
import { UserService } from './../../services/user/user.service';
import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Assignment} from "../../models/assignment"
import {Course} from "../../models/course"
import {AssignmentService} from "../../services/assignment/assignment.service"
import { Entity } from 'src/app/models/entity'
import {MatCalendarCellClassFunction} from '@angular/material/datepicker'
import { catchError } from 'rxjs';

@Component({
  selector: 'app-assignments-modal',
  templateUrl: './assignments-modal.component.html',
  styleUrls: ['./assignments-modal.component.css']
})
export class AssignmentsModalComponent {
  @Input() assignments: Assignment[] = []
  @Input() showModal: boolean = false
  @Output() closeModal = new EventEmitter()
  selectedDate: Date = new Date()
  userAssignments: string[] = []
  constructor(private userService: UserService,private notificationService:NotificationService) {
    this.notificationService.notification$.subscribe(()=>{
      this.updateAssignments()
    })

   }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Solo aplicar el estilo en la vista de mes
    if (view !== 'month') return ''

    // Usar getFullYear(), getMonth() y getDate() para asegurarse de que la fecha es local
    const dateCheck = new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate())

    if(this.checkSubscribed(this.userAssignments,dateCheck)) return 'subscribed-date'
    if(this.checkAssignments(this.assignments,dateCheck)) return 'special-date'

    return ''
  }

  getAllTimes = () => {
    // Asegurarse de que la fecha seleccionada se maneja como local
    const weekday = this.getWeekDay(this.selectedDate)

    return this.assignments.filter(a => a.schedule.days.includes(weekday))
    //Sort by time and id
    .sort((a,b) => {
      if(a.schedule.startTime > b.schedule.startTime) return 1
      if(a.schedule.startTime < b.schedule.startTime) return -1
      return a.id > b.id ? 1 : -1
    })
  }
  hasTimes = () => {
    console.log(this.getAllTimes()!.length > 0)
    return this.getAllTimes()!.length > 0}

  updateSchedule(event: any){
    this.selectedDate = event
  }
  spanishSelectedDate = () => this.selectedDate.toLocaleDateString('es-ES')

  closeModalEvent() {
    this.closeModal.emit()
  }

  getWeekDay = (date: Date) => {
    const days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
    return days[date.getDay()]
  }

  compareWeekDays = (day1: string, listDays: string[]) => listDays.some(day => day === day1)

  checkAssignments = (assignments:Assignment[],dateToCheck:Date) => {
    return assignments.some(
      assignment => {
        const startDate = new Date(assignment.schedule.startDate)
        const endDate = new Date(assignment.schedule.endDate)

        const day = this.getWeekDay(dateToCheck)

        return this.compareWeekDays(day,assignment.schedule.days) && dateToCheck >= startDate && dateToCheck <= endDate && dateToCheck >= new Date()
    })
  }



  ngOnInit() {
    this.updateAssignments()
  }

  updateAssignments = () => {
    if(this.userService.getLoggedUser()){
      this.userService.getSuscribedCourses(this.userService.getLoggedUser()!.id)
        .pipe(
          catchError((error) => {
            console.log(error)
            error.error.status = 401
            error.error.message = 'No se pudieron obtener las clases del usuario'
            return this.notificationService.handleError(error)
          })
        )
        .subscribe(courses => {
          this.userAssignments = courses.map(c => c.assignmentId)
        })
    }
  }

  isSuscribed = (assignmentId: string) =>  this.userAssignments.some(id => id === assignmentId)

  getAssignmentId = (date:Date) => {
    const weekday = this.getWeekDay(date)
    const assignment = this.assignments.find(a => a.schedule.days.includes(weekday))
    return assignment ? assignment.id : ''
  }

  checkSubscribed = (assignments:string[],dateToCheck:Date) =>{
    const assignmentId = this.getAssignmentId(dateToCheck)
    return assignments.some(
      assignment => {
        return assignment === assignmentId
    }) && dateToCheck >= new Date()
  }
}
