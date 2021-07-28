import { HttpErrorResponse } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
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

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  public onRegisterUser(userFormData: UserFormData) {
    this.isLoading$.next(true)
    this.authService.register(userFormData).pipe(
      finalize(() => {
        this.isLoading$.next(false);
      })
    )
    .subscribe((userData: UserFormData) => {
      this.router.navigate(['']);
    }, (errResponse: HttpErrorResponse) => {
      this.snackBar.open(errResponse.error.errors[0], 'Close', {
        duration: 3500
      })
    })
  }
}