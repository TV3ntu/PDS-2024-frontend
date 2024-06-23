export class ReviewRequest {
    rating: number
    description: string

    constructor(rating:number, description: string) {
        this.rating = rating
        this.description= description
    }
}
