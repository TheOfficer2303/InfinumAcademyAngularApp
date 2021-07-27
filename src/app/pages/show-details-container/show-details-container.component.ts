import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { catchError, map, retry, switchMap, tap } from 'rxjs/operators';
import { Review } from 'src/app/services/review/review.model';
import { ReviewService } from 'src/app/services/review/review.service';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';
import { IReviewFormData } from './components/review-form/review-form.component';

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
    map((paramMap) => {
      const id: string | null = paramMap.get('id');
      console.log("drugi id", id)
      if (id) {
        return id
      }
      return null
    })
  )
 
  public trigger$ = new BehaviorSubject<boolean>(true);
  public templateData$: Observable<ITemplateData | null> = combineLatest([this.id$, this.trigger$]).pipe(
    map(([id]) => {
      return id;
    }),
    switchMap((id) => {
      console.log(id)
      if (id) {
        return this.getData(id)
      }
      return of(null)
    }),
    tap(console.log)
  )
  

  public getData(id: string) {
    console.log("fetching...")
    return combineLatest([
      this.showService.getShowById(id),
      this.reviewService.getReviewsOfShowId(id)
    ]).pipe(
      map(([show, reviews]) => {
        return {
          show,
          reviews
        } 
      }), 
      tap(console.log),
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
  }

  public post(reviewFormData: IReviewFormData) {
    reviewFormData.show_id = this.activatedRoute.snapshot.paramMap.get('id')
    
    this.reviewService.addReviewToShow(reviewFormData).pipe().
    subscribe(
      () => {
        this.trigger$.next(true)
      }
    )
    console.log("ovo ide prije response")
  }

	constructor(private showService: ShowService, private activatedRoute: ActivatedRoute, private reviewService: ReviewService) { }
}