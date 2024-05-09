export class User {
    id: string
    name: string
    lastName: string
    email: string
    image: string
    constructor(id:string, name: string, lastName: string, email: string,image:string){

        this.id= id
        this.name=name
        this.lastName = lastName
        this.email = email
        this.image = image
    }
}
