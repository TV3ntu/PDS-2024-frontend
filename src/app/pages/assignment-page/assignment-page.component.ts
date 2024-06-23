import { Component, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { AssignmentService } from 'src/app/services/assignment/assignment.service';
import { Schedule } from 'src/app/models/schedule';
import { catchError } from 'rxjs';
import { DatePipe } from '@angular/common';
import { formatDate } from "@angular/common";


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
  atLeastOneDaySelected: boolean=false;
  //flag to don't display error when enter at page
  newTimeOnPage: boolean=true
  courseId: string = ''


  assignment: NewAssignment = {
    id:'',
    quantityAvailable: 10,
    isActive:true,
    price: 100,
    startDate: new Date(),
    endDate: new Date(),
    days:[],
    startTime:new Date("00:00:00"),
    endTime: new Date("00:00:00"),
    recurrenceWeek:'',
    listDates:[],
    schedule:new Schedule([],'','','','','',[]),
  }

  constructor(private route: ActivatedRoute, private router: Router,
              private assignmentService:AssignmentService, 
              private notificationService: NotificationService,
              private datePipe: DatePipe
            ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('courseId')!;
    //para que no se pueda crear un assigment para el mismo dia
    this.assignment.startDate.setDate(this.assignment.startDate.getDate() + 1)
        // para que almenos el curso cierre un dia despues que el dia de creado
    this.assignment.endDate.setDate(this.assignment.endDate.getDate() + 2)
  }

  daySelectedCheck() {
    this.newTimeOnPage=false
    this.atLeastOneDaySelected = this.mondaySelected || this.tuesdaySelected || this.wednesdaySelected || this.thursdaySelected || this.fridaySelected || this.saturdaySelected || this.sundaySelected
  }

  create(e: Event){
    this.errorMessage = ''
    this.setWeekDays()
    this.setSchedule()
    console.log(e)
    console.log(this.assignment)

    this.assignmentService.create(this.assignment,this.courseId)
      .pipe(
        catchError((error) => {
          console.log(error)
          error.error.status = 401
          return this.notificationService.handleError(error)
        })
      )

      .subscribe((data)=>{
        this.notificationService.notify(200, "Horario creado!")
        this.router.navigate(['/admin/curso/' + this.courseId])
      })
  }

  setWeekDays(){
    if(this.mondaySelected) this.assignment.days.push('MONDAY')
    if(this.tuesdaySelected) this.assignment.days.push('TUESDAY')
    if(this.wednesdaySelected) this.assignment.days.push('WEDNESDAY')
    if(this.thursdaySelected) this.assignment.days.push('THURSDAY')
    if(this.fridaySelected) this.assignment.days.push('FRIDAY')
    if(this.saturdaySelected) this.assignment.days.push('SATURDAY')
    if(this.sundaySelected) this.assignment.days.push('SUNDAY')
    new Set(this.assignment.days)
  }

  setSchedule(){
    this.assignment.schedule = new Schedule(this.assignment.days,String(this.assignment.startTime),String(this.assignment.endTime),String(this.assignment.startDate),String(this.assignment.endDate),this.assignment.recurrenceWeek,this.assignment.listDates)
    console.log(this.assignment.schedule)
  }

  checkQuantityValue(){
    return this.assignment.quantityAvailable==0
  }

  checkPriceValue(){
    return this.assignment.price==0
  }


  minEndDateValue(){
    //assign the startDate like the minimun value possible in the form
    return this.datePipe.transform(this.assignment.endDate, 'yyyy-MM-dd')
  }

  minStartDateValue(){
    //assign the current date how the minimun value possible in the form
      let tomorrowDate= new Date()  
      tomorrowDate.setDate(tomorrowDate.getDate() + 1)
      return this.datePipe.transform(tomorrowDate, 'yyyy-MM-dd')     
  }

  checkStartDateValue(){
    let startDateInput= new Date(this.assignment.startDate)
    let currentDate= new Date()
    //devuelve si la fecha de comienzo es anterior a la fecha actual
    return startDateInput<=currentDate
  }

  checkEndDateValue(){
    let startDateInput= new Date(this.assignment.startDate)
    let endDateInput= new Date(this.assignment.endDate)
    //devuelve si la fecha final es anterior a la decha de comienzo
    return endDateInput<=startDateInput
  }

  minEndTimeValue(){
    //devuelve si la fecha de comienzo es posterior a la decha de comienzo
    return this.assignment.startTime>this.assignment.endTime
  }
}
