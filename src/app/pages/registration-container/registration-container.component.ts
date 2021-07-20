import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserFormData } from './components/registration-form/registration-form.component';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationContainerComponent {
  public isLoading$:Subject<boolean> = new Subject<boolean>()

  constructor(private authService: AuthService, private router: Router) { }

  public onRegisterUser(userFormData: UserFormData) {
    this.isLoading$.next(true)
    this.authService.registerUser(userFormData).pipe(
      finalize(() => {
        this.isLoading$.next(false);
      })
    )
    .subscribe((userData: UserFormData) => {
      this.router.navigate(['']);
    }

    )
  }

}
