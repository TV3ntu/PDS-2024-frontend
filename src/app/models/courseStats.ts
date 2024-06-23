import { Assignment } from "./assignment"
import { AssignmentStats } from "./assignmentStats"

export class CourseStats {
    id: string
    title: string
    description: string
    category: string
    image: string
    totalAssignments: number
    totalSubscriptions: number
    totalIncome: number
    mostPopularAssignment: Assignment
    mostProfitableAssignment: AssignmentStats[]
    assignments: AssignmentStats[]

    constructor(
        id: string,
        title: string,
        description: string,
        category: string,
        image: string,
        totalAssignments: number,
        totalSubscriptions: number,
        totalIncome: number,
        mostPopularAssignment: Assignment,
        mostProfitableAssignment: AssignmentStats[],
        assignments: AssignmentStats[]
      ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.image = image;
        this.totalAssignments = totalAssignments;
        this.totalSubscriptions = totalSubscriptions;
        this.totalIncome = totalIncome;
        this.mostPopularAssignment = mostPopularAssignment;
        this.mostProfitableAssignment = mostProfitableAssignment;
        this.assignments = assignments;
      }
}