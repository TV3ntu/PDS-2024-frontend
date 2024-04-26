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
  @Input() course!: Entity | undefined
  @Input() showModal: boolean = false
  @Output() closeModal = new EventEmitter()
  assignments!: Assignment[]

  constructor(assigmentService: AssignmentService) {
    this.setAssignments()
  }

  /* toggleModal() { this.showModal = !this.showModal } */

  closeModalEvent() {
    console.log('closeModalEvent')
    this.closeModal.emit()
  }

  setAssignments() {
    // TODO: Llamar al service para obtener los assigments del curso dado
    this.assignments = this.course?.children || []
  }
}
