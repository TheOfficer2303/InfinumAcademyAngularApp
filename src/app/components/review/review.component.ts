import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Review } from 'src/app/services/review/review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent {  
  @Input() review: Review;
  @Output() deleteReview: EventEmitter<string> = new EventEmitter();
  public uid = this.authService.getAuthData()?.uid;
 
  public delete(id: string) {
    this.deleteReview.emit(id)
  }
  constructor(private authService: AuthService) { }
}
