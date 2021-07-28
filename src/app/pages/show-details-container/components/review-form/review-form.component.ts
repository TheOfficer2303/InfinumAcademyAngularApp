import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

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

  public rating$ = new BehaviorSubject([
    { value: 1, star: "star_outline" }, 
    { value: 2, star: "star_outline" },
    { value: 3, star: "star_outline" },
    { value: 4, star: "star_outline" },
    { value: 5, star: "star_outline" }
  ])
  public currentRating$: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor(private fb: FormBuilder) { }

  public reviewForm: FormGroup = this.fb.group({
    comment: ['', [Validators.required]],
    rating: ['', [Validators.required]]
  })

  public onPost() {
    this.postReview.emit(this.reviewForm.value);
    this.reviewForm.reset();
  }

  public giveRating(rating: number) {
    this.currentRating$.next(rating)
    for (let i = 0; i < this.rating$.value.length; i++) {
      if (this.rating$.value[i].value <= this.currentRating$.value) {
        this.rating$.value[i].star = "star"
      } else {
        this.rating$.value[i].star = "star_outline"
      }
    }
  }
}