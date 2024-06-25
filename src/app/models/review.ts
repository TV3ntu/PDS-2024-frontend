export class Review {
  id: string
  description: string
  rating: number
  name: string
  lastName: string
  courseId: string

  constructor(
    id: string,
    description: string,
    rating: number,
    name: string,
    lastName: string,
    courseId: string
  ){
    this.id = id
    this.description = description
    this.rating = rating
    this.name = name
    this.lastName = lastName
    this.courseId = courseId
  }
}
