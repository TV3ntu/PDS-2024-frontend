export class Schedule{
    days: string[]
    startTime: string
    endTime: string
    startDate: string
    endDate: string
    recurrenceWeeks: string
    listDates: string[]
    constructor(
        days:string[],
        startTime: string,
        endTime: string,
        startDate: string,
        endDate: string,
        recurrenceWeeks:string,
        listDates: string[]
    ){
        this.days= days
        this.startTime=startTime
        this.endTime = endTime
        this.startDate = startDate
        this.endDate = endDate
        this.recurrenceWeeks = recurrenceWeeks
        this.listDates = listDates
    }

    join(){
        console.log("You've joined to course ")
    }

    leave(){
        console.log("You've left from course ")
    }
}
