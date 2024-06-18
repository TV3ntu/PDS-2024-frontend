import { Reserve } from "./reserve"

export class User {
    id: string
    name: string
    lastName: string
    email: string
    image: string
    isAdmin: boolean
    nextClass: Reserve | null = null
    credits: number

    constructor(id:string, name: string, lastName: string, email: string, image:string, isAdmin: boolean, credits: number) {
        this.id= id
        this.name=name
        this.lastName = lastName
        this.email = email
        this.image = image
        this.isAdmin = false
        this.credits = credits
    }
}

export class NewUser {
  name: string
  lastName: string
  email: string
  password: string

  constructor(name: string, lastName: string, email: string, password:string) {
    this.name=name
    this.lastName = lastName
    this.email = email
    this.password = password
  }
}
