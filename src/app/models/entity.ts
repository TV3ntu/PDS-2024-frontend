export class Entity{
    id: string
    title: string
    name:string
    category: string
    image: string
    description: string
    children: any
    constructor(id:string, title: string,name:string ,category: string, description: string, image: string){
        this.id= id
        this.title=title
        this.name=name
        this.category = category
        this.description = description
        this.image = image
    }
}