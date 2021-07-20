import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { letterCheckValidator } from 'src/app/validators/letterCheck.validator';
import { samePasswordsValidator } from 'src/app/validators/samePasswords.validator';

export interface UserFormData {
  email: string,
  password: string,
  password_confirmation: string
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormComponent {
  @Output() registerUser: EventEmitter<UserFormData> = new EventEmitter()

  public registration: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email, letterCheckValidator]],
    passwords: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, 
      {validator: samePasswordsValidator}
    )
  })

  constructor(private fb: FormBuilder) { }

  public onRegister():void {
    let nekiObjekt = {
      email: this.registration.get("email")?.value,
      password: this.registration.get(['passwords', 'password'])?.value,
      password_confirmation: this.registration.get(['passwords', 'confirmPassword'])?.value
    }
    this.registerUser.emit(nekiObjekt);
    this.registration.reset();
  }
}