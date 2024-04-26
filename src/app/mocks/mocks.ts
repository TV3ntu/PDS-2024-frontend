// Creame mocks para las instituciones, cursos y assignments
// No comentes, crea los mocks!
import { Institution } from '../models/institution'
import { Course } from '../models/course'
import { Assignment } from '../models/assignment'

// Crea los mocks, puede stomar de ejmplo los que agregué en los services
// Crea mocks de assignments genéricos

export const assignments: Assignment[] = [
    new Assignment("1","09:00","10:00","lunes",20,true,1500),
    new Assignment("2","10:00","11:00","martes",20,true,1500),
    new Assignment("3","11:00","12:00","miercoles",20,true,1500),
    new Assignment("4","12:00","13:00","jueves",20,true,1500),
    new Assignment("5","13:00","14:00","viernes",20,true,1500),
    new Assignment("6","14:00","15:00","sabado",20,true,1500),
    new Assignment("7","15:00","16:00","domingo",20,true,1500),
    new Assignment("8","16:00","17:00","lunes",20,true,1500),
    new Assignment("9","17:00","18:00","martes",20,true,1500),
    new Assignment("10","18:00","19:00","miercoles",20,true,1500),
    new Assignment("11","19:00","20:00","jueves",20,true,1500),
    new Assignment("12","20:00","21:00","viernes",20,true,1500),
    new Assignment("13","21:00","22:00","sabado",20,true,1500),
    new Assignment("14","22:00","23:00","domingo",20,true,1500)
]

export const courses: Course[] = [
    new Course("1","Curso de Angular","Angular","Aprende Angular desde cero","https://wallpapers.com/images/hd/angular-js-logo-in-gray-7mrokd29izt1eyog.jpg",assignments),
    new Course("2","Curso de React","React","Aprende React desde cero","https://e1.pxfuel.com/desktop-wallpaper/556/915/desktop-wallpaper-how-to-install-reactjs-frontend.jpg",assignments),
    new Course("3","Curso de Vue","Vue","Aprende Vue desde cero","https://crisp.chat/static/blog/content/images/size/w2000/2023/03/migrar-vuejs.jpeg",assignments),
    new Course("4","Curso de Node","Node","Aprende Node desde cero","https://wallpapercave.com/wp/wp5070716.jpg",assignments),
    new Course("5","Curso de Python","Python","Aprende Python desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments)
]

export const institutions: Institution[] = [
    new Institution("1","Institución Angular","Aprende Angular desde cero","AngularInstitute","https://wallpapers.com/images/hd/angular-js-logo-in-gray-7mrokd29izt1eyog.jpg",courses),
    new Institution("2","institución React","Aprende React desde cero","ReactInstitute","https://e1.pxfuel.com/desktop-wallpaper/556/915/desktop-wallpaper-how-to-install-reactjs-frontend.jpg",courses),
    new Institution("3","Institucion Vue","Aprende Vue desde cero","VueInstitute","https://crisp.chat/static/blog/content/images/size/w2000/2023/03/migrar-vuejs.jpeg",courses),
    new Institution("4","Institución de Node","Aprende Node desde cero","NodeInstitute","https://wallpapercave.com/wp/wp5070716.jpg",courses),
    new Institution("5","Institución de Python","Aprende Python desde cero","PythonInstitute","https://wallpapercave.com/wp/wp7685924.jpg",courses)
]

