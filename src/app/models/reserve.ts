export class Reserve {
    assignmentId: string
    institutionName: string
    courseId: string
    courseName: string
    date: string
    hour: string
    status: string

    constructor(assignmentId:string, institutionName: string, courseId:string, courseName: string, date: string, hour: string, status:string) {
        this.assignmentId = assignmentId
        this.institutionName= institutionName
        this.courseId=courseId
        this.courseName=courseName
        this.date = date
        this.hour = hour
        this.status = status
    }
}
