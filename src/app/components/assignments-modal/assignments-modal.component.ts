import { assignments } from './../../mocks/mocks'
import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core'
import {Assignment} from "../../models/assignment"
import {Course} from "../../models/course"
import {AssignmentService} from "../../services/assignment/assignment.service"
import { Entity } from 'src/app/models/entity'
import {MatCalendarCellClassFunction} from '@angular/material/datepicker'

@Component({
  selector: 'app-assignments-modal',
  templateUrl: './assignments-modal.component.html',
  styleUrls: ['./assignments-modal.component.css']
})
export class AssignmentsModalComponent {
  @Input() assignments: Assignment[] = []
  @Input() showModal: boolean = false
  @Output() closeModal = new EventEmitter()
  /* selectedDate: string = '' */
  selectedDate: Date = new Date()

  constructor() {
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Solo aplicar el estilo en la vista de mes
    if (view === 'month') {

      // Usar getFullYear(), getMonth() y getDate() para asegurarse de que la fecha es local
      const dateCheck = new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate()-1)

      // Comprobar si alguna de las fechas de 'assignments' coincide con 'dateCheck'
      const isSpecialDate = this.assignments?.some(assignment => {
        // También ajustar aquí para asegurar que se usa la fecha local
        const assignmentDate = new Date(assignment.date)
        const localAssignmentDate = new Date(assignmentDate.getFullYear(), assignmentDate.getMonth(), assignmentDate.getDate())
        return localAssignmentDate.getTime() === dateCheck.getTime()
      })

      // Devolver la clase CSS si es una fecha especial
      return isSpecialDate ? 'special-date' : ''
    }

    return ''  // No aplicar ninguna clase si no estamos en la vista de mes
  }
  // Quiero que no se repitan los valores de day
  getAllDays = () => this.assignments?.map(a => a.date).filter((value, index, self) => self.indexOf(value) === index)

  /* getAllTimes = (day:string) => this.assignments?.filter(a => a.date === day).map(a => {return {startTime:a.startTime, endTime:a.endTime, isActive:a.isActive}}) */
  getAllTimes = () => {
    // Asegurarse de que la fecha seleccionada se maneja como local
    const selectedYear = this.selectedDate.getFullYear();
    const selectedMonth = this.selectedDate.getMonth();
    const selectedDay = this.selectedDate.getDate();
    const dateString = `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${selectedDay.toString().padStart(2, '0')}`;
    /* console.log(dateString) */

    return this.assignments?.filter(a => {
      // Extraer la fecha de cada assignment y asegurarse de que también se maneja como local
      const assignmentDate = new Date(a.date);
      const assignmentYear = assignmentDate.getFullYear();
      const assignmentMonth = assignmentDate.getMonth();
      const assignmentDay = assignmentDate.getDate()+1;
      const assignmentDateString = `${assignmentYear}-${(assignmentMonth + 1).toString().padStart(2, '0')}-${assignmentDay.toString().padStart(2, '0')}`;
      // Comparar las fechas como cadenas para evitar problemas de zona horaria
      /* console.log(assignmentDateString ,dateString) */
      return assignmentDateString === dateString;
    }).map(a => ({
      startTime: a.startTime,
      endTime: a.endTime,
      isActive: a.isActive
    }));
  }
  hasTimes = () => {
    /* console.log(this.getAllTimes()!.length > 0) */
    return this.getAllTimes()!.length > 0
  }

  updateSchedule(event: any){
    this.selectedDate = event
    console.log('Evento',event,this.getAllTimes(),this.hasTimes())
  }
  spanishSelectedDate()
  {
    return this.selectedDate.toLocaleDateString('es-ES')
  }

  closeModalEvent() {
    this.closeModal.emit()
  }
}
