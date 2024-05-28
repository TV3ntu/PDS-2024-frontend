export class Reserve {
    institutionName: string
    courseName: string
    date: string
    hour: string
    status: string

    constructor(institutionName: string, courseName: string, date: string, hour: string, status:string) {
        this.institutionName= institutionName
        this.courseName=courseName
        this.date = date
        this.hour = hour
        this.status = status
    }
}
