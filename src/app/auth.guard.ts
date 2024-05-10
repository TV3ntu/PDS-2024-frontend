import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { UserService } from './services/user/user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private userService:UserService) {}

  canActivate(): boolean {
    // TODO: Implement your authentication logic here
    /* if (localStorage.getItem('userId')) {
      return true
    }
    this.router.navigate(['/login'])
    return false */
    if(!this.userService.isLogged()) {
      this.router.navigate(['/ingresar'])
      return false
    }
    return true
  }
}