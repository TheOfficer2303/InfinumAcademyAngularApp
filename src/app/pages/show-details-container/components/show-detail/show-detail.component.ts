import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from 'src/app/services/review/review.model';
import { ReviewService } from 'src/app/services/review/review.service';
import { Show } from 'src/app/services/show/show.model';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowDetailComponent {
  @Input() show: Show;
  @Input() error: string;
  
  constructor() {}

  
}
