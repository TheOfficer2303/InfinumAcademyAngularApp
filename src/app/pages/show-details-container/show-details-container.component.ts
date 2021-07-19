import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, of, Subject, Subscription } from 'rxjs';
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
  public isLoading$ = new BehaviorSubject(true);
	public error$ = new Subject<string>();

  private id$ = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => {
      const id: string | null = paramMap.get('id');
      if (id) {
        return id
      }
      return of(null)
    })
  )
 
  public template2$ = this.id$.pipe(
    switchMap((id) => {
      return  combineLatest([
        this.showService.getShowById(id),
        this.reviewService.getReviewsOfShowId(id)
      ]).pipe(
        map(([show, reviews]) => {
          return {
            show,
            reviews
          } 
        }), 
        catchError(val => {
          this.error$.next(val);
          this.isLoading$.next(val);  
          return of(null)
        }),
        retry(1),
        tap(() => {
          this.isLoading$.next(false)
        })
      )
    })
  )  

	constructor(private showService: ShowService, private activatedRoute: ActivatedRoute, private reviewService: ReviewService) {}
}