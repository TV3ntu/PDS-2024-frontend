import { Assignment } from "./assignment"
import { Entity } from "./entity"

export class Course extends Entity{
    institutionId: string = ''

    subscribe(){
        console.log("You've subscribed to course: " + this.title)
    }

    unsubscribe(){
        console.log("You've unsubscribed from course: " + this.title)
    }

    override children: Assignment[]

    constructor(id:string, title: string,name:string, description: string, image: string,category:string, children: Assignment[]){
        super(id, title,category, description,image)
        this.children = children
    }
}