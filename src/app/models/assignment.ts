import { Schedule } from "./schedule"

export class Assignment{
    id: string
    quantityAvailable: number
    isActive: boolean
    price: number
    schedule: Schedule
    constructor(
        id:string,
        quantityAvailable: number,
        isActive:boolean,
        price: number,
        schedule: Schedule
    ){
        this.id= id
        this.quantityAvailable = quantityAvailable
        this.isActive = isActive
        this.price = price
        this.schedule = schedule
    }

    join(){
        console.log("You've joined to course ")
    }

    leave(){
        console.log("You've left from course ")
    }
}
