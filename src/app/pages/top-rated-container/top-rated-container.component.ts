import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: 'app-top-rated-container',
  templateUrl: './top-rated-container.component.html',
  styleUrls: ['./top-rated-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatedContainerComponent {
  
  public shows$: Observable<Array<Show>> = this.showService.getTopRatedShows();

  constructor(private showService: ShowService) { }
}
