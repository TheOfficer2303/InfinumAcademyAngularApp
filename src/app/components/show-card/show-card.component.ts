import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowCardComponent implements OnInit {

  @Input() show:Show;
  constructor() { }

  ngOnInit(): void {
  }
  logPercentageRating(show:Show) {
    console.log(show.ratingInPercentage);
  }

}
