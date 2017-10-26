import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/delay'

import { CustomValidators } from './custom-validators';
import { AsyncValidators } from './async-validators';
import { HelperService } from './helper-service';

@Component({
    selector: 'validation-recipe',
    template: `
        <div>
            <h3> Presenter </h3>
            <input [formControl]="presenterNameControl" >
            <div *ngIf="required()" style="color:red">
                Presenter is required
            </div>
            <div *ngIf="tooLong()" style="color:red">
                {{presenterNameControl.value}} is too long
            </div>
        </div>
        <div>
            <h3> Presenter Skillz </h3>
            <input [formControl]="presenterSkillsControl" type="number">
            <div *ngIf="tooLowSkillz()" style="color:red">
                Setting too low skillz, huh? <br> {{presenterNameControl.value}} skillz are over 9000
            </div>
        </div>
    `
})
export class ValidationRecipeComponent {

    presenterNameControl: FormControl;

    presenterSkillsControl: FormControl;

    constructor(private service: HelperService) { }

    ngOnInit() {
        this.presenterNameControl = new FormControl('', [Validators.required, CustomValidators.checkName])
        this.presenterSkillsControl = new FormControl('', [], [this.validateValueOnServer.bind(this)])
        // this.presenterSkillsControl = new FormControl('', [], AsyncValidators.createValidator(this.service))
    }

    required() {
        return this.presenterNameControl.hasError('required');
    }

    tooLong() {
        return this.presenterNameControl.hasError('tooLong');
    }

    tooLowSkillz() {
        return this.presenterSkillsControl.value != '' &&
            this.presenterSkillsControl.hasError('noSkillz');
    }

    validateValueOnServer(control: AbstractControl) {
        return this.service.validateOnServer(control.value).map(res =>
            res.isValid === true ? null : { noSkillz: true });
    }
}
