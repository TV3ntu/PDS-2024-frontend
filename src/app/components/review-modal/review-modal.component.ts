import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { ReviewRequest } from 'src/app/models/reviewRequest';
import { CourseService } from 'src/app/services/course/course.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.css']
})
export class ReviewModalComponent {
  @Input() courseId? : string
  @Output() closeModal = new EventEmitter()
  reviewForm: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CourseService, private notificationService: NotificationService) {
    this.reviewForm = this.fb.group({
      rating: [null, Validators.required],
      comment: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reviewForm.valid) {
    const reviewData = this.reviewForm.value;

    const reviewRequest = new ReviewRequest(reviewData.rating, reviewData.comment)

      this.courseService.addReview(this.courseId!, reviewRequest)
        .pipe(
          catchError((error) => {
            console.log(error)
            error.error.status = 401
            error.error.message = 'No se pudo añadir la calificación'
            return this.notificationService.handleError(error)
          })
        )
        .subscribe((data)=>{
          console.log(data)
          this.notificationService.notify(200, "¡Calificacion enviada exitosa!")
          this.closeModalEvent()
      })
    }
  }

  closeModalEvent(){
    this.closeModal.emit()
  }
}
