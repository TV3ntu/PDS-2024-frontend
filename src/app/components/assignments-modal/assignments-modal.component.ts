import {Component, Input} from '@angular/core';
import {Assignment} from "../../models/assignment";
import {Course} from "../../models/course";
import {AssignmentService} from "../../services/assignment/assignment.service";

@Component({
  selector: 'app-assignments-modal',
  templateUrl: './assignments-modal.component.html',
  styleUrls: ['./assignments-modal.component.css']
})
export class AssignmentsModalComponent {
  showModal: boolean = false;
  @Input() course!: Course | undefined
  assignments!: Assignment[]

  constructor(assigmentService: AssignmentService) {
    this.setAssignments()
  }

  toggleModal() { this.showModal = !this.showModal }

  setAssignments() {
    // TODO: Llamar al service para obtener los assigments del curso dado
    this.assignments = [
      new Assignment("1", "12:45", "13:45","12/05/2024",13, true, 12000),
      new Assignment("2", "17:30", "18:30","02/06/2024",2, true, 12000),
      new Assignment("3", "13:20", "14:20","10/08/2024",4, true, 12000),
      new Assignment("4", "09:10", "10:10","01/04/2024",8, true, 12000),
      new Assignment("5", "18:00", "19:00","03/09/2024",10, true, 12000)
    ]
  }
}
