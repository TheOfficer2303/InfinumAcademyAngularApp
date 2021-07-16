import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { catchError, map, retry, switchMap, tap } from 'rxjs/operators';
import { Review } from 'src/app/services/review/review.model';
import { ReviewService } from 'src/app/services/review/review.service';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

interface ITemplateData {
  show: Show | null;
  reviews: Array<Review>;
}

@Component({
  selector: 'app-show-details-container',
  templateUrl: './show-details-container.component.html',
  styleUrls: ['./show-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailsContainerComponent {
	public isLoading: Boolean = true;
  public error: string;
  private id: string | null = null;

  private id$ = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => {
      const id: string | null = paramMap.get('id');
      if (id) {
        return id
      }
      return of(null)
    })
  )
  private sub2 = this.id$.subscribe(val => this.id = val)

  public template$: Observable <ITemplateData | null> = combineLatest([
    this.showService.getShowById(this.id),
    this.reviewService.getReviewsOfShowId(this.id)
  ]).pipe(
    map(([show, reviews]) => {
      return {
        show,
        reviews
      } 
    }), 
    tap(console.log),
    retry(1),
    catchError(val => {
      this.error = val;
      this.isLoading = false;
      console.log(this.error)  
      return of(null)
    })
  );

  private sub:Subscription = this.template$
	.subscribe({
		next: () => this.isLoading = false,
		complete: () => this.isLoading = false
	});

	constructor(private showService: ShowService, private activatedRoute: ActivatedRoute, private reviewService: ReviewService) {}
}
