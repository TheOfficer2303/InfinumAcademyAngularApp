import { AbstractControl, ValidationErrors } from '@angular/forms';

export function samePasswordsValidator(control: AbstractControl): ValidationErrors | null {
	const password1 = control.get('password');
	const password2 = control.get('confirmPassword');

	return password1 && password2 && password1.value === password2.value ? null : { notSame: 'Retry pls' }	
}