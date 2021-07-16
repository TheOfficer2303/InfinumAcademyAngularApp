import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: 'app-show-details-container',
  templateUrl: './show-details-container.component.html',
  styleUrls: ['./show-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailsContainerComponent {
	public isLoading: Boolean = true;
  public error: string;

	public show$: Observable <Show | null> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => {
      const id: string | null = paramMap.get('id');

      if (id) {
        return this.showService.getShowById(id).pipe(
          retry(1),
          catchError(val => {
            this.error = val;
            console.log(this.error)  
            return of(null)
          })
        )
      }

      return of(null);
    })
  )

  sub:Subscription = this.showService.getShows()
	.subscribe({
		next: () => this.isLoading = false,
		error: error => this.isLoading = false,
		complete: () => this.isLoading = false
	});


	constructor(private showService: ShowService, private activatedRoute: ActivatedRoute) {}
}
