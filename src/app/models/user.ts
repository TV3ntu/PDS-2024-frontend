import { Course } from "./course"

export class User{
    id: string
    name: string
    lastName: string
    email: string
    image: string
    courses: Course[]
    constructor(id:string, name: string, lastName: string, email: string,courses:[],image:string){
        this.id= id
        this.name=name
        this.lastName = lastName
        this.email = email
        this.image = image
        this.courses = courses
    }

    unsuscribe(course: Course){
        var indice = this.courses.indexOf(course); // obtenemos el indice del curso
        this.courses.splice(indice, 1)
    }
}