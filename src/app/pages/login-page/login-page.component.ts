import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private userService:UserService) { }

  login() {
    this.userService.login(this.user.email, this.user.password)
  }
}
