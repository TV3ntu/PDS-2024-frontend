import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[]

  constructor() {
    this.courses = [
      new Course("1","Curso de Angular","Angular","Aprende Angular desde cero","https://wallpapers.com/images/hd/angular-js-logo-in-gray-7mrokd29izt1eyog.jpg"),
      new Course("2","Curso de React","React","Aprende React desde cero","https://e1.pxfuel.com/desktop-wallpaper/556/915/desktop-wallpaper-how-to-install-reactjs-frontend.jpg"),
      new Course("3","Curso de Vue","Vue","Aprende Vue desde cero","https://crisp.chat/static/blog/content/images/size/w2000/2023/03/migrar-vuejs.jpeg"),
      new Course("4","Curso de Node","Node","Aprende Node desde cero","https://wallpapercave.com/wp/wp5070716.jpg"),
      new Course("5","Curso de Python","Python","Aprende Python desde cero","https://wallpapercave.com/wp/wp7685924.jpg")
    ]
  }

  getById = (id:string):Observable<Course | undefined> => of(this.courses.find(c => c.id == id))

  getAll = ():Observable<Course[]> => of(this.courses)

  getByCategory = (category:string):Course[] => this.courses.filter(c => c.category == category)

}
