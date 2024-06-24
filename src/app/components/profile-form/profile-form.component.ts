import {Component, Input} from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  @Input() user!: User
  constructor(private userService:UserService,private router:Router,private notificationService:NotificationService) { }

  showCreditModal = false
  creditsToAdd = 0
  showDeleteUserModal=false
  showModal() {
    this.showCreditModal = true
  }
  closeModal() {
    this.showCreditModal = false
  }

  deleteUserModal() {
    this.showDeleteUserModal = true
  }
  closeDeleteUserModal() {
    this.showDeleteUserModal = false
  }


  addCredits(form:NgForm) {
    if(form.valid){
      this.user.credits += this.creditsToAdd
      this.saveUser()
      this.closeModal()
    }
  }

  ngOnInit() {
    if(!this.userService.isLogged()) {
      this.router.navigate(['/ingresar'])
    }else{
      this.userService.getUserLoggedData().subscribe(user => {
        this.user = user
        console.log(user)
      })
      /* this.user = this.userService.getLoggedUser() */
    }
  }

  saveUser() {
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

  deleteUser() {
    console.log(this.user)
    console.log(this.userService.deleteAccount(this.user))
    this.userService.deleteAccount(this.user)
    .pipe(
      catchError((error) => {
        console.log(error)
        error.error.status = 401
        error.error.message = 'No se pudo eliminar el usuario'
        return this.notificationService.handleError(error)
      })

    )
  .subscribe(user => {
      console.log(user)
      this.userService.localLogOut()
      this.notificationService.notify(200, 'Usuario eliminado')
      this.router.navigate(['/'])
      })
      // TODO: Guardar User
    }
}
