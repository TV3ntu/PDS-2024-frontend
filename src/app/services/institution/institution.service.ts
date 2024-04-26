import { Injectable } from '@angular/core';
import { Institution } from 'src/app/models/institution';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  institutions: Institution[]

  constructor() {
    this.institutions = [
      new Institution("1","Institución Angular","Aprende Angular desde cero","AngularInstitute","https://wallpapers.com/images/hd/angular-js-logo-in-gray-7mrokd29izt1eyog.jpg"),
      new Institution("2","institución React","Aprende React desde cero","ReactInstitute","https://e1.pxfuel.com/desktop-wallpaper/556/915/desktop-wallpaper-how-to-install-reactjs-frontend.jpg"),
      new Institution("3","Institucion Vue","Aprende Vue desde cero","VueInstitute","https://crisp.chat/static/blog/content/images/size/w2000/2023/03/migrar-vuejs.jpeg"),
      new Institution("4","Institución de Node","Aprende Node desde cero","NodeInstitute","https://wallpapercave.com/wp/wp5070716.jpg"),
      new Institution("5","Institución de Python","Aprende Python desde cero","PythonInstitute","https://wallpapercave.com/wp/wp7685924.jpg")
    ]
  }
}
