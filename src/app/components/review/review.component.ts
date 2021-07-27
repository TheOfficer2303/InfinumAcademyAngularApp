import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/services/review/review.model';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent {  
  @Input() review: Review;
  @Output() deleteReview: EventEmitter<string> = new EventEmitter();
  public uid = this.storageService.get("authData").uid;
 
  public delete(id: string) {
    this.deleteReview.emit(id)
  }
  constructor(private storageService: StorageService) { }
}
