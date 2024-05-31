import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-button',
  templateUrl: './admin-button.component.html',
  styleUrls: ['./admin-button.component.css']
})
export class AdminButtonComponent {
  @Input() type: string = ""
  @Input() style: string = ""
  @Input() icon: string = ""

  isButton(){
    return this.style == 'button'
  }
}
