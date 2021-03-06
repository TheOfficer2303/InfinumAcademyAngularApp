import { Component, ChangeDetectionStrategy } from '@angular/core';
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

  constructor(private authService: AuthService, private router: Router) { }

  public onLogin(loginData: LoginData) {
    this.isLoading$.next(true);
    this.authService.logIn(loginData).pipe(
      finalize(() => {
        this.isLoading$.next(false)
      })
    ).subscribe((loginData: IUserResponse) => {
      if (loginData) {
        this.router.navigate(['']);
      } 
    })
  }
}