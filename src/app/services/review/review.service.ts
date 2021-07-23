import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';
import { IReviewResponse } from 'src/app/interfaces/reviewsResponse.interface';
import { Show } from '../show/show.model';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }
 
  public getReviewsOfShowId(showId: string | null): Observable<Array<Review>> {
    return this.http.get<any>(`https://tv-shows.infinum.academy/shows/${showId}/reviews`).pipe(
      tap((response) => {
        console.log(response)
      }),
      map((response) => {
        return response.reviews.map((review: IRawReview) => {
          return new Review(review);
        })
      })
    )
  }
} 
