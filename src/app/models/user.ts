export class User {
    id: string
    name: string
    lastName: string
    email: string
    image: string
    isAdmin: boolean

    constructor(id:string, name: string, lastName: string, email: string, image:string, isAdmin: boolean) {
        this.id= id
        this.name=name
        this.lastName = lastName
        this.email = email
        this.image = image
        this.isAdmin = false
    }
}
