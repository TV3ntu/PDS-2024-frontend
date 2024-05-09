import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user = new User('1','Carlos','Gonzalez','carlos@mail.com')

  constructor(private router:Router) { }

  goTo(route: string){
    this.router.navigate([`/${route}`])
  }
}
