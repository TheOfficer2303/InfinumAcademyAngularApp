import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProfileComponent {
  public email = this.storageService.get("authData").uid

  constructor(private storageService: StorageService) { }

}
