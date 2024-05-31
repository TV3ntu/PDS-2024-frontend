import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { AssignmentService } from 'src/app/services/assignment/assignment.service'; 
import { Schedule } from 'src/app/models/schedule';
import { catchError } from 'rxjs';


interface NewAssignment{
  id:string
  quantityAvailable: number
  isActive: boolean
  price: number
  startDate: Date
  endDate: Date
  days:string[]
  startTime: Date
  endTime: Date
  recurrenceWeek: string
  listDates:string[]
  schedule: Schedule

}
@Component({
  selector: 'app-assignment-page',
  templateUrl: './assignment-page.component.html',
  styleUrls: ['./assignment-page.component.css']
})
export class assignmentPageComponent {
  @ViewChild('assignmentForm') assignmentForm!: NgForm
  errorMessage: string = ''
  mondaySelected: boolean = false;
  tuesdaySelected: boolean = false;
  wednesdaySelected: boolean = false;
  thursdaySelected: boolean = false;
  fridaySelected: boolean = false;
  saturdaySelected: boolean = false;
  sundaySelected: boolean = false;


  assignment: NewAssignment = {
    id:'',
    quantityAvailable: 0,
    isActive:true, 
    price: 0,
    startDate: new Date("01-01-1999"),
    endDate: new Date("01-01-1999"),
    days:[],
    startTime: new Date("00:00:00"),
    endTime: new Date("00:00:00"),
    recurrenceWeek:'',
    listDates:[],
    schedule:new Schedule([],'','','','','',[])
  }

  constructor(private router: Router,private assignmentService:AssignmentService,private notificationService: NotificationService) { }

  create(e: Event){
    this.errorMessage = ''
    this.setWeekDays()
    this.setSchedule
    console.log(e)
    console.log(this.assignment)
    this.assignmentService.create(this.assignment)
    .pipe(
      catchError((error) => {
        console.log(error)
        this.errorMessage = error.message
        error.error.status = 401
        error.error.message = 'Usuario o contraseña incorrectos'
        return this.notificationService.handleError(error)
      })
    )
  }

  setWeekDays(){
    if(this.mondaySelected) this.assignment.days.push('MONDAY')
    if(this.tuesdaySelected) this.assignment.days.push('TUESDAY')
    if(this.wednesdaySelected) this.assignment.days.push('WEDNESDAY')
    if(this.thursdaySelected) this.assignment.days.push('THURSDAY')
    if(this.fridaySelected) this.assignment.days.push('FRIDAY')
    if(this.saturdaySelected) this.assignment.days.push('SATURDAY')
    if(this.sundaySelected) this.assignment.days.push('SUNDAY')
  }

  setSchedule(){
    this.assignment.schedule = new Schedule(this.assignment.days,String(this.assignment.startTime),String(this.assignment.endTime),String(this.assignment.startDate),String(this.assignment.endDate),this.assignment.recurrenceWeek,this.assignment.listDates)
  }
    
  }
