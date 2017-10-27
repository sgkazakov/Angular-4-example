import { Component, OnInit } from "@angular/core";
import { FormControl, AbstractControl } from "@angular/forms";

@Component({
    selector: 'host',
    template: ` 
    <custom-form
        [formControl]="myControl">
    </custom-form>
    <div *ngIf="crazyRating()">
        Are you kiddin me??? <br> This one goes to eleven!!!
    </div>
    `,
    styles: ["div {text-align: center}"]
})
export class HostComponent implements OnInit {

    private myControl: FormControl;

    ngOnInit() {
        this.myControl = new FormControl(3, customFunc );
    }

    crazyRating() {
        return this.myControl.hasError('lowRating');
    }

}

function customFunc(control: AbstractControl){
    return control.value >= 3 ? null : { lowRating: true } 
}
