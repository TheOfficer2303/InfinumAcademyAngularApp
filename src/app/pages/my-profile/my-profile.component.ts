import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
