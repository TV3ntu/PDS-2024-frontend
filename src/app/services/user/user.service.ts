import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from 'src/app/models/user';
import { Course } from 'src/app/models/course';
import { courses } from 'src/app/mocks/mocks';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user= new User("1","Juan","Carlos","juancarlos@gmail.com","https://t4.ftcdn.net/jpg/02/62/17/37/360_F_262173764_3sxll45SOaGP5uEC7PukV3LHOB7H8dp2.jpg",courses)
  constructor(private http: HttpClient) {
    
  }

  Unsuscribe(course:Course){this.user.unsuscribe(course)}

}
