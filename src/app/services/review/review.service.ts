import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private mockData: Array<IRawReview> = [
    {
      id: '1',
      showId: '1',
      rating: 5,
      comment: 'Good one!'
    },
    {
      id: '2',
      showId: '2',
      rating: 5,
      comment: 'Good!'
    },
    {
      id: '3',
      showId: '3',
      rating: 5,
      comment: 'Good 1!'
    },
    {
      id: '4',
      showId: '2',
      rating: 5,
      comment: 'Good show!'
    },
    {
      id: '5',
      showId: '3',
      rating: 1,
      comment: 'Bad show!'
    },
    {
      id: '6',
      showId: '4',
      rating: 5,
      comment: 'Very nice one!'
    },
    {
      id: '7',
      showId: '4',
      rating: 3,
      comment: 'Meh!'
    }
  ]

  private get reviews(): Array<Review> {
    return this.mockData.map((review: IRawReview) => {
      return new Review(review);
    })
  }

  public getReviews(): Observable<Array<Review>> {
    return of(this.reviews).pipe(delay(1000 + Math.random() * 1000));
  }

  public getReviewsOfShowId(showId: string | null): Observable<Array<Review>> {
    return this.getReviews().pipe(map((reviews: Array<Review>) => reviews.filter((review: Review) => review.showId === showId)));
    
  } 
}
