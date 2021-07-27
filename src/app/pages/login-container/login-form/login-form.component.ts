import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { letterCheckValidator } from 'src/app/validators/letterCheck.validator';

export interface LoginData {
  email: string,
  password: string
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  @Output() loginUser: EventEmitter<LoginData> = new EventEmitter();

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email, letterCheckValidator]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private fb: FormBuilder) { }

  public onLogin():void {
    this.loginUser.emit(this.loginForm.value);
    this.loginForm.reset;
  }
}
