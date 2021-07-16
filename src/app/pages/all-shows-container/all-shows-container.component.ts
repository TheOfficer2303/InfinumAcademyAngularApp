import {	Component,	ChangeDetectionStrategy} from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
	selector: 'app-all-shows-container',
	templateUrl: './all-shows-container.component.html',
	styleUrls: ['./all-shows-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class AllShowsContainerComponent {
	public shows$: Observable<Array<Show>> = this.showService.getShows()
		.pipe(
			retry(1),
			catchError(val => {
				console.log(val);
				return of([])
			})
		)

	constructor(private showService: ShowService) {	}
}
