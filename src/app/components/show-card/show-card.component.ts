import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowCardComponent implements OnInit {

  @Input() title:string;
  @Input() image_url:string;
  @Input() average_rating:number;
  
  constructor() { }

  ngOnInit(): void {
  }
  logPercentageRating(rating:number) {
    console.log(Show.ratingInPercentage(rating));
  }

}
