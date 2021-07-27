import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';
import { IReviewsResponse } from 'src/app/interfaces/reviewsResponse.interface';
import { IReviewFormData } from 'src/app/pages/show-details-container/components/review-form/review-form.component';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../auth/auth.service';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseURL = environment.baseUrl;

  constructor(private http: HttpClient) { }
 
  public getReviewsOfShowId(showId: string | null): Observable<Array<Review>> {
    return this.http.get<IReviewsResponse>(this.baseURL + ApiPaths.Shows + `/${showId}/reviews`).pipe(
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

  public addReviewToShow(reviewData: IReviewFormData): Observable<Review> {
    return this.http.post<Review>(this.baseURL + '/reviews', reviewData).pipe(
      tap(console.log)
    );
  }

  public deleteReview(id: string): Observable<Review> {
    console.log("brišem...");
    return this.http.delete<Review>(this.baseURL + '/reviews/' + id);
  }
} 
