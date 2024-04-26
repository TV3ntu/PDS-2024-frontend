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
    new Course("4","Curso de Node","Node","Aprende Node desde cero","https://wallpapercave.com/wp/wp5070716.jpg",assignments),
    new Course("6","Curso de Java","Java","Aprende Java desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("7","Curso de C#","C#","Aprende C# desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("8","Curso de C++","C++","Aprende C++ desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("9","Curso de Ruby","Ruby","Aprende Ruby desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("10","Curso de PHP","PHP","Aprende PHP desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("16","Curso de PHP","PHP","Aprende PHP desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("3","Curso de Vue","Vue","Aprende Vue desde cero","https://crisp.chat/static/blog/content/images/size/w2000/2023/03/migrar-vuejs.jpeg",assignments),
    new Course("5","Curso de Python","Python","Aprende Python desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("15","Curso de R","R","Aprende Python desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("11","Curso de Linux","Linux","Aprende Linux desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("12","Curso de Windows","Windows","Aprende Windows desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("13","Curso de Mac","Mac","Aprende Mac desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("14","Curso de Android","Android","Aprende Android desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),


]

export const institutions: Institution[] = [
    new Institution("1","Institución Frontend","Frontend","AngularInstitute of UNSAM, the M is for Masachusets","https://wallpapers.com/images/hd/angular-js-logo-in-gray-7mrokd29izt1eyog.jpg",courses.slice(0,2)),
    new Institution("2","institución Backend","Backend","ReactInstitute","https://e1.pxfuel.com/desktop-wallpaper/556/915/desktop-wallpaper-how-to-install-reactjs-frontend.jpg",courses.slice(2,8)),
    new Institution("3","Institucion FullStack","FullStack","VueInstitute","https://crisp.chat/static/blog/content/images/size/w2000/2023/03/migrar-vuejs.jpeg",courses.slice(8,10)),
    new Institution("4","Institución de Datos","Datos","NodeInstitute","https://wallpapercave.com/wp/wp5070716.jpg",courses.slice(9,12)),
    new Institution("5","Institución de SO","Sistemas Operativos","PythonInstitute","https://wallpapercave.com/wp/wp7685924.jpg",courses.slice(12,16))
]

