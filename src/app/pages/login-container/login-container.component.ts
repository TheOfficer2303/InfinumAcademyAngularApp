import { HttpErrorResponse } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
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
    this.isLoading$.next(true)
    this.authService.loginUser(loginData).pipe(
      finalize(() => {
        this.isLoading$.next(false)
      })
    ).subscribe((loginData: LoginData) => {
      if (loginData !== undefined) {
        this.router.navigate(['']);
      } 
    }, (error: HttpErrorResponse) => {
      console.log(error)
      this.snackBar.open(error.error.errors[0], 'Close', {
        duration: 3500
      })
    })
  }
}