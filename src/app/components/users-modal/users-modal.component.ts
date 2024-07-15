import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BasicUser, User} from "../../models/user";

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.css']
})
export class UsersModalComponent {
  @Input() users: BasicUser[] = [];
  @Output() closeModalEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
