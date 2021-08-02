import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProfileComponent {
  public email = this.authService.getAuthData()?.uid

  constructor(private authService: AuthService) { }
}
