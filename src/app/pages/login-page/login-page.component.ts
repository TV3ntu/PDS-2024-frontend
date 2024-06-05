import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { UserService } from 'src/app/services/user/user.service';

interface UserLogin{
  email: string
  password: string
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  @ViewChild('loginForm') loginForm!: NgForm
  user: UserLogin = {email: '', password: ''}
  errorMessage: string = ''

  constructor(private router: Router,private userService:UserService,private notificationService: NotificationService) { }

  login(e:Event) {
    e.preventDefault()
    this.errorMessage = ''

    this.userService.login(this.user.email, this.user.password)
    .pipe(
      catchError((error) => {
        console.log(error)
        this.errorMessage = error.message
        error.error.status = 401
        error.error.message = 'Usuario o contraseña incorrectos'
        return this.notificationService.handleError(error)
      })
    )
    .subscribe(
      (response) => {
        console.log(response)
        this.notificationService.notify(200, 'Inicio de sesión exitoso')
        this.router.navigate(['/instituciones'])
      },
      (error) => {
        console.log(error)
      }
    )
  }

  goToRegister(){
    this.router.navigate(['/register'])
  }
}
