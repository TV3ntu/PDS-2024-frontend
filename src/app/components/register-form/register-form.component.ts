import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';
import {NewUser} from "../../models/user";
import { catchError } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  newUser: NewUser = new NewUser('','','','')
  showLoader = false
  constructor(private router: Router, private userService: UserService, private notificationService: NotificationService){}

  onSubmit() {
    this.showLoader = true
    this.userService.create(this.newUser)
    .pipe(
      catchError((error) => {
        console.log(error)
        error.error.status = 401
        this.showLoader = false
        return this.notificationService.handleError(error)
      })
    )
    .subscribe(() => {
      this.showLoader = false
      this.notificationService.notify(200, 'El usuario se registro exitosamente');
      this.router.navigate(['/ingresar']);
    })
  }
}
