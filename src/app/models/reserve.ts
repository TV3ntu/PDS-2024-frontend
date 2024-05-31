export class Reserve {

    institutionName: string
    courseId: string
    courseName: string
    date: string
    hour: string
    status: string

    constructor(institutionName: string, courseId:string, courseName: string, date: string, hour: string, status:string) {
        this.institutionName= institutionName
        this.courseId=courseId
        this.courseName=courseName
        this.date = date
        this.hour = hour
        this.status = status
    }
}
