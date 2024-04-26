
export class Assignment{
    id: string
    startTime: Date
    endTime: Date
    day: string
    quotas: number
    isActive: boolean
    price: number
    constructor(id:string, startTime: Date, endTime: Date, day: string,
        quotas: number,isActive:boolean,price: number){
        this.id= id
        this.startTime=startTime
        this.endTime = endTime
        this.day = day
        this.quotas = quotas
        this.isActive = isActive
        this.price = price
    }

    join(){
        console.log("You've joined to course ")
    }

    leave(){
        console.log("You've left from course ")
    }
}