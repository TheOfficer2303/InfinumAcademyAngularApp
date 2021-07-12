import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Show } from 'src/app/services/show/show.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowListComponent implements OnInit {
  @Input() shows: Array<Show>

  constructor() { }

  ngOnInit(): void {
  }

}
