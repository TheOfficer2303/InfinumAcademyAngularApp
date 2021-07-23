import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Review } from 'src/app/services/review/review.model';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewListComponent {
  @Input() reviews: Array<Review>;
}
