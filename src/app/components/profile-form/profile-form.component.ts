import {Component, Input} from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  @Input() user: User = new User('','','','','', false, 100)
  constructor(private userService:UserService,private router:Router,private notificationService:NotificationService) { }

  ngOnInit() {
    if(!this.userService.isLogged()) {
      this.router.navigate(['/ingresar'])
    }else{
      this.userService.getUserLoggedData().subscribe(user => {
        this.user = user
      })
      /* this.user = this.userService.getLoggedUser() */
    }
  }

  guardarUsuario() {
    console.log(this.user)
    this.userService.updateUser(this.user)
    .pipe(
      catchError((error) => {
        console.log(error)
        error.error.status = 401
        error.error.message = 'No se pudo actualizar usuario'
        return this.notificationService.handleError(error)
      })

    )
  .subscribe(user => {
      console.log(user)
      this.notificationService.notify(200, 'Usuario actualizado')
    })
      // TODO: Guardar User
  }
}
