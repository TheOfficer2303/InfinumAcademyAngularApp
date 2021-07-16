import { Component,	ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class AllShowsContainerComponent implements OnInit{
	public isLoading: Boolean = true;
	public error: string;

	public shows$: Observable <Array<Show>> = this.showService.getShows()
		.pipe(
			catchError(val => {
				console.log(val);
				this.error = val;
				return of([])
			}), 
			retry(1)
		)

	sub = this.showService.getShows()
	.subscribe({
		next: () => this.isLoading = false,
		error: error => this.isLoading = false,
		complete: () => this.isLoading = false
	});
	
	
	ngOnInit(): void {
	
	}

	constructor(private showService: ShowService) {	}
}
