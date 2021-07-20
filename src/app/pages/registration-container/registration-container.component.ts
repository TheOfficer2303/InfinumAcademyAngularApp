import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserFormData } from './components/registration-form/registration-form.component';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationContainerComponent {
  constructor(private authService: AuthService, private router: Router) { }

  public onRegisterUser(userFormData: UserFormData) {
    this.authService.registerUser(userFormData).pipe(
      tap(console.log)
    )
    .subscribe((userData: UserFormData) => {
      this.router.navigate(['']);
    }

    )
  }

}
