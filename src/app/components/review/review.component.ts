import {Component, Input} from '@angular/core';
import {Review} from "../../models/review";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  @Input() review!: Review
}
