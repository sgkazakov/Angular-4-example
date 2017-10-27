import { Component, Inject, Injectable, OnInit, forwardRef } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_CONTROL_ACCESSOR = {
    // Token that's used to provide ControlValueAccessor to form controls
    provide: NG_VALUE_ACCESSOR,
    
    // hoisting for CustomFormComponent to be avaliable
    useExisting: forwardRef(() => CustomFormComponent),

    // extending the NG_VALUE_ACCESSOR with CustomFormComponent
    multi: true
};


@Component({
    selector: 'custom-form',
    providers: [CUSTOM_CONTROL_ACCESSOR],
    template: `
    <div class="rating">
        <span *ngFor="let star of stars; let i = index"
            (click)="onClick(i)">
           {{star}}
        </span>
	</div>
    `,
    styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit, ControlValueAccessor {
    
    private onTouch: Function;
    private onModelChange: Function;
    
    writeValue(value: any): void {
        this.value = value;

        this.stars = this.stars.map((el, i) => {
            return i < value ? "★" : "☆";
        });
    }

    // Angular provides this fn, so that we can use it to manage the control
    registerOnChange(fn: any): void {
        this.onModelChange = fn;
    }

    // Angular provides this fn, so that we can use it to manage the control
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    private stars: string[];

    value: number = 0;

    public x: string;

    onClick(index: number) {
        this.value = index + 1;
        
        this.stars = this.stars.map((el, i) => {
            return i <= index ? "★" : "☆";
        });

        this.onModelChange(this.value);
        this.onTouch();
    }

    ngOnInit() {
        this.stars = ["☆", "☆", "☆", "☆", "☆"];
        
    }

}
