import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/app/services/review/review.model';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewListComponent implements OnInit {
  @Input() reviews: Array<Review>;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.reviews)
  }
}
