export class Entity{
    id: string
    title: string
    category: string
    image: string
    description: string
    children: any
    averageRating: number
    constructor(id:string, title: string ,category: string, description: string, image: string){
        this.id= id
        this.title=title
        this.category = category
        this.description = description
        this.image = image
        this.averageRating = 0
    }
}