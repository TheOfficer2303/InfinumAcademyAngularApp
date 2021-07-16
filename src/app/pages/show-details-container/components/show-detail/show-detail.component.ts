import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowDetailComponent {
  @Input() show: Show;
  @Input() error: string;

}
