import { HttpErrorResponse } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { IUserResponse } from 'src/app/interfaces/userResponse.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginData } from './login-form/login-form.component';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent {
  public isLoading$:Subject<boolean> = new Subject<boolean>()

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  public onLogin(loginData: LoginData) {
    this.isLoading$.next(true);
    this.authService.loginUser(loginData).pipe(
      finalize(() => {
        this.isLoading$.next(false)
      })
    ).subscribe((loginData: IUserResponse) => {
      if (loginData) {
        this.router.navigate(['']);
      } 
    }, (errResponse: HttpErrorResponse) => {
      console.log(errResponse)
      this.snackBar.open(errResponse.error.errors, 'Close', {
        duration: 3500
      })
    })
  }
}