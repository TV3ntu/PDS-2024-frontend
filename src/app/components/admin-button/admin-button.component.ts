import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-button',
  templateUrl: './admin-button.component.html',
  styleUrls: ['./admin-button.component.css']
})
export class AdminButtonComponent {
  @Input() type: string = ""
  @Input() style: string = ""
  @Input() icon: string = ""


  constructor(private router:Router) { }
  isButton(){
    return this.style == 'button'
  }

  goToAdmin(){
    if(this.type == 'institucion'){
      this.router.navigate(['/admin/institucion/agregar'])
    }
    if(this.type == 'curso'){
      this.router.navigate(['/admin/curso/agregar'])
    }
    if(this.type == 'clase'){
      this.router.navigate(['/admin/clase/agregar'])
    }
  }
}
