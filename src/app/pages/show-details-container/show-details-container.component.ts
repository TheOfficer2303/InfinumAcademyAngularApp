import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { catchError, finalize, map, retry, switchMap, tap } from 'rxjs/operators';
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
  private id: string | null = '';

  private id$ = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => {
      const id: string | null = paramMap.get('id');
      if (id) {
        return id
      }
      return of(null)
    })
  ).subscribe(id => {
    if(id) {
      this.id += id;
    }
  })
 
  public templateData$: Observable<ITemplateData | null> = this.getData("")

  public getData(mess: string) {
    console.log("fetching..." + mess)
    return combineLatest([
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
    if (this.id) {
      reviewFormData.show_id = this.id.toString();
    }
    
    this.reviewService.addReviewToShow(reviewFormData).pipe(
      finalize(() => {
        this.templateData$ = this.getData("u finalize");
      })
    ).
    subscribe(
      (response) => {
        console.log("response", response);
      }
    )
    console.log("ovo ide prije response")
    this.templateData$ = this.getData("izvan finamonalize");
  }

	constructor(private showService: ShowService, private activatedRoute: ActivatedRoute, private reviewService: ReviewService) {}
}