import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, of } from 'rxjs';

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
  public ratings = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ]

  public filled$ = new BehaviorSubject([
    { id: 1, fill: false }, 
    { id: 2, fill: false },
    { id: 3, fill: false },
    { id: 4, fill: false },
    { id: 5, fill: false }
  ])
  
  public emptyStar = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"
  public filledStar = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Five_Pointed_Star_Solid.svg/1087px-Five_Pointed_Star_Solid.svg.png"

  constructor(private fb: FormBuilder) { }

  public reviewForm: FormGroup = this.fb.group({
    comment: ['', [Validators.required]],
    rating: ['', [Validators.required]]
  })

  public onPost() {
    this.postReview.emit(this.reviewForm.value);
    this.reviewForm.reset()
  }

  public giveRating(rating: number) {
    let helperArray = [];
    let filled = false;
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        filled = true
      }
      helperArray.push({id: i, fill: filled})
      filled =  false;
    }
    this.filled$.next(helperArray)
  }
}
