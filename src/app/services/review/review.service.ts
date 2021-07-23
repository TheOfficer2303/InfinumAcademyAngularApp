import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IRawReview } from 'src/app/interfaces/rawReview.interface';
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
    return this.http.get<any>(this.baseURL + ApiPaths.Shows + `/${showId}/reviews`).pipe(
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

  public addReviewToShow(reviewData: IReviewFormData): Observable<IReviewFormData> {
    console.log("im here")
    return this.http.post<IReviewFormData>(this.baseURL + '/reviews', reviewData).pipe(
      tap(console.log)
    );
  }
} 
