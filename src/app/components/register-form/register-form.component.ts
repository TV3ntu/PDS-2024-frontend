import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  errorMessage: string = ''
  form = {
    name: '',
    lastName: '',
    email: '',
    password: '',
  }

  constructor(private router: Router, private userService: UserService, private notificationService: NotificationService){}

  onSubmit() {
    //TODO: AGREGAR LLAMADO AL SERVICE PARA CREAR USUARIO + MANEJO DE ERRORES
    /*PARA EL CASO DE EXITO AGREGAR 
    this.notificationService.notify(200, 'El usuario se registro exitosamente')
      this.router.navigate(['/ingresar'])
    */
  }

}
