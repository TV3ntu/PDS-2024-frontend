export class Assignment{
    id: string
    startTime: string
    endTime: string
    date: string
    quotas: number
    isActive: boolean
    price: number

    constructor(id:string, startTime: string, endTime: string, date: string,
        quotas: number,isActive:boolean,price: number){
        this.id= id
        this.startTime=startTime
        this.endTime = endTime
        this.date = date
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
