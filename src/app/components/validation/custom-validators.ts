import { AbstractControl } from '@angular/forms';

export class CustomValidators {

    static checkName(control: AbstractControl) {
        return control.value.length < 6 ? null : { tooLong: true };
    }

}