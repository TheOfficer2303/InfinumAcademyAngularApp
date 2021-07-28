import { Component,	ChangeDetectionStrategy, OnInit} from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class AllShowsContainerComponent {
	public isLoading$ = new BehaviorSubject(true);
	public error$ = new Subject<string>();

	public shows$: Observable <Array<Show>> = this.showService.getShows()
		.pipe(
			catchError(val => {
				this.error$.next(val);
				return of([])
			}), 
			retry(1),
			tap(() => { 
				this.isLoading$.next(false);
			})
		)
		
	constructor(private showService: ShowService) {	}
}
