export class Entity{
    id: string
    title: string
    category: string
    image: string
    description: string
    constructor(id:string, title: string, category: string, description: string, image: string){
        this.id= id
        this.title=title
        this.category = category
        this.description = description
        this.image = image
    }
}