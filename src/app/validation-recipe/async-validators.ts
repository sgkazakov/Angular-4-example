import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HelperService } from './helper-service';

export class AsyncValidators {

    static createValidator(obs$: HelperService) {
        return (control: AbstractControl) => {
            return obs$.validateOnServer(control.value).map(res =>
                res.isValid === true ? null : { noSkillz: true });
        };
    }
}
