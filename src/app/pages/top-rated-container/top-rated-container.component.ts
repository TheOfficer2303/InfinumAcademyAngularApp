import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Observable, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: 'app-top-rated-container',
  templateUrl: './top-rated-container.component.html',
  styleUrls: ['./top-rated-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatedContainerComponent{
	public isLoading$ = new BehaviorSubject(true);
	public error$ = new Subject<string>();

  public shows$: Observable <Array<Show>> = this.showService.getTopRatedShows()
		.pipe(
			
			catchError(val => {
				this.error$.next(val)
				return of([])
			}),
			retry(1),
			tap(() => {
				this.isLoading$.next(false)
			})
		)

  constructor(private showService: ShowService) { }
}