import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: 'app-top-rated-container',
  templateUrl: './top-rated-container.component.html',
  styleUrls: ['./top-rated-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatedContainerComponent {
  
  public shows$: Observable < Array < Show >> = this.showService.getShows()
		.pipe(
			catchError(val => {
				console.log(val);
				return of([])
			})
		)
    
  constructor(private showService: ShowService) { }
}
