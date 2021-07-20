import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormComponent {
  public registration: FormGroup = this.fb.group({
    email: [''],
    password: [''],
    confirmPassword: ['']
  })

  constructor(private fb: FormBuilder) { }
}
