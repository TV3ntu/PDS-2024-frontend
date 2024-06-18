import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subscribe-modal',
  templateUrl: './subscribe-modal.component.html',
  styleUrls: ['./subscribe-modal.component.css']
})
export class SubscribeModalComponent {
  @Input() credits?: number
  @Input() price?: number
  @Output() subscribe = new EventEmitter()
  @Output() closeModal = new EventEmitter()
  showModal: boolean = false
  
  toggleShowModal(){
    this.showModal = !this.showModal
  }

  checkCredits(){
    return this.credits! >= this.price!
  }

  calculateCredits(){
    return this.credits! - this.price!
  }

  subscribeEvent() {
    this.subscribe.emit()
  }

  closeModalEvent(){
    this.closeModal.emit()
  }
}
