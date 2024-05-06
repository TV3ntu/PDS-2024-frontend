// Creame mocks para las instituciones, cursos y assignments
// No comentes, crea los mocks!
import { Institution } from '../models/institution'
import { Course } from '../models/course'
import { Assignment } from '../models/assignment'

// Crea los mocks, puede stomar de ejmplo los que agregué en los services
// Crea mocks de assignments genéricos

export const assignments: Assignment[] = [
    new Assignment("1","09:00","10:00","lunes",20,false,1500),
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
    new Course("6","Curso de Java","Java","Aprende Java desde cero","https://w0.peakpx.com/wallpaper/281/257/HD-wallpaper-java-logo.jpg",assignments),
    new Course("7","Curso de C#","C#","Aprende C# desde cero","https://i.redd.it/nbc8i22ia3091.png",assignments),
    new Course("8","Curso de C++","C++","Aprende C++ desde cero","https://w0.peakpx.com/wallpaper/668/259/HD-wallpaper-c-logo-white-silk-texture-c-emblem-programming-language-c-silk-background.jpg",assignments),
    new Course("9","Curso de Ruby","Ruby","Aprende Ruby desde cero","data:image/png;base64,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",assignments),
    new Course("10","Curso de PHP","PHP","Aprende PHP desde cero","https://cache.desktopnexus.com/thumbseg/23/23333-bigthumbnail.jpg",assignments),
    new Course("16","Curso de PHP","PHP","Aprende PHP desde cero","https://cache.desktopnexus.com/thumbseg/23/23333-bigthumbnail.jpg",assignments),
    new Course("3","Curso de Vue","Vue","Aprende Vue desde cero","https://crisp.chat/static/blog/content/images/size/w2000/2023/03/migrar-vuejs.jpeg",assignments),
    new Course("5","Curso de Python","Python","Aprende Python desde cero","https://wallpapercave.com/wp/wp7685924.jpg",assignments),
    new Course("15","Curso de R","R","Aprende Python desde cero","https://c4.wallpaperflare.com/wallpaper/500/828/20/rust-code-logo-programming-language-wallpaper-preview.jpg",assignments),
    new Course("11","Curso de Linux","Linux","Aprende Linux desde cero","https://images4.alphacoders.com/841/84136.jpg",assignments),
    new Course("12","Curso de Windows","Windows","Aprende Windows desde cero","https://wallpapercg.com/media/ts_2x/5768.webp",assignments),
    new Course("13","Curso de Mac","Mac","Aprende Mac desde cero","https://www.muycomputer.com/wp-content/uploads/2020/08/macOSBigSur.jpg",assignments),
    new Course("14","Curso de Android","Android","Aprende Android desde cero","https://wallpaperaccess.com/full/1650612.jpg",assignments),


]

export const institutions: Institution[] = [
    new Institution("1","Institución Frontend","Frontend","AngularInstitute of UNSAM, the M is for Masachusets","https://programmerblog.net/wp-content/uploads/2021/02/what-is-front-end-development-3.png",courses.slice(0,2)),
    new Institution("2","institución Backend","Backend","Backend Institute","https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/167120044/original/beef562e48eac77b71c87cb2c998a386208fe02b/be-your-awesome-nodejs-backend-developer.jpg",courses.slice(2,8)),
    new Institution("3","Institucion FullStack","FullStack","VueInstitute","https://e1.pxfuel.com/desktop-wallpaper/574/84/desktop-wallpaper-net-full-stack-developer-full-stack.jpg",courses.slice(8,10)),
    new Institution("4","Institución de Datos","Datos","NodeInstitute","https://t4.ftcdn.net/jpg/02/62/17/37/360_F_262173764_3sxll45SOaGP5uEC7PukV3LHOB7H8dp2.jpg",courses.slice(9,12)),
    new Institution("5","Institución de SO","Sistemas Operativos","Institución de educación de sistemas operativos  ","https://e1.pxfuel.com/desktop-wallpaper/58/880/desktop-wallpaper-operating-systems-systems.jpg",courses.slice(12,16))
]

