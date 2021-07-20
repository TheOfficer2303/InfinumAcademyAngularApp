import { FormControl, ValidationErrors } from '@angular/forms';

export function letterCheckValidator(control: FormControl): ValidationErrors | null {
	const enteredValue: string = control.value || '';
	const indexOfAt = enteredValue.indexOf('@')
	const username: string = enteredValue.substring(0, indexOfAt);

	if (!username.match(/^[A-Za-z]+$/)) {
		return { noLetters: 'Please include letters' }
	} else {
		return null;
	}

}