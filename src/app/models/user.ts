export class User {
    id: string
    name: string
    lastName: string
    email: string

    constructor(id:string, name: string, lastName: string, email: string){
        this.id= id
        this.name=name
        this.lastName = lastName
        this.email = email
    }
}