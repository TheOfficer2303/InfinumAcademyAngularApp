import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mandatorySignValidator } from 'src/app/validators/mandatorySign.validator';
import { samePasswordsValidator } from 'src/app/validators/samePasswords.validator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormComponent {
  public registration: FormGroup = this.fb.group({
    email: ['', [Validators.required, mandatorySignValidator]],
    passwords: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, 
      {validator: samePasswordsValidator}
    )
  })

  constructor(private fb: FormBuilder) { }
}
