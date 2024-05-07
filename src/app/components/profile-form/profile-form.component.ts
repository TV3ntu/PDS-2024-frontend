import {Component, Input} from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  @Input() user!: User

  ngOnInit() {
    // TODO: Si el user esta logeado, inicializar this.user con los valores correspondientes
    this.user = new User('', '', '', '');
  }

  guardarUsuario() {
      // TODO: Guardar User
  }
}
