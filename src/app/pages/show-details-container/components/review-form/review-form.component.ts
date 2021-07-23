import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IReviewFormData {
  rating: number;
  comment: string;
  show_id: string | null;
}

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewFormComponent {
  @Output() postReview: EventEmitter<IReviewFormData> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  public reviewForm: FormGroup = this.fb.group({
    comment: ['', [Validators.required]],
    rating: ['', [Validators.required]]
  })

  public onPost() {
    this.postReview.emit(this.reviewForm.value);
    this.reviewForm.reset()
  }
}
