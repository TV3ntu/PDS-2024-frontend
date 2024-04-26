import { assignments } from './../../mocks/mocks';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Assignment} from "../../models/assignment";
import {Course} from "../../models/course";
import {AssignmentService} from "../../services/assignment/assignment.service";
import { Entity } from 'src/app/models/entity';

@Component({
  selector: 'app-assignments-modal',
  templateUrl: './assignments-modal.component.html',
  styleUrls: ['./assignments-modal.component.css']
})
export class AssignmentsModalComponent {
  @Input() assignments: Assignment[] | undefined
  @Input() showModal: boolean = false
  @Output() closeModal = new EventEmitter()
  /* assignments!: Assignment[] */

  constructor(assigmentService: AssignmentService) {
    this.setAssignments()
    console.log(this.getAllDays())
  }

  // Quiero que no se repitan los valores de day
  getAllDays = () => this.assignments?.map(a => a.day).filter((value, index, self) => self.indexOf(value) === index)

  getAllTimes = (day:string) => this.assignments?.filter(a => a.day === day).map(a => {return {startTime:a.startTime, endTime:a.endTime}})

  closeModalEvent() {
    console.log('closeModalEvent')
    this.closeModal.emit()
  }

  setAssignments() {
    // TODO: Llamar al service para obtener los assigments del curso dado
    /* console.log('setAssignments', this.course) */
    /* this.assignments = this.course?.children || [] */
  }
}
