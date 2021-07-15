import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: 'app-show-details-container',
  templateUrl: './show-details-container.component.html',
  styleUrls: ['./show-details-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailsContainerComponent {
	constructor(private showService: ShowService, private activatedRoute: ActivatedRoute) {}

	public show$: Observable <Show | null> = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => {
      const id: string | null = paramMap.get('id');

      if (id) {
        return this.showService.getShowById(id);
      }

      return of(null);
    })
  )

	
}
