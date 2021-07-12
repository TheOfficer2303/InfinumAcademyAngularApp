import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';
import { ShowService } from 'src/app/services/show/show.service';

@Component({
  selector: 'app-top-rated-container',
  templateUrl: './top-rated-container.component.html',
  styleUrls: ['./top-rated-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatedContainerComponent implements OnInit {
  
  constructor(private showService: ShowService) { }

  shows: Array<Show>
  ngOnInit(): void {
    this.shows = this.showService.getTopRatedShows();
  }

}
