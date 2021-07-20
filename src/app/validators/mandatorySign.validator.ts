import { FormControl, ValidationErrors } from '@angular/forms';

export function mandatorySignValidator(control: FormControl): ValidationErrors | null {
	const mandatorySign: string = '@';
	const enteredValue: string = control.value || '';
	const hasMandatorySign: boolean = enteredValue.includes(mandatorySign);

	if (hasMandatorySign) {
		return null;
	} else {
		return { mandatory: `You need to include '@' sign!` }
	}
}