import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import {NewUser} from "../../models/user";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  newUser: NewUser = new NewUser('','','','')

  constructor(private router: Router, private userService: UserService, private notificationService: NotificationService){}

  onSubmit() {
    this.userService.create(this.newUser)
      .subscribe(() => {
        this.notificationService.notify(200, 'El usuario se registro exitosamente');
        this.router.navigate(['/ingresar']);
      },error => {
        this.notificationService.notify(500, error.error.message);
      })
  }
}
