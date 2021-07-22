import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';
import { IReviewResponse } from 'src/app/interfaces/reviewsResponse.interface';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }
 
  public getReviews(): Observable<Array<Review>> {
    return this.http.get<{ body: { reviewsResponse: IReviewResponse }}>('https://tv-shows.infinum.academy/reviews').pipe(
      map((response) => {
        return response.body.reviewsResponse.reviews.map((review: IRawReview) => {
          return new Review(review);
        })
      })
    )
  }

  public getReviewsOfShowId(showId: string | null): Observable<Array<Review>> {
    return this.getReviews().pipe(map((reviews: Array<Review>) => reviews.filter((review: Review) => review.showId === showId)));
  } 
}