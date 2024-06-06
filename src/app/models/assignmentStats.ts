import { Schedule } from "./schedule"
import { User } from "./user"

export class AssignmentStats {
    id: string
    quotas: number
    quantityAvailable: number
    isActive: boolean
    price: number
    name: string
    totalIncome: number
    status: string
    schedule: Schedule
    subscribers : User[]

    constructor(
        id: string,
        quotas: number,
        quantityAvailable: number,
        isActive: boolean,
        price: number,
        name: string,
        totalIncome: number,
        status: string,
        schedule: Schedule,
        subscribers: User[]
      ) {
        this.id = id;
        this.quotas = quotas;
        this.quantityAvailable = quantityAvailable;
        this.isActive = isActive;
        this.price = price;
        this.name = name;
        this.totalIncome = totalIncome;
        this.status = status;
        this.schedule = schedule;
        this.subscribers = subscribers;
      }
}