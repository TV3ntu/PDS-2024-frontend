import {Component, Input} from '@angular/core';
import { Entity } from '../../models/user';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  @Input() user?: Entity

  ngOnInit() {
    // TODO: Si el user esta logeado, inicializar this.user con los valores correspondientes
    this.user = new Entity('', '', '', '');
  }

  guardarUsuario() {
      console.log(this.user);
      // TODO: Guardar User
  }
}
