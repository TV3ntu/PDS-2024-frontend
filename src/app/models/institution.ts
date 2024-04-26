import { Course } from './course'
import { Entity } from './entity'
export class Institution extends Entity{

    override children: Course[]

    constructor(id:string, title: string, description: string, image: string,category:string, children: Course[]){
        super(id, title, description, image,category)
        this.children = children
    }
}