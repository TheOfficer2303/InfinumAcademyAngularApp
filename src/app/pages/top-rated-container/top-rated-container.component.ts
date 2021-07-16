import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: 'app-top-rated-container',
  templateUrl: './top-rated-container.component.html',
  styleUrls: ['./top-rated-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatedContainerComponent{
  public isLoading:Boolean = true;
	public error: string;
	
  public shows$: Observable <Array<Show>> = this.showService.getTopRatedShows()
		.pipe(
			retry(1),
			catchError(val => {
				this.error = val;
				return of([])
			})
		)

	private sub = this.shows$
		.subscribe({
			next: () => this.isLoading = false,
			error: error => this.isLoading = false,
			complete: () => this.isLoading = false
		});

  constructor(private showService: ShowService) { }
}
