import { Entity } from "./entity"

export class Course extends Entity{

    subscribe(){
        console.log("You've subscribed to course: " + this.title)
    }

    unsubscribe(){
        console.log("You've unsubscribed from course: " + this.title)
    }
}