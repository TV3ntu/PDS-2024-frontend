export class Course{
    id: string
    title: string
    description: string
    category: string
    image: string
    constructor(id: string, title: string, description: string, category: string, image: string){
        this.id = id
        this.title = title
        this.description = description
        this.category = category
        this.image = image
    }

    subscribe(){
        console.log("You've subscribed to course: " + this.title)
    }

    unsubscribe(){
        console.log("You've unsubscribed from course: " + this.title)
    }
}