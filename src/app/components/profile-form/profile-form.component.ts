import {Component, Input} from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {
  @Input() user!: User | null
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    if(!this.userService.isLogged()) {
      this.router.navigate(['/ingresar'])
    }else{

      this.user = this.userService.getLoggedUser()
    }
  }

  guardarUsuario() {
    console.log(this.user)
      // TODO: Guardar User
  }
}
