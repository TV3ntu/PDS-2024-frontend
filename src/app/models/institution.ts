export class Institution{
    id: String
    name: String
    category: String
    image: string
    description: string
    constructor(id:String, name: string, category: string, description: string, image: string){
        this.id= id
        this.name=name
        this.category = category
        this.description = description
        this.image = image
    }
}